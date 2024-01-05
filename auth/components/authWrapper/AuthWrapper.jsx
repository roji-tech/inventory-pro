import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavBAr } from "@components/header/NavBAr";
import AuthStyles from "../auth.styled";

const AuthWrapper = ({ element, text }) => {
  return (
    <>
      <AuthStyles>
        {/* <header>
        </header> */}
        <NavBAr />
        <div className="container">
          <div className="top">
            <Link href={"/"}>
              <Image
                src="/INV logo blue 3.png"
                width={200}
                height={50}
                alt=""
                className="brandd-logo"
              />
            </Link>
          </div>

          <div className="main">
            <h2 className="cta">{text}</h2>
            {element}
          </div>
        </div>
      </AuthStyles>
    </>
  );
};

export default AuthWrapper;
