import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { InputsElememt, InputBox, SelectBox } from "./InputsElememt";
// import { StockBox1 } from "@mypages/stocks/StockBox1";
import PagesMainLayout from "@layouts/PagesMainLayout";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import useAxios from "@hooks/useAxios";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import { useFetchData } from "@hooks/useFetchData";

const AddNewProduct = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    category: "",
  });

  // const axiosInstance = useAxios();

  const defaultData = [
    [
      {
        name: "Books",
      },
      {
        name: "Sprays",
      },
      {
        name: "Snacks",
      },
      {
        name: "Beverages",
      },
      {
        name: "Gadgets",
      },
    ],
  ];

  // const data = fetchDataWithUseAxios(axiosInstance, "/products/");

  const [categoriesList, setCategoriesList] = useFetchData(
    defaultData,
    "/categories/",
    "get",
    {},
    "Categories"
    
  );

  // const data = transformCatData(categoriesList?.results);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    if (!values?.name) {
      ShowErrors("Name your product");
      return;
    }
    ShowSuccess("Creating Product");
  };

  // const axiosInstance = useAxios();
  // const data = fetchDataWithUseAxios(axiosInstance, "/products/");
  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const INPUT_LIST = [
    {
      name: "Product Name",
      ph: "Book",
      id: "name",
      showArrow: false,
      handleChange,
      value: values?.name,
    },
    {
      name: "Product Category",
      id: "category",
      ph: "Stationaries",
      handleChange,
      value: values?.category,
      options: [
        { name: "Category 1", value: "cat1" },
        { name: "Category 2", value: "cat2" },
        { name: "Category 3", value: "cat3" },
        { name: "Category 4", value: "cat4" },
      ],
    },
  ];

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
              <h2>
                Product Details {values?.name} {values?.category}
              </h2>
              <InputsElememt
                extras={
                  <>
                    <InputBox item={INPUT_LIST[0]} />
                    <SelectBox item={INPUT_LIST[1]} />
                  </>
                }
              />

              <div className="nextDiv">
                <button type="button" disabled={loading} onClick={handleSubmit}>
                  Next
                </button>
                {/* <Link href="/products/pid" className="_grid_center _full_wh"> */}
                {/* </Link> */}
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

function transformCatData(jsonData) {
  console.log(jsonData);
  return jsonData.map((item) => {
    const { name } = item;

    return { name, value: name };
  });
}
