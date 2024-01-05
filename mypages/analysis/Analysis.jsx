import PagesMainLayout from "@layouts/PagesMainLayout";
import Link from "next/link";
import styled from "styled-components";

const Analysis = () => {
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
            <span className="bolder">Analysis</span>
          </p>
        }
        mainContent={
          <section className="_grid_center">
            <div className="analysisItems">
              {ANALYSIS.map((item) => (
                <Link
                  key={item?.name}
                  href={item?.link}
                  className="item _flex_col_center _justify_center"
                  style={{ background: item?.bg }}
                >
                  <div className="icon _grid_center">
                    <img src={item?.icon} alt="" />
                  </div>
                  <p>{item?.name}</p>
                </Link>
              ))}
            </div>
          </section>
        }
      />
    </Wrapper>
  );
};

export default Analysis;

const Wrapper = styled.div`
  &&& {
    .analysisItems {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-content: center;
      justify-items: center;

      padding: 30px 10px 50px;
      gap: 65px;
      max-width: calc(309px * 2 + 30px);

      @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
      }

      .item {
        width: 280px;
        min-width: 250px;
        height: 172px;
        border-radius: 0px 20px;
        gap: 13px;

        &:nth-child(even) {
        }
        &:nth-child(odd) {
          justify-self: flex-end;
        }

        .icon {
          width: 50.054px;
          min-width: 50.054px;
          max-width: 50.054px;
          height: 50.054px;
          min-height: 50.054px;
          max-height: 50.054px;
          border-radius: 50%;
          background: #fff;
        }
      }
    }
  }
`;
