import useAuth from "@contexts/AuthContext";
import { AddPageBox1 } from "../AddPageBox1";
import AddProductLayout from "@layouts/AddProductLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useFetchData } from "@hooks/useFetchData";
import { SelectBox } from "@mypages/InputsElememt";

const AddStock = () => {
  const { state } = useAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    product: "ad910f1e-6eb1-46ce-b9a8-efbfe0b0cbbd",
    cost_price: 1.5,
    selling_price: 2.6,
    quantity: 5,
    expiring_date: "2040-12-31",
    barcode: "111111111",
    image:
      "https://unsplash.com/photos/a-person-holding-sand-in-their-hands-zYy15TtlgGk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
    size_category: "75378314-9bf5-4f00-9501-1bc259ff51ce",
  });

  const [productsList, setProductsList] = useFetchData(
    [],
    "/products/",
    "get",
    {},
    "Categories",
    transformProductData
  );

  const [productItemsList, setProductItemsList] = useFetchData(
    [],
    "/product-items/",
    "get",
    {},
    "Products Items",
    transformProductItemJsonData
  );

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));

    if (event.target.name == "product"){
      if (!event.target.value){
        
      }
    }
  };

  const INPUT_LIST = [
    {
      name: "Select Product",
      ph: "Milo",
      id: "product",
      showArrow: false,
      handleChange,
      value: values?.product,
      id: "product",
      options: productsList?.results,
    },

    {
      name: "Select Size",
      ph: "18ml",
      id: "product",
      showArrow: false,
      handleChange,
      value: values?.product,
      id: "product",
      options: productItemsList?.results,
    },

    { name: "Quantity", ph: "10,000", showArrow: true },
    {
      name: "Total Cost",
      ph: "₦ 500,000",
      showArrow: true,
      showDownText: true,
      id: "cost_price",
      downText: "Total Cost per unit is ₦50/ Product",
    },
    {
      name: "Selling Amount",
      ph: "Current selling price is ₦70",
      showArrow: true,
    },
    { name: "Re-order Level", ph: "10,000", showArrow: true },

    {
      name: "Product",
      id: "category",
      ph: "Stationaries",
      handleChange,
      value: values?.category,
      options: productsList?.results,
    },
  ];

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

  return (
    <AddProductLayout
      title={<>Products (Low on Stock) {" >> "} Add Stock</>}
      inputsTitle={"Product Details"}
      backURL="/stocks"
      nextURL="/stocks/add2"
      popup={<AddPageBox1 showPID={true} />}
      // INPUTS_LIST={INPUT_LIST}
      otherInputFields={
        <>
          <SelectBox item={INPUT_LIST[0]} />
          <SelectBox item={INPUT_LIST[1]} />
        </>
      }
    />
  );
};

export default AddStock;

function transformProductData(jsonData) {
  console.log("JSON DATA", jsonData);
  return jsonData.map((item) => {
    const { name, id, quantity } = item;

    return { name: `${name} (${quantity ?? 0})`, value: id };
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
          {productItem?.size_category?.name}__₦{productItem?.selling_price}
        </div>
      ),
      value: productItem?.id,
    };
  });
}
