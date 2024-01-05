import styled from "styled-components";
import { ordersData2 } from "@mypages/SECT4";
import {
  renderCategoryCell,
  renderProductCell,
  RenderOptionsCell,
} from "@mypages/renderCell";
import MyDataGrid from "@components/datagrid";
import clsx from "clsx";
import PagesMainLayout from "@layouts/PagesMainLayout";
import { SearchBox } from "@mypages/SearchBox";

import { memo, useRef } from "react";
import { useClickOutside2 } from "@hooks/useClickOutside";
import Link from "next/link";

const OrdersAnalysis = () => {
  const rows = ordersData2.slice(0, 100);

  const columns = [
    {
      field: "id",
      headerName: "PRODUCT ID",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "product",
      headerName: "PRODUCT NAME",
      width: 250,
      renderCell: renderProductCell,
    },
    {
      field: "category",
      headerName: "CATEGORY",
      width: 150,
      align: "left",
      renderCell: renderCategoryCell,
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
      headerName: "TOTAL ORDERS",
      width: 150,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params) => {
        if (!params.value) {
          return 0;
        }
        return `${+params.value * 200}`;
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
          average: String(params.value).toLowerCase().includes("average"),
          re_order: String(params.value).toLowerCase().includes("re-order"),
        });
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "ACTIONS",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <div className="_flex _gap15">
            <div className="actionIcon _hover_blue _pointer _p5 _grid_center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g opacity="0.7" clipPath="url(#clip0_142_2566)">
                  <path
                    d="M9.37333 6.01333L9.98667 6.62667L3.94667 12.6667H3.33333V12.0533L9.37333 6.01333ZM11.7733 2C11.6067 2 11.4333 2.06667 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333C14.0667 4.43333 14.0667 4.01333 13.8067 3.75333L12.2467 2.19333C12.1133 2.06 11.9467 2 11.7733 2ZM9.37333 4.12667L2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667Z"
                    fill="#010C15"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_142_2566">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <RenderOptionsCell id={id} />
          </div>,
        ];
      },
    },
  ];

  const handleEditClick = (id) => {
    console.log(id);
  };

  const handleOptionClick = (id) => {
    console.log(id);
  };

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        title={
          <p className="_flex _align_center">
            <img src="/analysis.svg" alt="" />
            <span>Analysis {" >> "} Order Analysis</span>
          </p>
        }
        mainContent={
          <>
            <header className="contentHeader _flex_jcsb _gap30 _align_center">
              <div className="orderAnalysisFilter _flex_center _pointer _align_center">
                <span className="_no_wrap ">Top Selling Items</span>
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="6"
                  viewBox="0 0 13 6"
                  fill="none"
                >
                  <path d="M6.5 6L0.870834 0L12.1292 0L6.5 6Z" fill="#343232" />
                </svg>
              </div>
              <SearchBox />
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
                  rows,
                  columns,
                  pagination: { paginationModel: { pageSize: 8 } },
                }}
                pageSizeOptions={[5, 8, 10, 15, 20, 25]}
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

export default OrdersAnalysis;

const Wrapper = styled.div`
  &&& {
    .contentHeader {
      .orderAnalysisFilter {
        width: 157px;
        height: 27px;

        border-radius: 5px;
        border: 0.2px solid #5e5a5a;

        color: #595959;
        
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

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
