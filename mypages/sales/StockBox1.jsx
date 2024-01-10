import styled from "styled-components";

export const StockBox1 = ({ showPID = false }) => {
  return (
    <StockBox1Style className="_flex_col">
      <img src="/exit.svg" className="exit _pointer" title="close" alt="" />
      <div className="_flex">
        <img src="/milo.svg" alt="" />
        <p className="title">Restock Milo</p>
        {showPID ? <p className="pid">PRODUCT ID: &nbsp; #000001</p> : ""}
      </div>
      <p>
        Select the purchasing amount, quantity, variation, and payment method of
        the Product item you want to restock
      </p>
    </StockBox1Style>
  );
};
const StockBox1Style = styled.div`
  &&& {
    padding: 22px 30px;
    gap: 7px;
    border-radius: 4px 4px 0px 0px;
    background: rgba(0, 44, 202, 0.07);
    position: relative;

    p.title {
      color: var(--Heading-color, #010c15);

      
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
    }

    p.pid {
      color: rgba(1, 12, 21, 0.7);
      
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      margin-left: 8px;
      background: #fff;
      padding: 2px 3px;
      border-radius: 5px;
      height: max-content;
    }

    img {
      width: 32px;
      height: 32px;
      border-radius: 14px;
      background: #fff;
      box-shadow: 0.3px 0.3px 4px 0px rgba(186, 186, 186, 0.12);
    }

    .exit {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 16px;
      height: 16px;
    }
  }
`;
