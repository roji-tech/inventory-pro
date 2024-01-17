import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  renderCategoryCell,
  renderProductCell,
  RenderOptionsCell,
} from "@mypages/renderCell";
import MyDataGrid from "@components/datagrid";
import { FilterElement } from "../FilterElement";
import PagesMainLayout from "@layouts/PagesMainLayout";
import { SearchBox } from "../SearchBox";
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
import { useRouter } from "next/router";

const SizeCategories = () => {
  const myaxios = useAxios();
  // const [dataList, setDataList] = useState({});
  // const [loading, setLoading] = useState(false);
  const router = useRouter();

  const defaultData = [];

  const [data, setData] = useFetchData(
    defaultData,
    "/size-categories/",
    "get",
    {},
    "Products Sizes",
    (list) => list?.reverse() ?? list
  );

  const [rows, setRows] = useState(data?.results);

  useEffect(() => {
    setRows(data?.results);
  }, [data]);

  const columns = [
    {
      field: "id",
      headerName: "Size ID",
      width: 300,
    },
    {
      field: "name",
      headerName: "Size Name",
      width: 250,
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        title={<span className="bolder">Size Categories</span>}
        mainContent={
          <>
            <header className="contentHeader _flex_jcsb _align_center">
              <SearchBox />
              <div className="_flex _gap20">
                <FilterElement />
                <Link href="/products/addsize" className="_btn_blue">
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
                  <span>Add New Size</span>
                </Link>
              </div>
            </header>

            <section className="contentSection">
              <MyDataGrid
                height={"100%"}
                rows={rows}
                columns={columns}
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

export default SizeCategories;

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

// function transformProductJsonData(jsonData) {
//   return jsonData?.reverse().map((product) => {
//     const { id, name, image, quantity } = product;

//     return {
//       id,
//       product: { name, image },
//       quantity,
//       status:
//         product?.status ??
//         getRandomValues(["average", "Active", "Re-order point"]),
//       category:
//         product?.category ??
//         getRandomValues(["Drugs", "Spray", "Beverages", "Stationeries"]),
//     };
//   });
// }
