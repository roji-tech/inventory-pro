import { useState } from "react";
import styled from "styled-components";
import { ordersData2 } from "@mypages/SECT4";
import { renderProductCell } from "@mypages/renderCell";
import MyDataGrid from "@components/datagrid";
import clsx from "clsx";
import PagesMainLayout from "@layouts/PagesMainLayout";
import { FilterElement } from "@mypages/FilterElement";

const Stocks = () => {
  const [current, setCurrent] = useState("All Products");
  const HEADERS = [
    { name: "All Products", number: 300, data: [...ordersData2.slice(0, 100)] },
    {
      name: "Available",
      number: 500,
      data: [...ordersData2.slice(0, 100).filter((item) => item?.supply > 0)],
    },
    {
      name: "Low on stock",
      number: 1,
      data: [...ordersData2.slice(0, 100).filter((item) => item.supply <= 20)],
    },
    {
      name: "Out of stock",
      number: 1,
      data: [...ordersData2.slice(0, 100).filter((item) => item?.supply < 1)],
    },
    {
      name: "Expiring soon",
      number: 10,
      data: [...ordersData2.slice(0, 100).filter((item) => item?.date)],
    },
  ];

  const rows = ordersData2.slice(0, 100);

  const columns = [
    { field: "date", headerName: "Expiring date", width: 130 },
    {
      field: "product",
      headerName: "PRODUCT NAME",
      width: 250,
      renderCell: renderProductCell,
    },
    {
      field: "id",
      headerName: "PRODUCT ID",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "AMOUNT",
      headerAlign: "center",
      align: "center",
      width: 100,
    },
    {
      field: "supply",
      headerName: "QUANTITY",
      width: 150,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params) => {
        if (!params.value) {
          return "";
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
        btnText={"Add Stock"}
        showHeaderBtn={true}
        headerBtnURL={"/stocks/add1"}
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
