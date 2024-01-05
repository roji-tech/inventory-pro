// utils/copyToClipboard.js

import copy from "clipboard-copy";
import { ShowSuccess } from "./ShowSuccess";
import { ShowErrors } from "./ShowErrors";

export const copyToClipboard = async (
  text,
  successText = "Copied!",
  errorText = "Could'nt Copy"
) => {
  await copy(text)
    .then(() => {
      ShowSuccess(successText);
    })
    .catch((error) => {
      ShowErrors(errorText);
    });
};
