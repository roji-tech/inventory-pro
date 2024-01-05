import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShowWarning = ( msgs ) => {
  if (Array.isArray(msgs)) {
    return msgs.forEach((msg) => {
      toast.warn("➧ " + msg);
    });
  } else {
    toast.warn("➧ " + msgs);
  }
};

