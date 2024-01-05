import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShowSuccess = (msgs) => {
  const options = { pauseOnFocusLoss: false };
  if (Array.isArray(msgs)) {
    return msgs.forEach((msg) => {
      toast.success("➧ " + msg, options);
    });
  } else {
    toast.success("➧ " + msgs, options);
  }
};
