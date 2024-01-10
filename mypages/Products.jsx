import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  renderCategoryCell,
  renderProductCell,
  RenderOptionsCell,
} from "@mypages/renderCell";
import MyDataGrid from "@components/datagrid";
import { FilterElement } from "./FilterElement";
import PagesMainLayout from "@layouts/PagesMainLayout";
import { SearchBox } from "./SearchBox";
// import { memo, useRef } from "react";
// import { useClickOutside2 } from "@hooks/useClickOutside";
import Link from "next/link";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { useFetchData } from "@hooks/useFetchData";
import { getRandomValues } from "@utils/getRandomStatus";
import {
  GridRowModes,
  GridActionsCellItem,
  GridRowEditStopReasons,
  useGridApiContext,
} from "@mui/x-data-grid";
import * as React from "react";
import { unstable_useEnhancedEffect as useEnhancedEffect } from "@mui/utils";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import useAxios from "@hooks/useAxios";

const Products = () => {
  const myaxios = useAxios();
  // const [dataList, setDataList] = useState({});
  // const [loading, setLoading] = useState(false);

  const categories = ["Drugs", "Spray", "Beverages", "Stationeries"];
  const defaultData = [
    {
      id: "b681f500-2012-45fd-908a-40b0e4c4858f",
      name: "Sugar",
      image: null,
      quantity: 3670,
    },
    {
      id: "30fe9f00-1849-479f-9131-ffdcc19ada1b",
      name: "Olive Oil",
      image: null,
      quantity: 800,
    },
    {
      id: "e12f818b-b4bc-4147-84b8-673fdd6e9548",
      name: "Pant",
      image: null,
      quantity: 100,
    },
    {
      id: "8e1ab08c-224f-4255-a15c-c0f03146c7b1",
      name: "Knife",
      image: null,
      quantity: 20,
    },
    {
      id: "a3e78398-ec7a-429a-bcf6-e8766accdca4",
      name: "Laptop",
      image: null,
      quantity: 876,
    },
  ];

  const [data, setData] = useFetchData(
    defaultData,
    "/products/",
    "get",
    {},
    "Products",
    transformProductJsonData
  );

  const [rows, setRows] = useState(data?.results);

  useEffect(() => {
    setRows(data?.results);
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

  const renderProductEditInputCell = (params) => {
    return <ProductEditInputCell {...params} />;
  };

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
      editable: true,
      renderCell: renderProductCell,
      renderEditCell: renderProductEditInputCell,

      // valueGetter: getFullName,
      // valueSetter: setProductName,
      // valueParser: parseFullName,
      sortComparator: (v1, v2) => v1.toString().localeCompare(v2.toString()),
    },
    {
      field: "category",
      headerName: "CATEGORY",
      width: 150,
      align: "left",
      renderCell: renderCategoryCell,
      editable: true,
      type: "singleSelect",
      valueOptions: categories,
    },
    {
      field: "quantity",
      headerName: "QUANTITY",
      width: 150,
      type: "number",
      headerAlign: "center",
      align: "center",
      valueFormatter: (params) => {
        if (!params.value) {
          return "";
        }
        return `${params.value.toLocaleString()} in Stock`;
      },
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "ACTIONS",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        return [
          <div className="_flex _gap15">
            {isInEditMode ? (
              <div className="_flex_col">
                <GridActionsCellItem
                  icon={<SaveIcon />}
                  label="Save"
                  sx={{
                    color: "primary.main",
                  }}
                  onClick={handleSaveClick(id)}
                />

                <GridActionsCellItem
                  icon={<CancelIcon />}
                  label="Cancel"
                  className="textPrimary"
                  onClick={handleCancelClick(id)}
                  color="inherit"
                />
              </div>
            ) : (
              <div
                onClick={() => handleEditClick(id)}
                className="actionIcon _hover_blue _pointer _p5 _grid_center"
              >
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
            )}
            <RenderOptionsCell id={id} />
          </div>,
        ];
      },
    },
  ];

  const [rowModesModel, setRowModesModel] = useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => {
    console.log(id);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows?.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    console.log("processRowUpdate", updatedRow);

    fetchDataWithUseAxios(myaxios, `/products/${row?.id}`);
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        title={<span className="bolder">Products</span>}
        mainContent={
          <>
            <header className="contentHeader _flex_jcsb _align_center">
              <SearchBox />
              <div className="_flex _gap20">
                <FilterElement />
                <Link href="/products/add" className="_btn_blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_140_1098)">
                      <path
                        d="M8.66634 4.66668H7.33301V7.33334H4.66634V8.66668H7.33301V11.3333H8.66634V8.66668H11.333V7.33334H8.66634V4.66668ZM7.99967 1.33334C4.31967 1.33334 1.33301 4.32001 1.33301 8.00001C1.33301 11.68 4.31967 14.6667 7.99967 14.6667C11.6797 14.6667 14.6663 11.68 14.6663 8.00001C14.6663 4.32001 11.6797 1.33334 7.99967 1.33334ZM7.99967 13.3333C5.05967 13.3333 2.66634 10.94 2.66634 8.00001C2.66634 5.06001 5.05967 2.66668 7.99967 2.66668C10.9397 2.66668 13.333 5.06001 13.333 8.00001C13.333 10.94 10.9397 13.3333 7.99967 13.3333Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_140_1098">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Add New Product</span>
                </Link>
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
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                // slots={{
                //   toolbar: EditToolbar,
                // }}
                slotProps={{
                  toolbar: { setRows, setRowModesModel },
                }}
                editMode="row"
              />
            </section>
          </>
        }
      />
    </Wrapper>
  );
};

export default Products;

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
  return jsonData?.reverse().map((product) => {
    const { id, name, image, quantity } = product;

    return {
      id,
      product: { name, image },
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
