import Link from "next/link";
import styled from "styled-components";
import { InputsElememt } from "@mypages/InputsElememt";

const AddProductLayout = ({
  title,
  popup,
  inputsTitle,
  INPUTS_LIST,
  otherInputFields,
  backURL = "",
  nextURL = "",
  showBackBtn = true,
  showNextBtn = true,
  showPageNumber = true,
  firstPage = true,
}) => {
  return (
    <Wrapper className="_flex_col _full_h">
      <header className="_flex_jcsb _align_center">
        <p>{title}</p>
        {showBackBtn ? (
          <button className="_grid_center">
            <Link href={backURL} className="_grid_center _full_wh">
              Back
            </Link>
          </button>
        ) : (
          ""
        )}
      </header>

      <section className="main _flex1 _flex_col _gap30 _p30">
        {popup ?? <div />}

        <div className="box2 _flex_col _gap30">
          <div className="inputsHeading _align_center">
            <div
              style={{ paddingLeft: 0 }}
              className={`${
                firstPage
                  ? "currentPageNumber _flex_jcsb _align_center"
                  : "pageNumber _flex_jcsb _align_center"
              }`}
            >
              <h2>{inputsTitle}</h2>
              {showPageNumber && <span className="_grid_center">1</span>}
            </div>
            {showPageNumber && (
              <div
                className={`${firstPage ? "pageNumber" : "currentPageNumber"}`}
              >
                <span className="_grid_center">2</span>
              </div>
            )}
          </div>
          <InputsElememt LIST={INPUTS_LIST} extras={otherInputFields} />
        </div>
        {showNextBtn && (
          <div className="nextBtnDiv">
            <button>
              <Link href={nextURL} className="_grid_center _full_wh">
                Next
              </Link>
            </button>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default AddProductLayout;

const Wrapper = styled.div`
  &&& {
    > header {
      height: 55px;

      color: #666;
      
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      p {
        color: #5d5d5d;
        
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      button {
        width: 112px;
        height: 40px;

        border-radius: 4px;
        background: #002cca;

        color: #fff;

        color: var(--White, #fff);

        
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px;
      }
    }

    > .main {
      background: #ffffff;

      .box2 {
        .inputsHeading {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: transparent;
          gap: 40px;

          @media screen and (max-width: 600px) {
            display: flex;
            justify-content: space-between;
          }

          > .pageNumber {
            padding: 0 5px;

            span {
              background: #fff;
              width: 19.397px;
              height: 19px;
              color: #403e3e;
              text-align: center;
              border: 1px solid #403e3e;
              border-radius: 50%;

              font-family: "Gilroy-Regular";
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }

            @media screen and (max-width: 600px) {
              width: 70%;
            }
          }

          > .currentPageNumber {
            padding: 0 13px;

            span {
              width: 38px;
              height: 38px;
              flex-shrink: 0;

              background: #fcbf49;
              border: 1px solid #403e3e;
              border-radius: 50%;

              color: #403e3e;
              text-align: center;
              font-family: "Gilroy-SemiBold";
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
          }

          textarea {
            color: #000000;
            background: transparent;

            &::placeholder {
              color: rgba(1, 12, 21, 0.2);

              
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 21px;
            }
          }
        }
      }

      .nextBtnDiv {
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
`;
