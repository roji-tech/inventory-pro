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

const Sales = () => {
  const myaxios = useAxios();
  // const [dataList, setDataList] = useState({});
  // const [loading, setLoading] = useState(false);

  const defaultData = [
    {
      id: "af6085c6-47b1-4aec-92e0-4d939c2fa6",
      customer: {
        id: "10fb7dba-ebd3-4695-91f3-ddc9bc81",
        name: "Customer 1",
        email: "adio01@gmail.com",
      },
      description: null,
      discount: 0,
      total_selling_price: 13,
      sale_items: [
        {
          id: "58d867b0-b865-4c23-893c-3e896044b074",
          sale: "af6085c6-47b1-4aec-92e0-4db1939c2fa6",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 0,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f00-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          quantity: 5,
          unit_selling_price: 2.6,
          selling_price: 13,
          discount: 0,
        },
      ],
    },
    {
      id: "af6085c6-47b1-4aec-92e0-4db139c2fa6",
      customer: {
        id: "10fb7dba-ebd3-4695-91f3-d874c9bc81",
        name: "Customer 1",
        email: "adio01@gmail.com",
      },
      description: null,
      discount: 0,
      total_selling_price: 13,
      sale_items: [
        {
          id: "58d867b0-b865-4c23-893c-3e89044b074",
          sale: "af6085c6-47b1-4aec-92e0-4db1939c2fa6",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 0,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f00-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          quantity: 5,
          unit_selling_price: 2.6,
          selling_price: 13,
          discount: 0,
        },
      ],
    },
    {
      id: "af6085c6-47b1-4aec-92e0-4db1939c2fa6",
      customer: {
        id: "10fb7dba-ebd3-4695-91f3-dd0874c9bc81",
        name: "Customer 1",
        email: "adio01@gmail.com",
      },
      description: null,
      discount: 0,
      total_selling_price: 13,
      sale_items: [
        {
          id: "58d867b0-b865-423-893c-3e896044b074",
          sale: "af6085c6-47b1-4aec-92e0-4db1939c2fa6",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 0,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f00-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          quantity: 5,
          unit_selling_price: 2.6,
          selling_price: 13,
          discount: 0,
        },
      ],
    },
    {
      id: "af6085c6-47b1-4aec-92e0-4b1939c2fa6",
      customer: {
        id: "10fb7dba-ebd3-4695-91f3-dd0874c9bc81",
        name: "Customer 1",
        email: "adio01@gmail.com",
      },
      description: null,
      discount: 0,
      total_selling_price: 13,
      sale_items: [
        {
          id: "58d867b0-b865-4c23-893c-396044b074",
          sale: "af6085c6-47b1-4aec-92e0-4db1939c2fa6",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 0,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f0-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          quantity: 5,
          unit_selling_price: 2.6,
          selling_price: 13,
          discount: 0,
        },
      ],
    },
    {
      id: "af85c6-47b1-4aec-92e0-4db1939c2fa6",
      customer: {
        id: "10fb7dba-ebd3-4695-91f3-dd0874c9bc81",
        name: "Customer 1",
        email: "adio01@gmail.com",
      },
      description: null,
      discount: 0,
      total_selling_price: 13,
      sale_items: [
        {
          id: "58d867b0-b865-4c23-893c-3e896044b074",
          sale: "af6085c6-47b1-4aec-92e0-4db1939c2fa6",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 0,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f00-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          quantity: 5,
          unit_selling_price: 2.6,
          selling_price: 13,
          discount: 0,
        },
      ],
    },
  ];

  const [data, setData] = useFetchData(
    defaultData,
    "/sales/",
    "get",
    {},
    "Sales"
    // transformProductJsonData
  );

  const [rows, setRows] = useState(data?.results);

  useEffect(() => {
    setRows(data?.results);
    console.error("Sales", data);
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
      headerName: "Customer's name",
      field: "customer_name",
      width: 150,
    },
    {
      headerName: "Customer's email",
      field: "customer_email",
      width: 170,
    },

    {
      field: "total_selling_price",
      headerName: "Total Selling Price",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "discount",
      headerName: "Discount",
      width: 100,
      headerAlign: "center",
    },
  ];

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        title={<span className="bolder">Sales</span>}
        showHeaderBtn={true}
        headerBtnText="New Sale"
        headerBtnURL="/sales/add"
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
                initialState={{
                  rows: rows?.results,
                  columns,
                  pagination: { paginationModel: { pageSize: 10 } },
                }}
                pageSizeOptions={[5, 10, 15, 20, 25]}
                disableRowSelectionOnClick
              />
            </section>
          </>
        }
      />
    </Wrapper>
  );
};

export default Sales;

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
