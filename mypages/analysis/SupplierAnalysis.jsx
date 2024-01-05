import styled from "styled-components";
import Link from "next/link";

import { SearchBox } from "@mypages/SearchBox";
import PagesMainLayout from "@layouts/PagesMainLayout";
import { FilterElement } from "@mypages/FilterElement";
import { RatingElement } from "@mypages/renderCell";

const SupplierAnalysis = () => {
  const ANALYSIS = [
    {
      name: "System Analysis",
      link: "/analysis/sys",
      icon: "/people.svg",
      bg: "#FFDBFB",
    },
    {
      name: "Products Analysis",
      link: "/analysis/products",
      icon: "/luggage.svg",
      bg: "#FFF0DB",
    },
    {
      name: "Sales Analysis",
      link: "/analysis/sales",
      icon: "/people.svg",
      bg: "#403e3e3f",
    },
    {
      name: "Income Analysis",
      link: "/analysis/income",
      icon: "/money_bag.svg",
      bg: "#3c249b49",
    },
    {
      name: "Supplier Analysis",
      link: "/analysis/sup",
      icon: "/money_hand.svg",
      bg: "#dee4f2",
    },
    {
      name: "Customers Analysis",
      link: "/analysis/cust",
      icon: "/money_hand.svg",
      bg: "#edf2de89",
    },
  ];

  return (
    <Wrapper className="_full_wh">
      <PagesMainLayout
        title={
          <p className="_flex _align_center">
            <img src="/analysis.svg" alt="" />
            <span>Analysis {" >> "} Suppliers Analysis</span>
          </p>
        }
        mainContent={
          <>
            <header className="contentHeader _flex_jcsb _align_center _gap60">
              <SearchBox />
              <div className="_flex _align_center _gap20">
                <span
                  className=""
                  style={{
                    color: "#595959",
                    fontFamily: "Source Sans Pro",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  Based on;
                </span>

                <div className="orderFilter _pointer _flex _align_center">
                  <span>Ranking</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="6"
                    viewBox="0 0 13 6"
                    fill="none"
                  >
                    <path
                      d="M6.5 6L0.870834 0L12.1292 0L6.5 6Z"
                      fill="#343232"
                    />
                  </svg>
                </div>
              </div>
            </header>

            <section
              className="contentSection _flex _wrap _p30"
              style={{ gap: 35, justifyContent: "space-evenly" }}
            >
              {Array(10)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="itemBox _flex_col_center _border2"
                  >
                    <RatingElement />
                    <div className="spiral">
                      <div>
                        <img src="/supplierPage.svg" alt="" />
                      </div>
                    </div>
                    <div className="customerInfo _flex_col_center _gap0">
                      <p className="customerName">Adejoro Samuel</p>
                      <p className="customerEmail">Sammydejo@gmail.com</p>
                    </div>
                    <div className="_flex_col _gap0">
                      <p className="productSupplier">Products Supplier</p>
                      <div className="productIcons _flex_center _gap10 _align_center">
                        <img className="icon" src="/para24.png" alt="" />
                        <img className="icon" src="/airpod24.png" alt="" />
                        <img className="icon" src="/milo24.png" alt="" />
                      </div>
                    </div>
                    <div className="_flex_jce _margin_left_auto">
                      <Link
                        href={"/analysis/sup/id"}
                        className="button _grid_center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
            </section>
          </>
        }
      />
    </Wrapper>
  );
};

export default SupplierAnalysis;

const Wrapper = styled.div`
  &&& {
    .orderFilter {
      width: min(max-content, 111px);
      height: 27px;

      border-radius: 5px;
      border: 0.2px solid #5e5a5a;
      padding: 4px 15px;

      color: #595959;
      
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .itemBox {
      width: 300px;
      height: 290.039px;

      border-radius: 10px;
      border: 0.5px solid #e6e8ec;
      background: #fff;
      padding: 12px 23px;

      .customerInfo {
        .customerName {
          color: #23262f;
          
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
        }

        .customerEmail {
          color: #777;
          
          font-size: 10px;
          font-style: normal;
          font-weight: 300;
        }
      }

      .productSupplier {
        color: #313131;
        
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
      }

      .productIcons {
        .icon {
          max-width: 25px;
          max-height: 32px;
        }
      }

      .button {
        color: var(--White, #fff);
        
        font-size: 10px;
        font-style: normal;
        font-weight: 600;
        /* line-height: 21px; */

        width: 68.569px;
        height: 24.451px;

        border-radius: 4px;
        background: var(--main, #002cca);
      }
    }
  }
`;
