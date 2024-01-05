import ReactToastify from "@components/ReactToastify";
import { AuthProvider } from "../contexts/AuthContext";
import { StoreProvider } from "../contexts/StoreContext";
import "../styles/globals.css";
import { Source_Sans_3 } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: "normal",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sans.style.fontFamily};
        }
      `}</style>
      <AuthProvider>
        <StoreProvider>
          <ReactToastify>
            <ToastContainer newestOnTop={true} />
          </ReactToastify>
          <Component {...pageProps} />
        </StoreProvider>
      </AuthProvider>
    </>
  );
}
