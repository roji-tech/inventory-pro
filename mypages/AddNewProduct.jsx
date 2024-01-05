import Link from "next/link";
import styled from "styled-components";
import { InputsElememt } from "./InputsElememt";
// import { StockBox1 } from "@mypages/stocks/StockBox1";
import PagesMainLayout from "@layouts/PagesMainLayout";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/base/MenuItem";
// import FormHelperText from '@mui/';
import FormControl from "@mui/base/FormControl";
import Select from "@mui/base/Select";

import useAxios from "@hooks/useAxios";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { useState } from "react";


const AddNewProduct = () => {
  const [age, setAge] = useState('');

  // const axiosInstance = useAxios();
  // const data = fetchDataWithUseAxios(axiosInstance, "/products/");

  const INPUT_LIST = [
    { name: "Product Name", ph: "Book", showArrow: false },
    { name: "Product Category", ph: "Stationaries", showArrow: true },
  ];
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        title={
          <span className="bolder">
            Products {" >> "} <span> Add New Product</span>
          </span>
        }
        mainContent={
          <section className="contentSection _flex1 _flex_col _gap30 _p30">
            <div className="inputsBox _flex1 _flex_col _gap30">
              <h2>Product Details</h2>
              <InputsElememt LIST={INPUT_LIST} />
             

              <div className="nextDiv">
                <button>
                  <Link href="/products/pid" className="_grid_center _full_wh">
                    Next
                  </Link>
                </button>
              </div>
            </div>
          </section>
        }
      />
    </Wrapper>
  );
};

export default AddNewProduct;

const Wrapper = styled.div`
  &&& {
    .contentSection {
      .inputsBox {
        background: transparent;

        .nextDiv {
          display: flex;
          justify-content: flex-end;
          margin-top: auto;

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
      }
    }
  }
`;
