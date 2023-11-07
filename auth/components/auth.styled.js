import styled from "styled-components";

const AuthStyles = styled.section`
  &&& {
    background: linear-gradient(118.98deg, #000000 -20.59%, #243cf4 45.1%);
    opacity: 0.9;
    padding: 5px 0 80px 0;
    min-height: 100vh;

    > header {
    }

    .container {
      width: 528px;
      height: 682px;
      border-radius: 30px;
      background: #ffffff;
      margin: 0 auto;
      margin-top: 15px;
      color: #000000;

      .top {
        padding: 10px;
        text-align: center;
        border-bottom: 8px solid #f5167e;

        .brandd-logo {
          height: 50px;
        }
      }

      .main {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-family: "Poppins";
        line-height: 20px;

        .cta {
          font-family: "AvantGarde Bk BT";
          text-align: center;
          font-weight: 700;
          color: #000000;
          margin: 25px 0;
        }
      }

      .terms {
        background: #0865d3;
      }

      a {
        color: #0865d3;
      }

      .box {
        font-family: "Poppins";
        font-weight: 275;
        font-size: 15px;
      }
    }

    @media screen and (max-width: 600px) {
      padding: 40px 0;

      .container {
        /* Rectangle 12 */
        padding: 10px 0;
        width: 90%;
        height: max-content;
      }
    }
  }
`;

export default AuthStyles;
