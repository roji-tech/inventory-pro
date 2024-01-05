import React from "react";

const CustAnalysis = () => {
  return <Wrapper>CustAnalysis</Wrapper>;
};

export default CustAnalysis;

import styled from "styled-components";
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
      .box2 {
        .nextDiv {
          display: flex;
          justify-content: flex-end;

          button {
            width: 129px;
            height: 46px;

            border-radius: 4px;
            background: #002cca;

            color: #fff;
            
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
        }
        background: transparent;
        /* padding: 20px; */
      }
    }
  }
`;
