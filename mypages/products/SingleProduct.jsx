import styled from "styled-components";
import PagesMainLayout from "@layouts/PagesMainLayout";

const SingleProduct = () => {
  const SIZES = [
    { name: "2B", value: 6 },
    { name: "20 Leaves", value: 3 },
    { name: "40 Leaves", value: 9 },
    { name: "60 Leaves", value: 6 },
    { name: "Higher Education", value: 5 },
  ];

  const DETAILS_LIST = [
    {
      name: "CATEGORY",
      value: (
        <p className="_flex _align_center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#B4CF09" />
          </svg>
          <span>Books & Stationeries</span>
        </p>
      ),
    },
    { name: "QUANTITY", value: "100,000" },
    { name: "RE- ORDER LEVEL", value: "12000" },
    {
      name: "LAST DATE OF ACQUISITION",
      value: (
        <p className="_flex _align_center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#B4CF09" />
          </svg>
          <span>Books & Stationeries</span>
        </p>
      ),
    },
    {
      name: "EXPIRING DATE",
      value: (
        <p className="_flex _align_center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#B4CF09" />
          </svg>
          <span>Books & Stationeries</span>
        </p>
      ),
    },
    {
      name: "SIZE",
      value: (
        <div className="_flex _gap10 _wrap" style={{ width: "85%" }}>
          {SIZES.map((item) => (
            <p key={item?.name} className="_flex _gap5 _no_wrap">
              <span className="_mid_text_regular">{item?.name}</span>

              <span
                className="_sm_text_semibold"
                style={{
                  borderRadius: "12px",
                  background: "#E4EFF9",
                  padding: "2px 8px",
                }}
              >
                {item?.value} left
              </span>
            </p>
          ))}
        </div>
      ),
    },
  ];

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        title={<span className="bolder">Products {">>"} Book </span>}
        mainContent={
          <section className="contentSection _flex_col _gap20 _bg_white">
            <header className="_flex_jce _gap60 _align_center">
              <div className="manual _flex_center _align_center _pointer">
                <img src="/cart.svg" alt="" />
                <p className="_mid_text_semibold">Manually Restock Product</p>
              </div>
              <div
                className="_flex_center _align_center _pointer"
                style={{ position: "relative" }}
              >
                <img src="/cart.svg" alt="" />
                <p className="_mid_text_semibold">
                  Automatic Restock Product
                  <span
                    className="_grid_center"
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "42.5px",
                      background: "#FCBF49",
                      position: "absolute",
                      top: "-12px",
                      right: "-12px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2.08398 4.58332L4.58398 7.08332L8.75065 2.91666"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </header>

            <section className="productInfos _flex _flex1">
              <div className="image">
                <img src="/book.png" width={"100%"} alt="" />
              </div>
              <div className="details _flex_col _flex1">
                <div className="detail_title _flex _gap15">
                  <h2>Exercise Book</h2>
                  <div
                    className=" _flex _gap10"
                    style={{
                      background: "#F6F6F6",
                      borderRadius: "12px",
                      padding: "4px 12px",
                    }}
                  >
                    <b>PRODUCT ID:</b>
                    <span>#000038</span>
                  </div>
                  <div
                    className="status _flex _gap10"
                    style={{
                      background: "#DEEEE8" || "#FFDDAB",
                      borderRadius: "12px",
                      padding: "4px 12px",
                    }}
                  >
                    <b>STATUS:</b>
                    <span>Active in stock</span>
                  </div>
                  <div
                    className="price _flex _align_center"
                    style={{ marginLeft: "auto" }}
                  >
                    <b className="_flex _align_center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                        fill="none"
                      >
                        <path
                          d="M19.2572 9.59421H16.5271V6.86984H19.2572C19.6675 6.86984 20 6.52491 20 6.09888C20 5.67282 19.6675 5.32768 19.2572 5.32768H16.5271V1.54747C16.5271 0.995663 16.4221 0.590644 16.2151 0.343925C16.0183 0.109216 15.7596 0 15.4014 0C15.0595 0 14.8106 0.108463 14.6176 0.341707C14.413 0.588677 14.3092 0.994449 14.3092 1.54773V5.32814H9.17366L6.9901 1.89734C6.80322 1.59116 6.62751 1.30435 6.45687 1.02906C6.30324 0.781123 6.1534 0.579262 6.01187 0.428536C5.88657 0.295092 5.74378 0.191818 5.57677 0.112438C5.41919 0.0377443 5.21886 0.000251092 4.98184 0.000251092C4.67954 0.000251092 4.40513 0.0862428 4.14237 0.262913C3.88234 0.437658 3.7026 0.653705 3.59282 0.923438C3.49646 1.17978 3.44548 1.57258 3.44548 2.07962V5.32789H0.742471C0.332324 5.32793 0 5.67307 0 6.09909C0 6.52512 0.332324 6.87005 0.742511 6.87005H3.44552V9.59471H0.742511C0.332324 9.59471 0 9.93976 0 10.3659C0 10.7918 0.332324 11.1366 0.742511 11.1366H3.44552V15.4527C3.44552 15.9881 3.55389 16.3891 3.76853 16.6438C3.97266 16.8867 4.23147 16.9995 4.58294 16.9995C4.92204 16.9995 5.17884 16.8862 5.39179 16.6429C5.60986 16.3935 5.72016 15.9929 5.72016 15.4527V11.1366H10.3672L12.882 15.1405C13.0569 15.4052 13.2374 15.6723 13.4175 15.9342C13.5799 16.1695 13.7572 16.3767 13.9442 16.5498C14.1126 16.7064 14.2931 16.8212 14.4808 16.8912C14.674 16.9634 14.8998 17 15.1504 17C15.8305 17 16.527 16.7838 16.527 15.1806V11.1366H19.2572C19.6674 11.1366 19.9999 10.7913 19.9999 10.3654C20 9.93951 19.6675 9.59421 19.2572 9.59421ZM14.3091 6.8698V9.59417H11.8894L10.1556 6.8698H14.3091ZM5.7202 3.73941L6.71806 5.32768H5.7202V3.73941ZM5.7202 9.59421V6.86984H7.68699L9.39842 9.59421H5.7202ZM14.3091 13.3968L12.8711 11.1366H14.3091V13.3968Z"
                          fill="#010C15"
                        />
                      </svg>
                      500
                    </b>
                    <sup>per unit</sup>
                  </div>
                </div>
                <p className="detail_desc _mid_text_regular">
                  The short trouser evolved into a more contemporary form in the
                  mid 19th century. Colloquially known as 'knickerbockers',
                  children wore them almost exclusively until they reached
                  pubescent age.
                </p>
                <div className="_flex_jcsb _wrap">
                  <div className="detail_suplier _flex _align_center _gap20">
                    <p className="_h6">Supplier: Adams Philip</p>
                    <p
                      className="_pointer _flex _align_center _mid_text_semibold"
                      style={{ color: "#439ade" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_216_2920)">
                          <path
                            d="M8.66732 4.66666H7.33398V7.33333H4.66732V8.66666H7.33398V11.3333H8.66732V8.66666H11.334V7.33333H8.66732V4.66666ZM8.00065 1.33333C4.32065 1.33333 1.33398 4.31999 1.33398 8C1.33398 11.68 4.32065 14.6667 8.00065 14.6667C11.6807 14.6667 14.6673 11.68 14.6673 8C14.6673 4.31999 11.6807 1.33333 8.00065 1.33333ZM8.00065 13.3333C5.06065 13.3333 2.66732 10.94 2.66732 8C2.66732 5.06 5.06065 2.66666 8.00065 2.66666C10.9407 2.66666 13.334 5.06 13.334 8C13.334 10.94 10.9407 13.3333 8.00065 13.3333Z"
                            fill="#439ADE"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_216_2920">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <span>Change Supplier</span>
                    </p>
                  </div>

                  <div
                    className="date _flex _align_center"
                    style={{ marginLeft: "auto" }}
                  >
                    <span className="_h6">DATE CREATED: </span>
                    <span className="_flex _align_center _mid_text_regular">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_216_2938)">
                          <path
                            d="M12.6667 2.00001H12V0.666672H10.6667V2.00001H5.33333V0.666672H4V2.00001H3.33333C2.59333 2.00001 2.00667 2.6 2.00667 3.33334L2 12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33334C14 2.6 13.4 2.00001 12.6667 2.00001ZM12.6667 12.6667H3.33333V6H12.6667V12.6667ZM12.6667 4.66667H3.33333V3.33334H12.6667V4.66667ZM11.3333 8H8V11.3333H11.3333V8Z"
                            fill="#010C15"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_216_2938">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Aug 12, 2021 - 2:00PM</span>
                    </span>
                  </div>
                </div>
                <hr />
                <div className="_flex" style={{ gap: "25%" }}>
                  <p className="_h5">TYPE</p>
                  <p className="_lg_text_regular">Notebooks</p>
                </div>
                <div>
                  <h2 className="sub_heading_3 _py10">Product Details</h2>
                  <div className="_flex_col _gap30">
                    {DETAILS_LIST.map((item) => (
                      <div
                        key={item?.name}
                        className="product_details_item _align_center"
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1.2fr 2fr",
                        }}
                      >
                        <p className="_h6">{item?.name}</p>
                        <div className="_mid_text_regular">{item?.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <div className="attachment">
              <div className="_flex_col _gap15">
                <h2 className="_sub_heading_3">Attachments</h2>
                <div
                  style={{
                    width: "50%",
                    height: "54px",
                    borderRadius: "4px",
                    border: "1px solid #E4EFF9",
                    background: "#FBFDFE",
                    padding: "15px 10px",
                  }}
                  className="_flex _align_center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_230_3241)">
                      <path
                        d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V9H18V20H6Z"
                        fill="#010C15"
                        fillOpacity="0.7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_230_3241">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                    <p className="_mid_text_semibold">
                      reserve_invoice_0032.pdf
                    </p>
                    <span className="_sm_text_regular">2KB</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
      />
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.div`
  &&& {
    .contentSection {
      > header {
        > div {
          width: 229px;
          height: 40px;
          border-radius: 4px;
          border: 1px solid #e4eff9;
          background: #f6fbff;
          white-space: nowrap;

          &.manual {
            background: #f9f9f9;
          }

          p {
            color: var(--Paragraph-color, rgba(1, 12, 21, 0.7));
          }
        }
      }

      .productInfos {
        > .image {
          width: 30%;
        }

        > .details {
          .detail_title {
          }

          .detail_desc {
            margin-top: 12px;
            margin-bottom: 26px;
            max-width: 500px;
            color: var(--Heading-color, #010c15);
          }

          .detail_suplier {
          }

          hr {
            width: 100%;
            min-width: 100%;
            height: 1px;
            background: rgba(1, 12, 21, 0.1);
            margin-top: 25px;
            margin-bottom: 10px;
          }
        }

        @media screen and (max-width: 1200px) {
          outline: 5px solid greenyellow;
          flex-wrap: wrap;
          gap: 50px;
          margin-bottom: 30px;

          > .image {
            width: 100%;

            img {
              width: min(500px, 90%);
            }

            display: flex;
            justify-content: center;
          }
        }
      }

      .attachment {
        padding-left: 30%;

        @media screen and (max-width: 1200px) {
          padding-left: 0%;
        }
      }
    }
  }
`;
