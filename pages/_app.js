import { AuthProvider } from "../contexts/AuthContext";
import { StoreProvider } from "../contexts/StoreContext";
import "../styles/globals.css";
import { Source_Sans_Pro } from "@next/font/google";

const sans = Source_Sans_Pro({
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
          <Component {...pageProps} />
        </StoreProvider>
      </AuthProvider>
    </>
  );
}
