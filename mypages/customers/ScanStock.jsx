import styled from "styled-components";

const AddStock = () => {
  return (
    <Wrapper className="_flex_col _full_h">
      <header className="_flex_jcsb _align_center">
        <p>Products (Low on Stock) {" >> "} Add Stock</p>
        <button className="_grid_center">Back</button>
      </header>

      <section className="main _flex1 _grid_center _align_center">
        <div className="box _flex_col_center _gap40 _max_w">
          <div className="circle"></div>
          <div className="text _flex_col_center _no_wrap">
            <p>Scan</p>
            <span>Scan Product and Add products to your store .</span>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default AddStock;

const Wrapper = styled.div`
  &&& {
    > header {
      height: 55px;

      color: #666;
      
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      p {
        color: #5d5d5d;
        
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      button {
        width: 112px;
        height: 40px;

        border-radius: 4px;
        background: #002cca;

        color: #fff;

        color: var(--White, #fff);

        
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px;
      }
    }

    > .main {
      align-items: center;
      justify-content: center;

      .box {
        background: transparent;
        padding: 20px;

        .circle {
          width: 140px;
          height: 140px;

          background: rgba(244, 245, 250, 0.2);
          border: 1px solid rgba(12, 16, 36, 0.2);
          border-radius: 50%;
        }
        .text {
          max-width: max-content;

          p {
            color: #000;
            text-align: center;
            
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          span {
            color: #8b8d97;
            text-align: center;
            
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
    }
  }
`;
