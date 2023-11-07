import React from "react";
import styled from "styled-components";

const SubscribeBtn = () => {
  return (
    <Container>
      <input
        className="email_input"
        type="email"
        placeholder="Enter your email address.."
      />
      <button className="btn">Subscribe Now</button>
    </Container>
  );
};

export default SubscribeBtn;

const Container = styled.div`
  &&& {
    * {
      box-sizing: border-box !important;
    }

    display: flex;
    width: 100%;
    height: 60.79px;
    padding: 5px 15px;
    margin-top: 20px;
    background: #ffffff;
    border: 2px solid #f1f1f1;
    border-radius: 45.595px;

    .email_input {
      flex: 1;
      border-radius: 45.595px;
      color: black;
      background: #ffffff;
      border: none;
      font-weight: 400;
      font-size: 12.1587px;
      line-height: 16px;
      color: #000000;
      /* width: 50px; */
    }

    .btn {
      white-space: nowrap;
      background: #243cf4;
      border-radius: 50px;
      padding: 15px 30px;
      margin-left: auto;
      cursor: pointer;
    }

    @media screen and (max-width: 800px) {
      width: 100% !important;
      padding: 5px;
    }
  }
`;
