import AddProductLayout from "@layouts/AddProductLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import useAxios from "@hooks/useAxios";
import { useFetchData } from "@hooks/useFetchData";
import useAuth from "@contexts/AuthContext";
import styled from "styled-components";
import PagesMainLayout from "@layouts/PagesMainLayout";
import { InputsElememt, InputBox, SelectBox } from "@mypages/InputsElememt";

const AddSales = () => {
  const { state } = useAuth();
  const router = useRouter();
  const customerRef = useRef();

  const [productItems, setProductItems] = useState([
    { product_item: "", quantity: 1 },
  ]);

  // const [productItems, setProductItems] = useState([{ name: "", age: "" }]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event, index) => {
    let data = [...productItems];
    data[index][event.target.name] = event.target.value;
    setProductItems(() => data);
  };

  const increment = () => {
    console.log(productItems);
    let newfield = { product_item: "", quantity: 1 };
    setProductItems([...productItems, newfield]);
  };

  const decrement = (index) => {
    if (productItems.length > 1) {
      let data = [...productItems];
      data.splice(index, 1);
      // data.pop();
      setProductItems(data);
    }
  };

  const myaxios = useAxios();

  const defaultData = [];
  const [customersList, setCustomersList] = useFetchData(
    defaultData,
    "/customers/",
    "get",
    {},
    "Error Fetching Customers",
    transformCatData
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      customer: customerRef.current.value,
      sale_items: [...productItems],
    };
    console.log(data);

    if (!data?.customer) {
      ShowErrors("Choose Customer");
      return;
    }

    ShowSuccess("Creating Sales");

    await fetchDataWithUseAxios(
      myaxios,
      "/sales/",
      "post",
      data,
      "Sales Creation Failed",
      setLoading
    )
      .then(() => {
        router.push("/sales");
      })
      .catch((error) => {
        console.log("login error", error?.response);

        try {
          if (String(error.response.status).startsWith("5")) {
            return ShowErrors(["Service Temporarily Unavailable"]);
          }
          if (error.response?.data?.errors?.length < 15) {
            return ShowErrors([...error.response?.data?.errors]);
          }
          return ShowErrors(
            error?.response?.data?.detail ?? "An Error Occurred"
          );
        } catch (err) {
          console.log(err);
          return ShowErrors("An Error Occurred");
        }
      });
  };

  const INPUT_LIST = [{ name: "Customer", ph: "John Doe", ref: customerRef }];

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        title={
          <span className="bolder">
            Sales {" >> "} <span> Add New Sale</span>
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
                    {/* <SelectBox item={INPUT_LIST[1]} /> */}
                  </>
                }
              />

              <div className="_flex_col" style={{}}>
                {productItems.map((item, index) => (
                  <div
                    key={index}
                    className="itemBox _flex_jcsb"
                    // style={{ width: "90%" }}
                  >
                    <button
                      className="_grid_center _box_shadow _bg_white"
                      style={{
                        fontSize: 25,
                        color: "#000",
                        fontWeight: 1000,
                        width: 50,
                        height: 50,
                        opacity: productItems.length == 1 ? 0.2 : 1,
                      }}
                      onClick={() => decrement(index)}
                    >
                      ➖
                    </button>
                    <input
                      name="product_item"
                      placeholder="Product ID"
                      type="text"
                      onChange={(e) => handleChange(e, index)}
                      className="_bg_white _dark _h5 _flex1 _box_shadow_light _p20"
                      value={item.product_item}
                    />
                    <input
                      name="quantity"
                      placeholder="Quantity"
                      type="number"
                      onChange={(e) => handleChange(e, index)}
                      className="_bg_white _dark _h5 _box_shadow_light _p20"
                      value={item.quantity}
                      style={{
                        width: 150,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="_flex _gap30">
                <span
                  style={{ width: 50, height: 50 }}
                  className="_grid_center _h5 _box_shadow"
                >
                  {productItems.length}
                </span>
                <button
                  className="_grid_center _box_shadow _bg_white"
                  style={{
                    fontSize: 25,
                    color: "#000",
                    fontWeight: 1000,
                    width: 50,
                    height: 50,
                  }}
                  onClick={increment}
                >
                  +
                </button>
              </div>

              <div className="nextDiv">
                <button type="button" disabled={loading} onClick={handleSubmit}>
                  Create
                </button>
              </div>
            </div>
          </section>
        }
      />
    </Wrapper>
  );
};

export default AddSales;

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
    const { name, id, email } = item;

    return { name: `${name} (${email})`, value: id };
  });
}
