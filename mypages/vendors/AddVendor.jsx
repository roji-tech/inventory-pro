import useAxios from "@hooks/useAxios";
import AddProductLayout from "@layouts/AddProductLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const AddVendor = () => {
  const myaxios = useAxios();

  const router = useRouter();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const [loading, setLoading] = useState(false);

  const INPUT_LIST = [
    { name: "Vendor's Name", ph: "John Doe", ref: nameRef },
    { name: "Email", ph: "johndoe@gmail.com", ref: emailRef, type: "email" },
    { name: "Phone Number", ph: "phone number", ref: phoneRef },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone_no: phoneRef.current.value,
    };

    console.log(values);
    ShowSuccess("Creating Customer");

    if (!values?.name) {
      ShowErrors("Name your Customer");
      return;
    }

    await fetchDataWithUseAxios(
      myaxios,
      "/vendors/",
      "post",
      values,
      "Vendor Creation Failed",
      setLoading
    )
      .then(() => {
        router.push("/vendors");
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
      title={<>Vendors {" >> "} Add New Vendor</>}
      inputsTitle={"Vendor's Details"}
      backURL="/vendors"
      nextURL="/vendors"
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

export default AddVendor;
