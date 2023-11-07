import Link from "next/link";
import styled from "styled-components";
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

      <div className="mylinks _flex_col">
        <li className="login_btn flex_center">
          <Link href={"/dp/auth/login"}>Login</Link>
        </li>
        <li className="reg_btn flex_center">
          <Link href={"/dp/auth/register"}>Sign Up</Link>
        </li>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &&& {
    --h: 0;
    --h1: max-content;
    --display: none;
    --display1: flex;

    cursor: pointer;
    position: relative;
    border: 3px solid transparent;
    border-radius: 20px;
    padding: 0px;

    * {
      transition: 0.3s;
    }

    @media screen and (max-width: ${({ med_width }) => med_width}) {
      justify-content: space-between;
    }

    .mylinks {
      border: 1px solid #09055678;
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
      top: 100%;
      right: 5%;
      z-index: 550;
      background: #02003ac3;

      > li {
        all: unset;
        cursor: pointer;
        display: grid;
        place-items: center;

        border: 1.5px solid #ffffff;
        border-radius: 50px;
        height: 41px;
        width: 130px;

        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;

        a {
          line-height: 0;
        }

        :hover {
          background: #00000050;

          a {
            color: #ffffff !important;
          }
        }
      }

      .login_btn {
        background: transparent;

        a {
          color: #ffffff !important;
        }
      }

      .reg_btn {
        background: #f2f4ff;

        a {
          color: #243cf4 !important;
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
      }
    }
  }
`;
