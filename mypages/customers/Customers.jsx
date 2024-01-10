import { useEffect, useState } from "react";
import styled from "styled-components";
import MyDataGrid from "@components/datagrid";
import PagesMainLayout from "@layouts/PagesMainLayout";
// import { memo, useRef } from "react";
// import { useClickOutside2 } from "@hooks/useClickOutside";
import Link from "next/link";
import { useFetchData } from "@hooks/useFetchData";
import { getRandomValues } from "@utils/getRandomStatus";
import * as React from "react";
import { FilterElement } from "@mypages/FilterElement";
import { SearchBox } from "@mypages/SearchBox";

const Customers = () => {
  // const [dataList, setDataList] = useState({});
  // const [loading, setLoading] = useState(false);

  const defaultData = [
    {
      id: "4136d247-5a75-4f30-9fcd-436549bc2f",
      name: "Customer 1",
      email: "cust@ourcustomer.com",
      phone_no: "08109999999999",
      qdp_rating: 0,
      products: [],
    },
    {
      id: "4136d247-5a75-4f30-9fcd-4369bcf72f",
      name: "Customer 2",
      email: "cust@ourcustomer.com",
      phone_no: "08109999999999",
      qdp_rating: 0,
      products: [],
    },
    {
      id: "4136d247-5a75-4f30-9fcd-43f72f",
      name: "Customer 3",
      email: "cust@ourcustomer.com",
      phone_no: "08109999999999",
      qdp_rating: 0,
      products: [],
    },
    {
      id: "4136d247-75-4f30-9fcd-436549bcf72f",
      name: "Customer 23",
      email: "cust@ourcustomer.com",
      phone_no: "08109999999999",
      qdp_rating: 0,
      products: [],
    },
  ];

  const [data, setData] = useFetchData(
    defaultData,
    "/customers/",
    "get",
    {},
    "Customers"
  );

  const [rows, setRows] = useState(data?.results);

  useEffect(() => {
    setRows(data?.results);
    console.error("vendors", data);
  }, [data]);

  const columns = [
    {
      field: "name",
      headerName: "VENDOR'S NAME",
      width: 250,
    },
    {
      field: "id",
      headerName: "Customer ID",
      width: 200,
      // headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "EMAIL",
      width: 200,
    },
  ];

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        title={<span className="bolder">Customers</span>}
        headerBtnText="Add New Customer"
        headerBtnURL="/customers/add"
        showHeaderBtn={true}
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

export default Customers;

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
