import Link from "next/link";
import styled from "styled-components";
import { InputsElememt } from "./InputsElememt";
// import { StockBox1 } from "@mypages/stocks/StockBox1";
import PagesMainLayout from "@layouts/PagesMainLayout";

import useAxios from "@hooks/useAxios";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { useFetchData } from "@hooks/useFetchData";

const AddNewProduct = () => {
  // const axiosInstance = useAxios();

  const defaultData = [
    [
      {
        name: "Books",
      },
      {
        name: "Sprays",
      },
      {
        name: "Snacks",
      },
      {
        name: "Beverages",
      },
      {
        name: "Gadgets",
      },
    ],
  ];

  // const data = fetchDataWithUseAxios(axiosInstance, "/products/");

  const [categoriesList, setCategoriesList] = useFetchData(
    defaultData,
    "/categories/",
    "get",
    {},
    "Categories"
  );

  const data = transformCatData(categoriesList);

  const INPUT_LIST = [
    { name: "Product Name", ph: "Book", showArrow: false },
    { name: "Product Category", ph: "Stationaries", showArrow: true },
    { name: "Select Supplier", ph: "Fioya Adams", showArrow: true },
    { name: "Available Quantity", ph: "500,000" },
    {
      name: "Selling Amount",
      ph: "₦70",
    },
    { name: "Re-order Level", ph: "10,000", showArrow: true },
  ];

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        title={
          <span className="bolder">
            Products {" >> "} <span> Add New Product</span>
          </span>
        }
        mainContent={
          <section className="contentSection _flex1 _flex_col _gap30 _p30">
            <div className="inputsBox _flex1 _flex_col _gap30">
              <h2>Product Details</h2>
              <InputsElememt
                LIST={INPUT_LIST}
                extras={
                  <>
                    <div className="input_item _flex_col _gap8">
                      <p>Types</p>
                      <div className="input _flex _align_center">
                        <input
                          type={"text"}
                          className="_flex1"
                          placeholder={"2B  40Leaves 60Leaves 80Leaves"}
                        />

                        <img src="/input_arrow_down.svg" alt="" />
                      </div>
                    </div>

                    <div className="input_item _flex_col _gap8">
                      <p>Upload Product Image</p>
                      <div
                        className=""
                        style={{
                          width: "100%",
                          height: "140px",
                          padding: "12px",

                          borderRadius: "4px",
                          border: "1px solid rgba(1, 12, 21, 0.10)",
                          background: " #FAFAFA",
                        }}
                      >
                        <input
                          type="file"
                          className="_d_none"
                          name="proimage"
                          id="proimage"
                        />
                        <div
                          className="_grid_center _align_center"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <label
                            htmlFor="proimage"
                            className="_pointer _flex_col _align_center"
                          >
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.2" clipPath="url(#clip0_216_2734)">
                                <path
                                  d="M25.8 13.3867C24.8933 8.78666 20.8533 5.33333 16 5.33333C12.1467 5.33333 8.8 7.52 7.13333 10.72C3.12 11.1467 0 14.5467 0 18.6667C0 23.08 3.58667 26.6667 8 26.6667H25.3333C29.0133 26.6667 32 23.68 32 20C32 16.48 29.2667 13.6267 25.8 13.3867ZM25.3333 24H8C5.05333 24 2.66667 21.6133 2.66667 18.6667C2.66667 15.9333 4.70667 13.6533 7.41333 13.3733L8.84 13.2267L9.50667 11.96C10.7733 9.52 13.2533 8 16 8C19.4933 8 22.5067 10.48 23.1867 13.9067L23.5867 15.9067L25.6267 16.0533C27.7067 16.1867 29.3333 17.9333 29.3333 20C29.3333 22.2 27.5333 24 25.3333 24ZM10.6667 17.3333H14.0667V21.3333H17.9333V17.3333H21.3333L16 12L10.6667 17.3333Z"
                                  fill="#111111"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_216_2734">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>

                            <p
                              className="_flex_col_center _gap0 _no_wrap"
                              style={{
                                color: "rgba(1, 12, 21, 0.20)",
                                textAlign: "center",
                                fontFamily: "Source Sans Pro",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "21px",
                              }}
                            >
                              Drag and drop files or
                              <span style={{ color: "#439ADE" }}>
                                Browse your computer
                              </span>
                            </p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                }
              />

              <div className="nextDiv">
                <button>
                  <Link href="/products/pid" className="_grid_center _full_wh">
                    Next
                  </Link>
                </button>
              </div>
            </div>
          </section>
        }
      />
    </Wrapper>
  );
};

export default AddNewProduct;

const Wrapper = styled.div`
  &&& {
    .contentSection {
      .inputsBox {
        background: transparent;

        .nextDiv {
          display: flex;
          justify-content: flex-end;
          margin-top: auto;

          button {
            width: 129px;
            height: 46px;

            border-radius: 4px;
            background: #002cca;

            color: #fff;

            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
        }
      }
    }
  }
`;

function transformCatData(jsonData) {
  return jsonData.map((order) => {
    const { name } = order;

    return { name, value: name };
  });
}
