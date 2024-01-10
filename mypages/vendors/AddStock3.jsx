import { StockBox1 } from "./StockBox1";
import AddProductLayout from "@layouts/AddProductLayout";

const AddStock2 = () => {
  const INPUT_LIST = [
    { name: "Select Supplier", ph: "Obagbemi Marvelous", showArrow: true },
    {
      name: "Select Size",
      ph: "18ml",
      showDownText: true,
      downText: "Current purchasing amount is ₦4000/Product",
    },
    { name: "Quantity", ph: "10,000" },
    { name: "Selling Amount", ph: "Current selling price is ₦70" },
    { name: "Description", ph: "Write anything about the product" },
  ];

  return (
    <AddProductLayout
      title={<>Products (Low on Stock) {" >> "} Place Order</>}
      inputsTitle={"Product Details"}
      backURL="/stocks/add2"
      nextURL="/stocks"
      popup={<StockBox1 />}
      INPUTS_LIST={INPUT_LIST}
      showPageNumber={false}
    />
  );
};

export default AddStock2;
