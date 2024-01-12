import { AddPageBox1 } from "../AddPageBox1";
import AddProductLayout from "@layouts/AddProductLayout";

const AddStock2 = () => {
  const INPUT_LIST = [
    { name: "Select Supplier", ph: "Obagbemi Marvelous", showArrow: true },
    { name: "Delayed Quantity", ph: "10", showArrow: true },
    {
      name: "Defected Quantity",
      ph: "2",
      showArrow: true,
    },
    { name: "Select Supplier", ph: "Obagbemi Marvelous", showArrow: true },
    { name: "Expiring Date", ph: "15/11/2023", showArrow: true },
  ];

  return (
    <AddProductLayout
      title={<>Products (Low on Stock) {" >> "} Add Stock</>}
      inputsTitle={"Product Details"}
      backURL="/stocks/add1"
      nextURL="/stocks/add3"
      popup={<AddPageBox1 />}
      firstPage={false}
      INPUTS_LIST={INPUT_LIST}
      otherInputFields={
        <>
          <div className="input_item _flex_col _gap8">
            <p>Description</p>
            <div className="input textareaInput _flex _align_center">
              <textarea placeholder="Write anything about the product" />
            </div>
          </div>
        </>
      }
    />
  );
};

export default AddStock2;
