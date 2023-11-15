import { useState } from "react";
import styled from "styled-components";
import { ordersData2 } from "./SECT4";
import { renderProductCell } from "./renderProductCell";
import MyDataGrid from "@components/datagrid";
import clsx from "clsx";

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

  const FILTERS = [
    { name: "Category", number: 20, icon: "category.svg" },
    { name: "Status", number: 20, icon: "filter_icon.svg" },
    { name: "Expiring", number: 20, icon: "filter_icon.svg" },
    { name: "Item Movement", number: 20, icon: "filter_icon.svg" },
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
      <header className="_flex_jcsb">
        <p>Products</p>

        <button disabled="disabled" className="_flex_center">
          <img src="/add.svg" alt="" />
          <span>Add Stock</span>
        </button>
      </header>

      <div className="main _flex_col _bg_white">
        <header className="_flex_jcsb">
          <div className="headings _flex _gap20">
            {HEADERS.map((item) => (
              <div
                key={item?.name}
                onClick={() => setCurrent(item?.name)}
                className="_flex _align_center _gap8 _pointer"
                style={{
                  color:
                    current == item?.name ? "#010c15" : "rgba(1, 12, 21, 0.60)",
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

          <div className="filter _flex_center">
            <>
              <input className="_d_none" type="checkbox" id="filterToggle" />
              <img src="/filter.svg" className="_pointer" alt="" />
              <p className="_pointer">Filter</p>
              <label
                className="toggler _pointer"
                htmlFor="filterToggle"
              ></label>
            </>

            <div className="filterBox _flex_col _gap10">
              <header className="_flex_jcsb _align_center">
                <p>Filter by</p>
                <label className="_pointer" htmlFor="filterToggle">
                  Cancel
                </label>
              </header>
              <div className="search _flex _align_center">
                <img src="/search.svg" alt="" />
                <input className="_bg_trans" type="text" placeholder="Search" />
              </div>

              <div className="filter_items _flex_col_jcsb _flex1">
                {FILTERS.map((item) => (
                  <div className="_flex_jcsb _p5_0 _gap10">
                    <div className="_flex _gap10">
                      <img src={item?.icon} alt="" />
                      <p>{item?.name}</p>
                      <img src="/arrow_left.svg" className="_pointer" alt="" />
                    </div>
                    <span className="_grid_center" style={{}}>
                      {item?.number}
                    </span>
                  </div>
                ))}
              </div>

              <div className="reset _align_center _flex_jcsb">
                <p>Reset all filters</p>
                <button className="_grid_center">Apply Filter</button>
              </div>
            </div>
          </div>
        </header>

        <section className="">
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

                  font-family: Inter;
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
      </div>
    </Wrapper>
  );
};

export default Stocks;

const Wrapper = styled.div`
  &&& {
    > header {
      height: 55px;

      button {
        width: 112px;
        height: 40px;
        gap: 8px;

        border-radius: 4px;
        background: #002cca;

        color: #fff;

        font-family: "Source Sans Pro";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px; /* 150% */
      }
    }

    .main {
      > header {
        .headings {
          margin-bottom: 12px;
          border-bottom: 1px solid rgba(1, 12, 21, 0.1);
          flex: 1;

          p {
            font-family: "Source Sans Pro";
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }

          span {
            background: #e4eff9;
            border-radius: 50%;

            width: 32px;
            height: 32px;

            font-family: "Source Sans Pro";
            font-size: 13px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
        }
        .filter {
          & {
            width: 88px;
            height: 40px;
            border-radius: 4px;
            border: 1px solid #e4eff9;
            background: #f6fbff;
            align-self: flex-end;

            position: relative;
          }

          .filterBox {
            & {
              transition: 0.2s all ease-in-out;
              position: absolute;
              z-index: 99;
              top: 90%;
              right: 50%;
              width: 274px;
              height: 323px;
              padding: 12px;

              border-radius: 4px;
              background: var(--White, #fff);

              box-shadow: -4px 4px 13px 4px rgba(118, 128, 135, 0.08);
            }

            .search {
              height: 40px;
              padding: 10px;
              background: #fafafa;

              input {
                flex: 1;
                background: #fafafa;
                color: rgba(1, 12, 21, 0.7);
              }
            }

            .filter_items {
              white-space: nowrap;

              span {
                width: 24px;
                background: #f6f6f6;
                border-radius: 50%;
                height: 24px;

                color: var(--Paragraph-color, rgba(1, 12, 21, 0.7));

                font-family: "Source Sans Pro";
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: 21px; /* 150% */
              }
            }

            .reset {
              width: 100%;
              height: 60px;
              justify-self: flex-end;
              margin-bottom: -12px;

              p {
                color: var(--Paragraph-color, rgba(1, 12, 21, 0.7));

                font-family: "Source Sans Pro";
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: 21px; /* 150% */
              }

              button {
                border-radius: 4px;
                background: var(--main, #002cca);

                width: 101px;
                height: 40px;
              }
            }
          }

          .toggler {
            position: absolute;
            background: transparent;
            inset: 0;
          }

          #filterToggle {
            background: yellow;

            &:checked ~ .filterBox {
              transform-origin: 100% 0;
              transform: translate(200%);
              scale: 0;
            }
          }

          p {
            color: rgba(1, 12, 21, 0.7);

            font-family: "Source Sans Pro";
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
        }
      }

      > section {
        flex: 1;
      }
    }
  }
`;
