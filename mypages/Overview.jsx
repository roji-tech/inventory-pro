import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Overview = () => {
  const [active, setActive] = useState("Days");
  const SECT1 = ["Days", "Weeks", "Months", "Years"];
  const SECT2 = [
    { title: "Total Orders", amount: "18900", icon: "total_orders.svg" },
    { title: "Total Revenue", amount: "N90,0000", icon: "total_rev.svg" },
    { title: "Total Customers", amount: "9100", icon: "total_cust.svg" },
  ];
  const SECT3 = [
    { name: "Bread", percent: 50 },
    { name: "Shoe Polish", percent: 21 },
    ,
    { name: "Paracetamol", percent: 19 },
  ];

  return (
    <Styles className="_flex_col _gap30">
      <section className="sect1 _flex_jcsb _wrap _gap20">
        <div className="div1 _align_center _bg_white _gap15 _flex">
          {SECT1.map((item) => (
            <li
              key={item}
              className={active == item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}
        </div>
        <div className="div2 _bg_white _flex_center _gap15">
          <div className="_flex _gap10">
            <img src="/calendar.svg" width={15} height={15} alt="" />
            <p>12 Jun 23 - 21 Jun 23</p>
          </div>
          <img src="/arrow_down.svg" width={14} height={13} alt="" />
        </div>
      </section>

      <section className="sect2 _flex _wrap _gap30">
        {SECT2.map((item) => (
          <div key={item?.title} className="_flex_col_jcsb _p25">
            <div className="_flex_jcsb title">
              <p>{item?.title}</p>
              <div className="imgWrap _grid_center">
                <img src={item?.icon} alt="" />
              </div>
            </div>
            <div className="amount">{item?.amount}</div>
          </div>
        ))}
      </section>

      <section className="sect3 _bg_white _flex _wrap _p10 _gap20">
        <div className="graph">
          <img src="/graph.svg" alt="" />
        </div>
        <div className="percents _flex_col_jcsb _p10">
          <div className="date">12 June- 21 June Order</div>
          <div className="scales _flex_col _gap20">
            {SECT3.map((item) => (
              <div key={item?.name}>
                <h3>{item?.name}</h3>
                <div className="_flex _gap10 _align_center">
                  <ScaleLine percent={item?.percent} />
                  <p>
                    {item?.percent}
                    {"%"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="view">
            <Link href={"/"}>View All</Link>
          </div>
        </div>
      </section>

      <section className="sect4 _bg_white _flex_col _gap20">
        <h2 className="title">Recent Orders</h2>
        <div className="myList">
          <header></header>
        </div>
      </section>
    </Styles>
  );
};

export default Overview;

const Styles = styled.div`
  &&& {
    background: #fbfbfb;

    * {
      box-sizing: border-box;
    }

    .sect1 {
      .div1 {
        li {
          width: 83px;
          height: 30px;
          border-radius: 2px;
          display: grid;
          place-items: center;

          color: #525252;
          font-family: Source Sans Pro;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          cursor: pointer;

          &.active {
            background: #002cca;
            color: #fff;
            font-weight: 600;
          }
        }
      }

      .div2 {
        width: 262px;
        height: 39px;
        border: 0.4px solid #9b9b9b;

        color: rgba(79, 79, 79, 0.92);
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    .sect2 {
      > div {
        width: min(344px, 100%);
        height: 152px;

        border-radius: 14px;
        background: #fff;
        box-shadow: 0.3px 0.3px 4px 0px rgba(186, 186, 186, 0.12);

        .title {
          align-items: center;
          p {
            color: #525252;
            font-family: Source Sans Pro;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          .imgWrap {
            width: 41px;
            height: 41px;
            border-radius: 50%;
            background: rgba(217, 217, 217, 0.43);
          }
        }

        .amount {
          color: #3c3c3c;
          font-family: Source Sans Pro;
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
    }

    .sect3 {
      > div {
        flex-basis: 46%;
      }

      .percents {
        border-radius: 9.816px;
        background: #fdfdfd;

        .date {
          color: #111;
          font-family: Source Sans Pro;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 133%; /* 26.6px */
        }

        .scales {
          > div {
            h3 {
              color: #000;
              font-family: Source Sans Pro;
              font-size: 20px;
              font-style: normal;
              font-weight: 300;
              line-height: 133%; /* 26.6px */
            }

            > div {
              > p {
                color: #29292b;
                text-align: center;

                /* Medium / Small */
                font-family: Inter;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 20px; /* 142.857% */
              }
            }
          }
        }

        .view {
          display: flex;
          justify-content: end;

          > * {
            color: #d9830d;
            font-family: Source Sans Pro;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 133%; /* 21.28px */
          }
        }
      }
    }

    .sect4 {
      padding: 30px 20px;

      > .title {
        color: #000;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      .myList {
      }
    }
  }
`;

const ScaleLine = styled.div`
  &&& {
    min-width: 80%;
    height: 8px;
    min-height: 8px;
    border-radius: 20px;
    background: #d9d9d9;
    flex: 1;

    position: relative;

    &::before {
      content: "";
      position: absolute;
      border-radius: 20px;
      background: #242424;
      top: 0;
      inset: 0;
      width: 0;
      width: ${({ percent }) => percent + "%"};
      /* width: 60px; */
      height: 100%;
      z-index: 10;
    }
  }
`;
