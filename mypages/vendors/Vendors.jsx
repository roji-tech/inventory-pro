import { useEffect, useState } from "react";
import styled from "styled-components";
import MyDataGrid from "@components/datagrid";
import PagesMainLayout from "@layouts/PagesMainLayout";
// import { memo, useRef } from "react";
// import { useClickOutside2 } from "@hooks/useClickOutside";
import Link from "next/link";
import { useFetchData } from "@hooks/useFetchData";
import { getRandomValues } from "@utils/getRandomStatus";
import { useGridApiContext } from "@mui/x-data-grid";
import * as React from "react";
import { unstable_useEnhancedEffect as useEnhancedEffect } from "@mui/utils";
import useAxios from "@hooks/useAxios";
import { FilterElement } from "@mypages/FilterElement";
import { SearchBox } from "@mypages/SearchBox";

const Vendors = () => {
  const myaxios = useAxios();
  // const [dataList, setDataList] = useState({});
  // const [loading, setLoading] = useState(false);

  const defaultData = [
    {
      id: "4136d247-5a75-4f30-9fcd-436549bc2f",
      name: "Vendor 1",
      email: "vendor1@vendors.com",
      phone_no: "08109999999999",
      qdp_rating: 0,
      products: [],
    },
    {
      id: "4136d247-5a75-4f30-9fcd-4369bcf72f",
      name: "Vendor 2",
      email: "vendor1@vendors.com",
      phone_no: "08109999999999",
      qdp_rating: 0,
      products: [],
    },
    {
      id: "4136d247-5a75-4f30-9fcd-43f72f",
      name: "Vendor 3",
      email: "vendor1@vendors.com",
      phone_no: "08109999999999",
      qdp_rating: 0,
      products: [],
    },
    {
      id: "4136d247-75-4f30-9fcd-436549bcf72f",
      name: "Vendor 23",
      email: "vendor1@vendors.com",
      phone_no: "08109999999999",
      qdp_rating: 0,
      products: [],
    },
  ];

  const [data, setData] = useFetchData(
    defaultData,
    "/vendors/",
    "get",
    {},
    "Vendors"
    // transformProductJsonData
  );

  const [rows, setRows] = useState(data?.results);

  useEffect(() => {
    setRows(data?.results);
    console.error("vendors", data);
  }, [data]);

  function ProductEditInputCell(props) {
    const { id, value, field, hasFocus } = props;
    const apiRef = useGridApiContext();
    const ref = React.useRef();

    const handleValueChange = (event) => {
      const newValue = event.target.value;
      apiRef.current.setEditCellValue({
        id,
        field,
        value: { ...value, name: newValue },
      });
    };

    useEnhancedEffect(() => {
      if (hasFocus && ref.current) {
        const input = ref.current.querySelector(`input[value="${value}"]`);
        input?.focus();
      }
    }, [hasFocus, value]);

    return (
      <input
        ref={ref}
        type="text"
        value={value?.name}
        onChange={handleValueChange}
        className="_full_wh _lg_text_regular _bg_white"
        style={{ border: "5px double #00a6ffe8", boxSizing: "border-box" }}
      />
    );
  }

  const columns = [
    {
      field: "id",
      headerName: "PRODUCT ID",
      width: 130,
      // headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "VENDOR'S NAME",
      width: 200,
    },
    {
      field: "email",
      headerName: "EMAIL",
      width: 170,
    },

    {
      field: "phone_no",
      headerName: "PHONE NO.",
      width: 150,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "gdp_rating",
      headerName: "Rating",
      width: 150,
      headerAlign: "center",
    },
  ];

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        title={<span className="bolder">Vendors</span>}
        showHeaderBtn={true}
        headerBtnText="Add New Vendor"
        headerBtnURL="/vendors/add"
        mainContent={
          <>
            <header className="contentHeader _flex_jcsb _align_center">
              <SearchBox />
              <div className="_flex _gap20">
                <FilterElement />
              </div>
            </header>

            <section className="contentSection">
              <MyDataGrid
                height={"100%"}
                rows={rows}
                columns={columns}
                customStyles={`
                    .actions {
                      overflow: visible !important;
                    }
                    .status {                
                      .MuiDataGrid-cellContent {
                        padding: 3px 8px !important;
                        border: 0  !important;
                        border-radius: 8px;
      
                        display: grid;
                        place-items: center;
                        
                        text-align: center !important;
                        text-transform: capitalize;
      
                        height: 28px;
                        width: max-content;
      
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                      }
                    }
      
                    .status.active {                
                      .MuiDataGrid-cellContent {
                        color: #519C66;
                        background: rgba(50, 147, 111, 0.16);
                      }
                    }
                    
                    .status.re_order {
                      .MuiDataGrid-cellContent {
                        background: rgba(245, 126, 119, 0.16);
                        color #CC5F5F;
                      }
                    }
      
                    .status.average {
                      .MuiDataGrid-cellContent {
                        background: #5570f128;
                        color: #5570F1;
                      }
                    }
                  `}
                initialState={{
                  rows: rows?.results,
                  columns,
                  pagination: { paginationModel: { pageSize: 10 } },
                }}
                pageSizeOptions={[5, 10, 15, 20, 25]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </section>
          </>
        }
      />
    </Wrapper>
  );
};

export default Vendors;

const Wrapper = styled.div`
  &&& {
    .contentHeader {
      gap: 65px;

      .searchBox {
        height: 40px;
        flex-shrink: 0;
        flex: 1;
        gap: 8px;

        border-radius: 4px;
        border: 1px solid var(--Default-input-stroke, rgba(1, 12, 21, 0.1));
        background: var(--Default-input-fill, #fafafa);

        input {
          font-size: 16px;
          flex: 1;

          &::placeholder {
            color: var(--Default-txt, rgba(1, 12, 21, 0.2));

            /* Mid text semibold */

            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px; /* 150% */
          }
        }
      }
    }

    .contentSection {
      flex: 1;
    }
  }
`;

function transformProductJsonData(jsonData) {
  return jsonData.map((product) => {
    const { id, name, image, quantity } = product;

    return {
      id,
      product: { name, icon: image },
      quantity,
      status:
        product?.status ??
        getRandomValues(["average", "Active", "Re-order point"]),
      category:
        product?.category ??
        getRandomValues(["Drugs", "Spray", "Beverages", "Stationeries"]),
    };
  });
}
