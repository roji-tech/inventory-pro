import Link from "next/link";
import styled from "styled-components";

const index = () => {
  return (
    <div style={{ display: "flex" }}>
      <Box type="checkbox" id="check" />
      <label
        htmlFor="check"
        style={{
          fontSize: "16px",
          fontWeight: "bolder",
          cursor: "pointer",
        }}
      >
        I agree to the BRANDDE <Link href="/terms">Terms and Conditions</Link>
      </label>
    </div>
  );
};

export default index;

const Box = styled.input`
  cursor: pointer;
  accent-color: #0865d3;
  background-color: #0865d3;
  margin-right: 5px;
`;
