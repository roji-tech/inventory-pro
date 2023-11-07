import Link from "next/link";
import MyHeaderStyle, { Wrapper } from "./styles";
import { NavBAr } from "./NavBAr";
import Navbar from "@components/navbar/navbar";

const Header = () => {
  return (
    <Wrapper>
      <div>
        {/* <Navbar /> */}
        <NavBAr />


        <MyHeaderStyle>
          <section className="down">
            <h1 className="text1">
              <span id="first">CONNECT </span>
              <span id="second"> THE DOT </span>
              <span className="of_your_brand">
                <span id="third"> OF </span>
                <span id="fourth"> YOUR BRAND</span>
              </span>
            </h1>
            <p className="text2">
              <span id="one">
                Conference . Summit . Concert .
                <span> Webinar . And Others</span>
              </span>
              <span id="two">Connecting The Dot Of Your Audience.</span>
            </p>
            <div className="btnDiv">
              <p className="header__btn1 btn_center">
                <Link
                  className="take_full_wh flex_center"
                  href="/dp/createDemoBanner"
                >
                  Create A Banner
                </Link>
              </p>
              <p className="header__btn2 btn_center">Use Template</p>
            </div>
          </section>
        </MyHeaderStyle>
      </div>
    </Wrapper>
  );
};

export default Header;
