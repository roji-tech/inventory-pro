import { NEXT_PUBLIC_GOOGLE_CLIENT_ID } from "@config";

export const googleLoginInit = async (ref, handleLoginSuccess) => {
  if (globalThis?.google) {
    const _google = window?.google;
    _google?.accounts?.id?.initialize({
      client_id: NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleLoginSuccess,
    });

    _google?.accounts?.id?.renderButton(ref?.current, {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt()
  }
  // var spanElements = ref?.current.getElementsByTagName("span");

  // Convert the HTMLCollection to an array to iterate safely
  // var spanArray = Array.from(spanElements);

  // // Remove each <span> element
  // spanArray.forEach(function (span) {
  //   span.parentNode.removeChild(span);
  // });
};
