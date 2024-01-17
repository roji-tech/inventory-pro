import useAxios from "@hooks/useAxios";
import AddProductLayout from "@layouts/AddProductLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const AddSize = () => {
  const myaxios = useAxios();

  const router = useRouter();

  const nameRef = useRef();

  const [loading, setLoading] = useState(false);

  const INPUT_LIST = [{ name: "Size Name", ph: "12m", ref: nameRef }];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = {
      name: nameRef.current.value,
    };

    console.log(values);
    ShowSuccess("Creating Size");

    if (!values?.name) {
      ShowErrors("Name the Size");
      return;
    }

    await fetchDataWithUseAxios(
      myaxios,
      "/size-categories/",
      "post",
      values,
      "Size Creation Failed",
      setLoading
    )
      .then(() => {
        router.push("/products/sizes");
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

  return (
    <AddProductLayout
      title={<>Products Size {" >> "} Add New Size</>}
      inputsTitle={"Size's Details"}
      backURL="/products/sizes"
      nextURL="/products/sizes"
      showPageNumber={false}
      showNextBtn={false}
      INPUTS_LIST={INPUT_LIST}
      BtnElement={
        <div className="nextBtnDiv">
          <button>
            <div onClick={handleSubmit} className="_grid_center _full_wh">
              Next
            </div>
          </button>
        </div>
      }
    />
  );
};

export default AddSize;
