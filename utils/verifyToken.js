import { MyApiUrls } from "@backendUrl";
import axios from "axios";

const verifyToken = async (token) => {
  try {
    const response = await axios.post(MyApiUrls.verify, token);
    if (response.status == 200) {
      return { verified: true };
    }
  } catch (err) {
    console.warn(err);
    return { verified: false };
  }
};

export default verifyToken;
