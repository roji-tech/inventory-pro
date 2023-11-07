import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #243cf4;

  * {
    color: white;
    /* outline: 2px solid magenta; */
  }

  .container {
  }

  .footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* justify-content: space-between; */
    gap: 60px;

    line-height: 23px;
    font-family: "DM Sans";
    padding: 60px 7% 100px;

    @media screen and (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;

      .item1 {
        grid-column: span 2;
      }
    }

    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }

    .item1,
    .item2,
    .item3 {
      /* border: 10px solid yellowgreen; */
      width: 100%;
    }

    .list-items {
      font-weight: 500;
      font-size: 14px;
      line-height: 200%;
    }

    .titles {
      font-weight: 600;
      font-size: 18px;
    }

    .item1 {
      .content {
        margin-top: 23px;
        font-family: "AvantGarde Bk BT";
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
      }

      .socials {
        margin-right: 16px;
        margin-top: 17px;
      }
    }

    .item2 {
      font-size: 18px;
      line-height: 23px;
      display: flex;
      justify-content: space-between;
      gap: 20px;

      .items {
        flex-basis: 40%;
        /* width: 190px; */
      }
    }
  }

  /* =======================call to action ============================= */

  .copyright {
    .copy {
      border-top: 1px solid #4c4d8b;
      text-align: center;
      color: #fefefe;
      font-size: 14px;
      padding: 20px 0;
    }
  }

  /* ==================Media Query =========================*/
  /* */

  @media screen and (max-width: 1100px) {
    .footer {
      grid-template-columns: repeat(2, 1fr);

      .item1 {
        grid-column: span 2;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .footer {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 500px) {
    .footer {
      flex-direction: column;
      /* margin-left: 20px; */
    }

    .item2 {
      width: 100%;
    }
  }
`;

export default FooterStyle;
