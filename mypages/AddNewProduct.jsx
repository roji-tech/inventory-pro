import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { InputsElememt, InputBox, SelectBox } from "./InputsElememt";
// import { StockBox1 } from "@mypages/stocks/StockBox1";
import PagesMainLayout from "@layouts/PagesMainLayout";

import useAxios from "@hooks/useAxios";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import { useFetchData } from "@hooks/useFetchData";
import useAuth from "@contexts/AuthContext";
import { useRouter } from "next/router";

const AddNewProduct = () => {
  const { state } = useAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    category: "",
    email: state?.user?.email,
  });

  const myaxios = useAxios();

  const defaultData = [
    // { name: "Books", id: "i767o878" },
    // { name: "Sprays", id: "jhui9yo77yhg6" },
    // { name: "Snacks", id: "lij8u8yntg" },
    // { name: "Beverages", id: "lh8y89jy8" },
    // { name: "Gadgets", id: "6rgyr8787689" },
    // { name: "Category 1", id: "cat1" },
    // { name: "Category 2", id: "cat2" },
    // { name: "Category 3", id: "cat3" },
    // { name: "Category 4", id: "cat4" },
  ];

  const [categoriesList, setCategoriesList] = useFetchData(
    defaultData,
    "/categories/",
    "get",
    {},
    "Categories",
    transformCatData
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    if (!values?.name) {
      ShowErrors("Name your product");
      return;
    }
    ShowSuccess("Creating Product");
    await fetchDataWithUseAxios(
      myaxios,
      "/products/",
      "post",
      values,
      "Create Product",
      setLoading
    )
      .then(() => {
        // alert("done");
        router.push("/products");
      })
      .catch((error) => {
        console.warn(error);
        alert("error");
      });
  };

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
      options: categoriesList?.results,
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
              <h2>Product Details</h2>
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
  console.log("JSON DATA", jsonData);
  return jsonData.map((item) => {
    const { name, id } = item;

    return { name, value: id };
  });
}
