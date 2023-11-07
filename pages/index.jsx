import GeneralLayout from "@layouts/GeneralLayout";
import Overview from "@mypages/Overview";
// import Image from "next/image";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <GeneralLayout>
      <Overview />
    </GeneralLayout>
  );
}
