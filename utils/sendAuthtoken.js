import axios from "axios";
import { typ } from "@reducers/AuthReducer";
import { ShowSuccess } from "./ShowSuccess";
import { ShowErrors } from "./ShowErrors";

export async function sendGoogleAuthtoken(
  auth_token,
  dispatchFunc,
  router,
  state,
  logout1
) {
  const config = {
    method: "post",
    url: "/api/auth/google",
    data: { auth_token },
  };
  await axios(config)
    .then((response) => {
      if (response?.data?.created) {
        ShowSuccess(["Welcome!, Sign Up Successful"]);
      } else {
        ShowSuccess(["Welcome Back"]);
      }
      dispatchFunc(typ.setAll, response.data);
      router.replace(state?.page || "/dashboard/esims");
    })
    .catch((e) => {
      ShowErrors("An Error occured");
      logout1();
    });
}

export async function sendGoogleAuthtoken1(auth_token, dispatchFunc) {
  // alert("sending");
  const config = {
    method: "post",
    url: "/api/auth/google",
    data: { auth_token },
  };
  await axios(config)
    .then((response) => {
      // ShowSuccess(["Logging you in"]);
      dispatchFunc(typ.setAll, response.data);
      // router.replace(state?.page || "/dashboard/esims");
    })
    .catch((e) => {});
}

export async function sendAppleAuthtoken(
  auth_token,
  dispatchFunc,
  router,
  state,
  logout1
) {
  alert("apple sending");
  const config = {
    method: "post",
    url: "/api/auth/apple",
    data: { auth_token },
  };

  await axios(config)
    .then((response) => {
      if (response?.data?.created) {
        ShowSuccess(["Welcome!, Sign Up Successful"]);
      } else {
        ShowSuccess(["Welcome Back"]);
      }
      dispatchFunc(typ.setAll, response.data);
      router.replace(state?.page || "/dashboard/esims");
    })
    .catch((e) => {
      logout1();
    });
}

export async function sendAppleAuthtoken1(auth_token, dispatchFunc) {
  const config = {
    method: "post",
    url: "/api/auth/apple",
    data: { auth_token },
  };

  await axios(config)
    .then((response) => {
      // ShowSuccess(["Signing in with Apple"]);
      dispatchFunc(typ.setAll, response.data);
    })
    .catch((e) => {});
}
