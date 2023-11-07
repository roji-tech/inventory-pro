import styled from "styled-components";

const Input = styled.input`
  text-indent: 10px;
  margin: 29px 0;
  background: #e2e0ff;
  width: 329px;
  height: 46px;
  display: block;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.74);

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: #243cf4;
  border-radius: 13.0556px;
  font-size: 15.0556px;
  font-family: "Poppins";
  font-weight: 700;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.98);
  padding: 8px 35px;
  margin: 29px 0;
  width: 212px;
  height: 47px;
`;

const Label = styled.label``;

export { Input, Button, Label };
