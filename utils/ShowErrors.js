import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShowErrors = (errors) => {
  const options = { pauseOnFocusLoss: false };

  if (Array.isArray(errors)) {
    return errors.forEach((error) => {
      toast.error("➧ " + error, options);
    });
  } else {
    toast.error("➧ " + errors, options);
  }
};
