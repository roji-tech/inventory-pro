import Link from "next/link";
import styled from "styled-components";

const Button = ({ text = "Create New DP" }) => {
  return (
    <Link href={"/dashboard/create"}>
      <BtnStyle>
        <p>{text}</p>
      </BtnStyle>
    </Link>
  );
};

export default Button;

const BtnStyle = styled.div`
  background: var(--branddeBlue);
  display: grid;
  place-items: center;
  color: #fff;

  height: 50px;
  width: 226.5px;
  border-radius: 37.5px;
  cursor: pointer;

  p {
    white-space: nowrap;
  }

  @media screen and (max-width: 800px) {
    height: 40px;
    width: 180px;
  }
`;
