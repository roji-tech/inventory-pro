import styled from "styled-components";
import { DpBoxBottom } from "./DpBoxBottom";

const index = () => {
  return (
    <DpBoxStyle>
      <section className="top">
        <div className="titleBox">
          <p>TedX</p>
        </div>
      </section>
      {/* <img src="/ab.png" alt="No" /> */}
      <DpBoxBottom />
    </DpBoxStyle>
  );
};

export default index;

const DpBoxStyle = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    border-radius: 18.9529px 18.9529px 0px 0px;
    flex-basis: 500px;
    height: 342px;
    box-shadow: 0 0 15px 1px #00000020;
    overflow: hidden;
    transition: 0.2s;
    /* width: 528px; */

    .top {
      background-image: url(dpBox.png);
      background-size: cover;
      height: 185px;
      position: relative;

      .titleBox {
        position: absolute;
        min-width: 115px;
        width: max-content;
        height: 32px;
        left: 23px;
        top: 25px;

        display: grid;
        place-items: center;

        background: #ffffff;
        border-radius: 8px;
      }
    }

    @media screen and (max-width: 1200px) {
      flex-basis: 450px;
    }

    @media screen and (max-width: 1100px) {
      flex-basis: 410px;

      .top {
      }
    }

    @media screen and (max-width: 1000px) {
      flex-basis: 80%;
    }

    @media screen and (max-width: 500px) {
      flex-basis: 80%;

      .top {
      }
    }
  }
`;
