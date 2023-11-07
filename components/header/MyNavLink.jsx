import Link from "next/link";
import { styled } from "styled-components";
// import ArrowDown from "@components/ArrowDown";

export const MyNavLink = ({
  item,
  headerChild,
  showBorder = 1,
  moveup = 1,
}) => {
  return (
    <Wrapper moveup={moveup} className="_flex_center" showBorder={showBorder}>
      <p className="_no_wrap _flex_center">{item?.title || headerChild}</p>
      {/* <ArrowDown /> */}
      {item?.links ? (
        <div className="mylinks">
          {item?.links?.map((link, index) => (
            <Link key={index} href={link?.link} className="_full_w">
              <p
                style={{ fontSize: "0.8em" }}
                className="mylink _border_bottom_spread _full_w _align_left"
              >
                {link?.name}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  &&& {
    --h: 0;
    --h1: max-content;
    --display: none;
    --display1: flex;

    cursor: pointer;
    position: relative;
    border: 3px solid transparent;
    border-radius: 20px;
    padding: 6px;

    * {
      transition: 0.3s;
    }

    @media screen and (max-width: ${({ med_width }) => med_width}) {
      justify-content: space-between;
    }

    .mylinks {
      border: 1px solid #00000020;
      height: var(--h);
      max-height: var(--h);
      display: var(--display);
      transition: 0.3s;

      border-radius: 5px;
      min-width: 150px;
      width: max-content;

      padding: 10px;
      overflow: hidden;
      transition: 0.2s;
      transition: height 0.2s max-height 0.2s ease-in;

      flex-direction: column;
      align-items: flex-start;

      position: absolute;
      top: 105%;
      right: 5%;
      z-index: 550;
      background: #fff;

      .mylink {
        padding: 15px 15px 15px 10px;
        border-radius: 20px;

        &:hover {
          background: #bbbbbbb5;
        }
      }

      @media screen and (max-width: ${({ med_width }) => med_width}) {
        top: 105%;
        right: 5%;
      }

      ${({ moveup }) =>
        moveup
          ? `
            @media screen and (max-height: 600px) {
              top: -180%;
              right: 0%;
            }
          `
          : ""}
    }

    border: 1px solid transparent;
    &:hover {
      ${({ showBorder }) => (showBorder ? "border: 1px solid #00000030;" : "")}

      .__toggle_arrow {
        transform: rotate(270deg) scale(0.8, 1.2);
      }

      .mylinks {
        max-height: var(--h1);
        height: var(--h1);
        display: var(--display1);

        /* .mylink {
          opacity: 1;
        } */
      }
    }
  }
`;
