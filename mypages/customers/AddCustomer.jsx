import useAuth from "@contexts/AuthContext";
import useAxios from "@hooks/useAxios";
import AddProductLayout from "@layouts/AddProductLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const AddCustomer = () => {
  const myaxios = useAxios();
  const { dispatchFunc } = useAuth();

  const router = useRouter();

  const nameRef = useRef();
  const emailRef = useRef();

  const [loading, setLoading] = useState(false);

  const INPUT_LIST = [
    {
      name: "Customer's Name",
      ph: "John Doe",
      ref: nameRef,
    },
    {
      name: "Email",
      ph: "johndoe@gmail.com",
      ref: emailRef,
      type: "email",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };

    console.log(values);
    ShowSuccess("Creating Customer");

    if (!values?.name) {
      ShowErrors("Name your Customer");
      return;
    }

    await fetchDataWithUseAxios(
      myaxios,
      "/customers/",
      "post",
      values,
      "Customer Creation Failed",
      setLoading
    )
      .then(() => {
        router.push("/customers");
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
      title={<>Customers {" >> "} Add New Customer</>}
      inputsTitle={"Customer Details"}
      backURL="/customers"
      nextURL="/customers"
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

export default AddCustomer;
