import Image from "next/image";
import Button from "@components/buttons/Button";
import styled from "styled-components";

export const FooterImage = () => {
  return (
    <Container>
      <div id="absoluteDiv" />
      <div className="grid">
        <div className="img">
          <Image src={"/converse.svg"} width={500} height={400} />
        </div>
        <div className="texts">
          <h2>
            {" "}
            <span> Make your</span> own Event
          </h2>
          <p>
            Power Your Events with INV ......
            <br /> Connect the dot of your audience.
          </p>
          <div>
            <Button text="Create Events" />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  &&& {
    position: relative;
    background: transparent;
    margin-top: 20px;
    width: 100%;
    height: max-content;

    > #absoluteDiv {
      position: absolute;
      height: 75%;
      width: 100%;
      bottom: 0;
      background: #e6e9fe;
      z-index: -1;
    }

    > .grid {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;

      > .img {
        width: 99%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .texts {
        width: 99%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        > h2 {
          font-style: normal;
          font-weight: 700;
          font-size: 34px;
          line-height: 44px;
        }

        > p {
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 23px;
        }
      }
    }

    @media screen and (max-width: 900px) {
      margin-bottom: 30px;

      > #absoluteDiv {
        height: 85%;
        bottom: -30px;
      }

      > .grid {
        grid-template-columns: 1fr;

        .texts {
          justify-content: center;
          align-items: center;
          text-align: center;

          > h2 {
            span {
              display: block;
            }
          }
        }
      }
    }
  }
`;
