import { useEffect, useState } from "react";
import styled from "styled-components";
import { ordersData2 } from "@mypages/SECT4";
import { renderProductCell } from "@mypages/renderCell";
import MyDataGrid from "@components/datagrid";
import clsx from "clsx";
import PagesMainLayout from "@layouts/PagesMainLayout";
import { FilterElement } from "@mypages/FilterElement";
import { useFetchData } from "@hooks/useFetchData";
import { getRandomValues } from "@utils/getRandomStatus";

const Stocks = () => {
  const defaultData = [
    {
      id: "0488e-29eb-4d1d-9504-29f455bea925",
      serial_no: "#000000",
      quantity: 12,
      safety_stock: 0,
      reordering_point: 0,
      cost_price: 15,
      selling_price: 20,
      holding_cost: 1,
      ordering_cost: 1,
      expiring_date: "2030-12-31",
      barcode: "111111111",
      image:
        "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      product: {
        id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
        name: "Product 1",
        image: null,
        quantity: null,
      },
      size_category: {
        id: "fa2af31d-3b22-4d91-8d26-7f728db77f74",
        name: "Size Category 2",
        product: {
          id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
          name: "Product 1",
          image: null,
          quantity: null,
        },
      },
      category: null,
      vendor: null,
    },
    {
      id: "076f-424e-4f2a-8f26-e5ac01aacf00",
      serial_no: "#000001",
      quantity: 10,
      safety_stock: 0,
      reordering_point: 0,
      cost_price: 15,
      selling_price: 20,
      holding_cost: 1,
      ordering_cost: 1,
      expiring_date: "2030-12-31",
      barcode: "111111111",
      image:
        "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      product: {
        id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
        name: "Product 1",
        image: null,
        quantity: null,
      },
      size_category: {
        id: "fa2af31d-3b22-4d91-8d26-7f728db77f74",
        name: "Size Category 2",
        product: {
          id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
          name: "Product 1",
          image: null,
          quantity: null,
        },
      },
      category: null,
      vendor: null,
    },
    {
      id: "2b488e-29eb-4d1d-9504-29f455bea925",
      serial_no: "#000000",
      quantity: 9,
      safety_stock: 0,
      reordering_point: 0,
      cost_price: 15,
      selling_price: 20,
      holding_cost: 1,
      ordering_cost: 1,
      expiring_date: "2030-12-31",
      barcode: "111111111",
      image:
        "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      product: {
        id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
        name: "Product 1",
        image: null,
        quantity: null,
      },
      size_category: {
        id: "fa2af31d-3b22-4d91-8d26-7f728db77f74",
        name: "Size Category 2",
        product: {
          id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
          name: "Product 1",
          image: null,
          quantity: null,
        },
      },
      category: null,
      vendor: null,
    },
    {
      id: "a50ef-424e-4f2a-8f26-e5ac01aacf00",
      serial_no: "#000001",
      quantity: 0,
      safety_stock: 0,
      reordering_point: 0,
      cost_price: 15,
      selling_price: 20,
      holding_cost: 1,
      ordering_cost: 1,
      expiring_date: "2030-12-31",
      barcode: "111111111",
      image:
        "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      product: {
        id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
        name: "Product 5",
        image: null,
        quantity: null,
      },
      size_category: {
        id: "fa2af31d-3b22-4d91-8d26-7f728db77f74",
        name: "Size Category 2",
        product: {
          id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
          name: "Product 1",
          image: null,
          quantity: null,
        },
      },
      category: null,
      vendor: null,
    },
    {
      id: "2b40488e-29eb-4d1d-9504-2455bea925",
      serial_no: "#000000",
      quantity: 29,
      safety_stock: 0,
      reordering_point: 0,
      cost_price: 15,
      selling_price: 20,
      holding_cost: 1,
      ordering_cost: 1,
      expiring_date: "2030-12-31",
      barcode: "111111111",
      image:
        "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      product: {
        id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
        name: "Product 1",
        image: null,
        quantity: null,
      },
      size_category: {
        id: "fa2af31d-3b22-4d91-8d26-7f728db77f74",
        name: "Size Category 2",
        product: {
          id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
          name: "Product 1",
          image: null,
          quantity: null,
        },
      },
      category: null,
      vendor: null,
    },
    {
      id: "a50e076f-424e-4f2af26-e5ac01aacf00",
      serial_no: "#000001",
      quantity: 3,
      safety_stock: 0,
      reordering_point: 0,
      cost_price: 15,
      selling_price: 20,
      holding_cost: 1,
      ordering_cost: 1,
      expiring_date: "2030-12-31",
      barcode: "111111111",
      image:
        "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      product: {
        id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
        name: "Product 1",
        image: null,
        quantity: null,
      },
      size_category: {
        id: "fa2af31d-3b22-4d91-8d26-7f728db77f74",
        name: "Size Category 2",
        product: {
          id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
          name: "Product 1",
          image: null,
          quantity: null,
        },
      },
      category: null,
      vendor: null,
    },
  ];

  const [data, setData] = useFetchData(
    defaultData,
    "/product-items/",
    "get",
    {},
    "Products",
    transformProductJsonData
  );

  const [rows, setRows] = useState(data?.results);

  const [current, setCurrent] = useState("All Products");
  const HEADERS = [
    { name: "All Products", number: rows?.length ?? 0, data: rows },
    {
      name: "Available",
      number: rows && [...rows.filter((item) => item?.quantity > 0)]?.length,
      data: rows && [...rows.filter((item) => item?.quantity > 0)],
    },
    {
      name: "Low on stock",
      number: rows && [...rows.filter((item) => item.quantity <= 20)]?.length,
      data: rows && [...rows.filter((item) => item.quantity <= 20)],
    },
    {
      name: "Out of stock",
      number: rows && [...rows.filter((item) => item?.quantity < 1)]?.length,
      data: rows && [...rows.filter((item) => item?.quantity < 1)],
    },
    {
      name: "Expiring soon",
      number: rows && [...rows.filter((item) => item?.date)]?.length,
      data: rows && [...rows.filter((item) => item?.date)],
    },
  ];

  useEffect(() => {
    setRows(data?.results);
  }, [data]);

  // const rows = ordersData2.slice(0, 100);

  const columns = [
    { field: "expiring_date", headerName: "Expiring date", width: 130 },
    {
      field: "product",
      headerName: "PRODUCT NAME",
      width: 180,
      renderCell: renderProductCell,
    },
    {
      field: "size_category",
      headerName: "Size",
      width: 150,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params) => {
        if (!params.value) {
          return "";
        }
        return `${params.value?.name?.toLocaleString()}`;
      },
    },
    {
      field: "id",
      headerName: "PRODUCT ID",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "selling_price",
      headerName: "Selling Price",
      headerAlign: "center",
      align: "center",
      width: 100,
      valueFormatter: (params) => {
        if (!params.value) {
          return "";
        }
        return `₦${params.value.toLocaleString()}`;
      },
    },
    {
      field: "quantity",
      headerName: "QUANTITY",
      width: 150,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params) => {
        if (!params.value) {
          return "0 in Stock";
        }
        return `${params.value.toLocaleString()} in Stock`;
      },
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 150,
      headerAlign: "center",
      align: "center",
      cellClassName: (params) => {
        if (params.value == null) {
          return "";
        }

        return clsx("status", {
          active: String(params.value).toLowerCase().includes("active"),
          pending: String(params.value).toLowerCase().includes("average"),
          failed: String(params.value).toLowerCase().includes("re-order"),
        });
      },
    },
  ];

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        title={
          <span className="bolder">
            Products {current != "All Products" ? `(${current})` : ""}
          </span>
        }
        headerBtnText={"New Sale"}
        showHeaderBtn={true}
        headerBtnURL={"/sales/add"}
        mainContent={
          <>
            <header className="_flex_jcsb">
              <div className="headings _flex _gap20">
                {HEADERS.map((item) => (
                  <div
                    key={item?.name}
                    onClick={() => setCurrent(item?.name)}
                    className="_flex _align_center _gap8 _pointer"
                    style={{
                      color:
                        current == item?.name
                          ? "#010c15"
                          : "rgba(1, 12, 21, 0.60)",
                      borderBottom:
                        current != item?.name
                          ? "2px solid transparent"
                          : "2px solid #439ADE",
                      padding: "12px 0",
                      marginBottom: "-1px",
                      borderSpacing: "15px",
                    }}
                  >
                    <p>{item?.name}</p>
                    <span className="_grid_center">{item?.number}</span>
                  </div>
                ))}
              </div>

              <FilterElement />
            </header>

            <section className="contentSection">
              <MyDataGrid
                height={"100%"}
                rows={HEADERS.find((item) => item?.name == current).data}
                columns={columns}
                customStyles={`
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
              
              .status.pending {
                .MuiDataGrid-cellContent {
                  background: rgba(85, 112, 241, 0.16);
                  color #5570F1);
                }
              }

              .status.failed {
                .MuiDataGrid-cellContent {
                  background: rgba(245, 126, 119, 0.16);
                  color: #CC5F5F;
                }
              }
            `}
                initialState={{
                  rows,
                  columns,
                  pagination: { paginationModel: { pageSize: 10 } },
                }}
                pageSizeOptions={[5, 10, 15, 20, 25]}
              />
            </section>
          </>
        }
      />
    </Wrapper>
  );
};

export default Stocks;

const Wrapper = styled.div`
  &&& {
    .contentSection {
      flex: 1;
    }
  }
`;

function transformProductJsonData(jsonData) {
  return jsonData?.reverse().map((product) => {
    return {
      ...product,
      status:
        product?.status ??
        getRandomValues(["average", "Active", "Re-order point"]),
    };
  });
}
