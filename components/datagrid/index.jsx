import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

const MyDataGrid = ({
  height = 600,
  width = "100%",
  rows = [],
  columns = [],
}) => {
  return (
    <Container
      className="_border _grid_center _p10 _auto_scroll_x"
      style={{
        height: height,
        width: width,
        maxWidth: width,
      }}
    >
      <MyDataGridStyles rows={rows} columns={columns} />
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
    /* * {
      max-width: 100%;
    } */

    .MuiDataGrid-virtualScroller {
      border: 2px solid yellowgreen !important;
      overflow: auto;

      &::-webkit-scrollbar {
        background-color: var(--blue);
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background: #8bcaf7;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: var(--dark);
      }
    }

    .columnHeaders {
      .MuiDataGrid-columnHeadersInner {
        border: 2px solid red !important;
        border: 6px solid red;

        .css-yrdy0g-MuiDataGrid-columnHeaderRow {
        }
      }
    }
  }
`;
