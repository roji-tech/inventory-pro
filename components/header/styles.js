import styled from "styled-components";

export const Wrapper = styled.div`
  &&& {
    width: 100%;
    background-image: url(/hero.png);
    background-size: cover;
    position: relative;
    z-index: 1;

    * {
      transition: all 0.2s;
      font-family: "DM Sans";
      margin: 0;
      box-sizing: border-box;
      transition: all 0.1s;
    }

    /* > * {
      border: 4px solid red;
    } */

    ::after {
      background-image: linear-gradient(
        118.98deg,
        #000000 -2.11%,
        #243cf4 63.58%
      );
      mix-blend-mode: normal;
      opacity: 0.9;

      position: absolute;
      content: "";
      inset: 0;
      z-index: -1;
    }

    > div {
      /* padding: 20px; */
      width: 100%;
      z-index: 5;
      display: flex;
      flex-direction: column;
      gap: 50px;

      background-image: transparent;
    }
  }
`;

const MyHeaderStyle = styled.header`
  &&& {
    background: transparent;
    background-size: cover;

    padding: 30px 7% 8%;
    color: #ffffff !important;
    width: 100%;
    min-height: 40vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 90px;

    .btn_center {
      display: grid;
      place-items: center;
      cursor: pointer;
    }

    /* ====================================================== */
    /* TOP */

    /* ====================================================== */
    /* DOWN */

    .down {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-items: center;

      font-size: 50px;
      vertical-align: Top;
      fill: Solid #ffffff;

      .text1 {
        width: 90%;
        text-align: center;

        @media screen and (min-width: 500px) {
          #first {
          }

          #second {
          }

          .of_your_brand {
            display: block;
          }

          #third {
          }

          #fourth {
          }
        }
      }

      .text2 {
        font-size: 18.2px;
        line-height: 24px;
        line-height: 130%;
        display: flex;
        flex-direction: column;
        align-items: center;
        fill: Solid #ffffff;
        text-align: center;
        width: 90%;
      }

      .btnDiv {
        display: flex;
        gap: 20px;
        padding-top: 20px;
        padding-bottom: 70px;

        p {
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 23px;
          text-align: center;
          color: #ffffff;
          width: 182px;
          height: 60px;
        }

        .header__btn1 {
          background: #f5167e;
          box-shadow: 0px 10px 50px rgba(61, 55, 241, 0.25);
          border-radius: 50px;
        }

        .header__btn2 {
          opacity: 0.9;
          border: 1.5px solid #ffffff;
          filter: drop-shadow(0px 10px 50px rgba(61, 55, 241, 0.25));
          border-radius: 50px;
        }
      }
    }

    /*  ===================================================  */
    /*  =        MEDIA QUERY   1100                      =   */
    /*  =        MEDIA QUERY   1100                      =   */
    /*  ===================================================  */

    @media (max-width: 1100px) {
      padding: 30px 5%;
      gap: 70px;

      .down {
        .text1 {
          /* color: aqua; */
          /* white-space: nowrap; */
        }

        .text2 {
          /* white-space: nowrap; */
          font-size: 12px;
        }
      }
    }

    /*  ===================================================  */
    /*  =        MEDIA QUERY   800                       =   */
    /*  =        MEDIA QUERY   800                       =   */
    /*  ===================================================  */

    @media screen and (max-width: 800px) {
      gap: 60px;

      .down {
        * {
          /* visibility: hidden; */
        }

        .text1 {
          font-size: 40px;
          line-height: 1.3em;
          /* white-space: nowrap; */

          #first {
            /* display: block; */
          }

          #second {
          }

          #third {
          }

          #fourth {
            /* display: block; */
          }
        }

        .text2 {
          font-size: 12px;

          #one {
            span {
              display: block;
            }
          }
        }

        .btnDiv {
          display: flex;
          gap: 20px;
          padding-top: 20px;
          padding-bottom: 50px;

          p {
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 23px;
            text-align: center;

            width: 170px;
            height: 50px;
          }
        }

        .btn_center {
          display: grid;
          place-items: center;
          cursor: pointer;
        }
      }
    }

    /*  ===================================================  */
    /*  =        MEDIA QUERY   500                      =    */
    /*  =        MEDIA QUERY   500                      =    */
    /*  ===================================================  */

    @media screen and (max-width: 500px) {
      gap: 50px;

      .top {
      }

      .down {
        .text1 {
          font-size: 28px;
          text-align: center;

          #first {
            display: block;
          }

          #second {
            display: inline;
          }

          .of_your_brand {
            display: inline;

            #third {
              display: inline;
            }

            #fourth {
              display: block;
            }
          }
        }

        .text2 {
          font-size: 12px;
        }

        .btnDiv {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-top: 20px;
          padding-bottom: 10px;

          p {
            font-size: 12px;
            line-height: 23px;
            width: 180px;
            height: 50px;
          }
        }
      }
    }
  }
`;

export default MyHeaderStyle;

/* background: green; */
/* display: none; */
/* transform: rotate(180deg); */
/* flex-wrap: wrap; */
/* white-space: nowrap; */
/* background: #e2e0ff; */
/* flex-wrap: wrap; */
/* white-space: nowrap; */
/* visibility: visible; */


