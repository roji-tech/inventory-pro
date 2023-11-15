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
    * {
      box-sizing: border-box;
    }

    /* .MuiTablePagination-root {
      background: red;
      width: 100%;
      display: flex;
      justify-content: space-between;
      
      > * {
        display: flex;
        justify-content: space-between;
      }
    } */

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
