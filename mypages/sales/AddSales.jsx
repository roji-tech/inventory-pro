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
import { getRandomValues } from "@utils/getRandomStatus";

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
    console.log(event.target);
    let data = [...productItems];
    data[index][event.target.name] = event.target.value;
    setProductItems(() => data);
  };

  const handleCategoryChange = (event) => {
    customerRef.current.value = event.target.value;
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

  const defaultData = [
    {
      id: "2b40488e-29eb-4d1d-9504-29f455bea925",
      serial_no: "#000000",
      quantity: 30,
      safety_stock: 0,
      reordering_point: 0,
      cost_price: 15,
      selling_price: 20,
      holding_cost: 1,
      ordering_cost: 1,
      expiring_date: "2030-12-31",
      barcode: "111111111",
      image:
        "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      product: {
        id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
        name: "Product 1",
        image: null,
        quantity: null,
      },
      size_category: {
        id: "fa2af31d-3b22-4d91-8d26-7f728db77f74",
        name: "Size Category 2",
        product: {
          id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
          name: "Product 1",
          image: null,
          quantity: null,
        },
      },
      category: null,
      vendor: null,
    },
    {
      id: "a50e076f-424e-4f2a-8f26-e5ac01aacf00",
      serial_no: "#000001",
      quantity: 30,
      safety_stock: 0,
      reordering_point: 0,
      cost_price: 15,
      selling_price: 20,
      holding_cost: 1,
      ordering_cost: 1,
      expiring_date: "2030-12-31",
      barcode: "111111111",
      image:
        "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      product: {
        id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
        name: "Product 1",
        image: null,
        quantity: null,
      },
      size_category: {
        id: "fa2af31d-3b22-4d91-8d26-7f728db77f74",
        name: "Size Category 2",
        product: {
          id: "163941ca-7eb9-45a0-bc0f-d6861f63045d",
          name: "Product 1",
          image: null,
          quantity: null,
        },
      },
      category: null,
      vendor: null,
    },
  ];

  const [customersList, setCustomersList] = useFetchData(
    defaultData,
    "/customers/",
    "get",
    {},
    "Error Fetching Customers",
    transformCatData
  );
  const [productItemsList, setProductItemsList] = useFetchData(
    defaultData,
    "/product-items/",
    "get",
    {},
    "Products Items",
    transformProductItemJsonData
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

    ShowSuccess("Creating New Sale");

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

  const CUSTOMER_INPUT = {
    name: "Customers",
    id: "customers",
    ph: "John Doe",
    handleChange: handleCategoryChange,
    // value: values?.category,
    options: customersList?.results,
    ref: customerRef,
  };

  const PRODUCT_ITEM_INPUT = {
    name: "Products",
    id: "product_item",
    ph: "Product Item 1",
    hideTitle: true,
    // value: values?.category,
    options: productItemsList?.results,
  };

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
              <InputsElememt extras={<SelectBox item={CUSTOMER_INPUT} />} />

              <div className="_flex_col _gap10" style={{}}>
                {productItems.map((item, index) => (
                  <div
                    key={index}
                    className="itemBox _flex_jcsb"
                    style={{ height: 50 }}
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
                    <div className="selectDiv _flex1 _flex _align_center">
                      <SelectBox
                        item={{
                          ...PRODUCT_ITEM_INPUT,
                          handleChange: (e) => handleChange(e, index),
                        }}
                      />
                    </div>
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

      .product_item_input {
        &::placeholder {
          color: var(--Default-txt, rgba(1, 12, 21, 0.2));

          /* Mid text semibold */

          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 21px; /* 150% */
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

function transformProductItemJsonData(jsonData) {
  console.log("Product items", jsonData);
  return jsonData?.reverse().map((productItem) => {
    return {
      name: (
        <div className="_flex _align_center">
          <img
            src={productItem?.image ?? productItem?.product?.image}
            width={30}
            alt=""
          />
          {productItem?.product?.name}__{productItem?.size_category?.name}__₦
          {productItem?.selling_price}
        </div>
      ),
      value: productItem?.id,
    };
  });
}
