import { StockBox1 } from "./StockBox1";
import AddProductLayout from "@layouts/AddProductLayout";

const AddStock = () => {
  const INPUT_LIST = [
    { name: "Select Product", ph: "Milo", showArrow: true },
    { name: "Select Size", ph: "18ml" },
    { name: "Quantity", ph: "10,000", showArrow: true },
    {
      name: "Total Cost",
      ph: "₦ 500,000",
      showArrow: true,
      showDownText: true,
      downText: "Total Cost per unit is ₦50/ Product",
    },
    {
      name: "Selling Amount",
      ph: "Current selling price is ₦70",
      showArrow: true,
    },
    { name: "Re-order Level", ph: "10,000", showArrow: true },
  ];

  return (
    <AddProductLayout
      title={<>Products (Low on Stock) {" >> "} Add Stock</>}
      inputsTitle={"Product Details"}
      backURL="/stocks"
      nextURL="/stocks/add2"
      popup={<StockBox1 showPID={true} />}
      INPUTS_LIST={INPUT_LIST}
    />
  );
};

export default AddStock;
