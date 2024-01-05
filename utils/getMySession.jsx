import { sendAppleAuthtoken, sendGoogleAuthtoken } from "@utils/sendAuthtoken";
import { getCustomSession } from "@utils/getCustomSession";

export const getMySession = async ({ dispatchFunc, router, state, logout }) => {
  try {
    const response = await getCustomSession();
    const session = response?.data;
    const auth_token = session.auth_token;
    // alert(JSON.stringify(session?.provider));
    // alert(auth_token);
    if (session?.provider === "google") {
      sendGoogleAuthtoken(auth_token, dispatchFunc, router, state, logout);
    }
    if (session?.provider === "apple") {
      sendAppleAuthtoken(auth_token, dispatchFunc, router, state, logout);
    }
    return;
  } catch (error) {
    console.log(error);
  }
};
