import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

const MyDataGrid = ({
  height = 600,
  width = "100%",
  rows = [],
  columns = [],
  customStyles = ``,
  ...others
}) => {
  return (
    <Container
      className="_grid_center _p10 _auto_scroll_x"
      style={{
        height: height,
        width: width,
        maxWidth: width,
      }}
    >
      <MyDataGridStyles
        rows={rows}
        columns={columns}
        editMode="row"
        customStyles={customStyles}
        {...others}
        //
        density={"comfortable"}
        columnHeaderHeight={70}

        // isRowSelectable={(params) => params.row.quantity > 50000}
        // checkboxSelection
        // rowsPerPageOptions={[9]}
        // pageSize={10}
        // rowHeight={60}
        // withBorderColor={false}
        // paginationMode={}
        // rowCount={5}

        // rowModesModel={rowModesModel}
        // onRowModesModelChange={handleRowModesModelChange}
        // onRowEditStop={handleRowEditStop}
        // processRowUpdate={processRowUpdate}
        // slots={{
        //   toolbar: EditToolbar,
        // }}
        // slotProps={{
        //   toolbar: { setRows, setRowModesModel },
        // }}
      />
    </Container>
  );
};

export default MyDataGrid;

const Container = styled.div`
  &&& {
    > * {
      min-width: 100%;
      max-width: 100%;
    }
  }
`;

const MyDataGridStyles = styled(DataGrid)`
  &&& {
    border-color: transparent !important;

    * {
      box-sizing: border-box;
    }

    /* .MuiTablePagination-root {
      width: 100%;
      display: flex;
      justify-content: space-between;

      > * {
        display: flex;
        justify-content: space-between;
      }
    } */

    /* outline: 2px solid magenta !important; */

    /* MuiDataGrid-root--densityStandard  */
    /* MuiDataGrid-withBorderColor */
    /* .MuiDataGrid-root {
      border-color: transparent !important;
      padding: 80px !important;
      background: #7b4e4e !important;

      &.MuiDataGrid-withBorderColor {
        border: 8px solid #47d306 !important;
        border-color: transparent !important;
      }
    } */
    .Mui-checked {
    }

    /* MuiDataGrid-cellCheckbox */
    .MuiCheckbox-root {
      --w: 18px;

      svg {
        width: var(--w);
        height: var(--w);
        aspect-ratio: 1/1;
        padding: 1px;

        border: 1px solid #00000047;
        border: 0.834053px solid #e7e5e5;
        background: #ffffff;
        border-radius: 3.33621px;

        &[data-testid="CheckBoxOutlineBlankIcon"] {
          * {
            display: none;
          }
        }

        &[data-testid="CheckBoxIcon"] {
          outline: 1px solid blue;
          border: 3px solid blue;
        }
      }
    }

    .MuiDataGrid-columnHeaders {
      background: #fbfdfe;

      .MuiDataGrid-columnHeaderTitle {
        color: var(--Paragraph-color, rgba(1, 12, 21, 0.7)) !important;
        text-transform: uppercase;

        /* H6 */
        font-size: 12px !important;
        font-style: normal;
        font-weight: 700;
        line-height: 18px;
      }
    }

    .MuiDataGrid-virtualScroller {
      &::-webkit-scrollbar {
        background-color: var(--blue);
        width: 6px;
        height: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: #8bcaf7;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: var(--dark);
      }

      .MuiDataGrid-virtualScrollerRenderZone {
        .MuiDataGrid-row {
          /* border: 5px solid pink; */
          padding-left: 20px;
          padding-right: 5px;
          /* border: 2px solid #000 !important; */

          &:nth-child(even) {
            background-color: #ffffff;
          }

          &:nth-child(odd) {
            background: #f2f2f282;
          }

          .MuiDataGrid-cell {
            /* border: 2px solid yellow; */
            /* background: red; */

            &.status {
              .MuiDataGrid-cellContent {
                padding: 3px;
                display: grid;
                place-items: center;

                border-radius: 8px;
                /* background: rgba(50, 147, 111, 0.16);

                background: #fff2e2; */
              }
            }

            .MuiDataGrid-cellContent {
              /* border-right: 15px solid transparent !important; */
            }
          }
        }
      }
    }

    .MuiDataGrid-columnHeadersInner {
      padding-left: 20px;
      padding-right: 5px;

      .css-yrdy0g-MuiDataGrid-columnHeaderRow {
      }
    }

    ${({ customStyles }) => customStyles}
  }
`;
