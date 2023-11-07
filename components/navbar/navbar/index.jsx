import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import useClickOutside from "@hooks/useClickOutside";
import Link from "next/link";
import { NAVLINkS, userItem, userItem1 } from "@data/NAVLINkS";
import { MyNavLink } from "./MyNavLink";
import useAuth from "@contexts/AuthContext";
import { DashboardItem } from "./DashboardItem";
import useStore from "@contexts/StoreContext";
import SearchPopUp from "./SearchPopUp";
import { LI } from "./LI";
// import { Logo } from "@components/Logo";
// import "intersection-observer";

const index = () => {
  const { state, logout } = useAuth();
  const [isopen, setIsOpen] = useState(0);
  const { setShowSearch } = useStore();
  const openBtn = useRef();
  const bodyRef = useRef();
  const navbarRef = useRef(null);
  const navdivbarRef = useRef(null);
  const [userList, setUserList] = useState(userItem);
  const [element, setElement] = useState(
    <MyNavLink
      headerChild={
        <Link href={"/auth/login"} children="Sign In/Create Account" />
      }
    />
  );

  useEffect(() => {
    // const options = {
    //   root: document,
    //   rootMargin: "100%",
    //   threshold: 1,
    // };
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       if (stickyNavbar != "static") setStickyNavbar("static");
    //     } else {
    //       if (stickyNavbar != "fixed") setStickyNavbar("fixed");
    //     }
    //   });
    // }, options);
    // observer?.observe(navdivbarRef.current);
    // Cleanup the observer when the component unmounts
    // return () => {
    //   try {
    //     observer?.unobserve(navdivbarRef?.current);
    //   } catch (error) {}
    // };
  }, [navbarRef?.current]);

  const closeSideBar = () => setIsOpen(0);

  useClickOutside(openBtn, bodyRef, closeSideBar, isopen);

  const DashboardItems = DashboardItem(LI, logout);

  useEffect(() => {
    if (state?.access_token) {
      setElement(
        <>
          <LI
            text={"Orders"}
            classes="hoverBorder"
            src="/esim.svg"
            href="/dashboard/orders"
          />
          <LI
            text={"My eSims"}
            classes="hoverBorder"
            src="/esim.svg"
            href="/dashboard/esims"
          />
          <MyNavLink
            item={DashboardItems}
            headerChild={
              <LI
                text={
                  state?.user?.username ||
                  state?.user?.first_name ||
                  "Dashboard"
                }
                src="/avatar.svg"
                href=""
              />
            }
          />
        </>
      );
      setUserList(userItem1(LI, logout));
    }
  }, [state]);

  return (
    <>
      <SearchPopUp />
      <Div
        isopen={isopen}
        style={{ minHeight: "75px", background: "#1c1e7e" }}
        className="dark_cover"
        ref={navdivbarRef}
      />
      <Container
        ref={navbarRef}
        med_width="800px"
        sm_width="600px"
        xsm_width="350px"
        isopen={isopen}
        className="_main_max_width _p_horizontal"
      >
        <section className="">
          <div className="logo_wrapper _flex _full_w">
            {/* <Logo /> */}
          </div>

          <div className="smallScrn _flex _gap20">
            <img
              src="/search.svg"
              alt=""
              className="_pointer headerSearch"
              onClick={() => setShowSearch(true)}
            />
            <MyNavLink item={userList} showBorder={0} moveup={0} />
            <img
              ref={openBtn}
              src="/ham.svg"
              onClick={() => setIsOpen(!isopen)}
              className="_hamburger"
              alt=""
            />
          </div>

          <div ref={bodyRef} className="nav_links _flex_center _gap10">
            <div className="_full_w small_screen_head">
              <div
                className={"logo searchDiv _flex _border_radius_10"}
                onClick={() => {
                  setShowSearch(true);
                  closeSideBar();
                }}
              >
                <img src="/search.svg" alt="" />
                <input
                  type="text"
                  name="search_param"
                  onChange={"handleParam"}
                  placeholder="Search"
                />
              </div>
              <img
                src="/cross.svg"
                onClick={() => setIsOpen(!isopen)}
                className="_pointer"
                width={30}
                alt=""
              />
            </div>
            {NAVLINkS.map((item, i) => (
              <MyNavLink key={i} item={item} />
            ))}

            {element}
            {/* <li className="_flex_center">
            <Link className="_full_wh _flex" href="/auth/forgot">
              <img src="/globe.svg" alt="" />
              <p className="_no_wrap">English</p>
            </Link>
          </li> */}
          </div>
        </section>
      </Container>
    </>
  );
};

export default index;

const Div = styled.div`
  &&& {
    &::before {
      position: absolute;
      content: "";
      inset: 0;
      background: #000000a4;
      transition: 0.2s;
      z-index: 150;
      transform: ${({ isopen }) =>
    isopen ? "translateX(0%)" : "translateX(100%)"};
      display: ${({ isopen }) => (isopen ? "block" : "none")};
    }
  }
`;

const Container = styled.header`
  --med_width: 800px;
  --sm_width: 500px;

  &&& {
    z-index: 200;
    width: 100%;
    color: #000000;
    background: #fff;
    top: 0;
    font-size: 0.9em;
    position: fixed;

    .hoverBorder {
      padding: 6px;
      border: 1px solid transparent !important;

      &:hover {
        border-radius: 20px;
        border: 1px solid #00000030 !important;
      }
    }

    @media screen and (max-width: 1100px) {
    }
    @media screen and (max-width: 900px) {
    }

    > section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      @media screen and (max-width: 1100px) {
        /* background-color: var(--gradient-radial); */
      }
      @media screen and (max-width: ${({ med_width }) => med_width}) {
        /* position: absolute; */

        &::before {
          position: absolute;
          content: "";
          inset: 0;
          background: #000000a4;
          transition: 0.2s;
          z-index: 150;
          transform: ${({ isopen }) =>
    isopen ? "translateX(0%)" : "translateX(100%)"};
          display: ${({ isopen }) => (isopen ? "block" : "none")};
        }
      }

      .smallScrn {
        @media screen and (min-width: ${({ med_width }) => "801px"}) {
          display: none;
        }

        @media screen and (max-width: 400px) {
          .headerSearch {
            display: none;
          }
        }
      }

      ._hamburger {
        width: 25px;
        cursor: pointer;

        @media screen and (min-width: ${({ med_width }) => "801px"}) {
          display: none;
        }
      }
      ._hamburger_close {
        position: absolute;
        border: 3px solid var(--esim-blue);
        opacity: 0.7;
        scale: 1.2;
        border-radius: 50%;
        top: 30px;
        right: 0px;
        width: 25px;

        &:hover {
          border: 1px solid var(--esim-blue);
        }
      }

      > div {
        gap: 30px;

        > li {
          gap: 10px;
        }
      }

      > .nav_links {
        .small_screen_head {
          display: none;

          @media screen and (max-width: ${({ med_width }) => med_width}) {
            display: flex;
            justify-content: space-between;

            .searchDiv {
              gap: 15px;
              padding: 10px;
              width: 85%;
              background: linear-gradient(0deg, #dddddd, #dddddd),
                linear-gradient(0deg, #fafafa, #fafafa);
              box-shadow: 0 0 3px 0px #3c91d8ff;

              > input {
                color: var(--dark);
                font-size: 1.1rem;
                flex: 1;
                background: transparent;
                width: 95%;
              }
            }
          }
        }

        /* &:hover {
          background: green;
        } */

        > .logo {
          display: none;
        }

        @media screen and (max-width: ${({ med_width }) => med_width}) {
          /* box-shadow: -1px 2px 1px 0px #00000020; */

          gap: 5px;
          --li_padding: 5px 5px 5px 20px;
          padding-top: 10px;
          /* padding: 5% 5px 5px 5%; */
          transition: 0.3s all;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          position: fixed;
          z-index: 500;

          top: 0px;
          bottom: 0px;
          right: ${({ isopen }) => (isopen ? "0px" : "-50%")};

          width: 40%;
          height: 100vh;
          height: 100dvh;
          background: #fff;

          > .logo {
            display: flex;
            /* padding: var(--li_padding); */

            img {
              /* background: ; */
            }
          }

          aside {
            padding: var(--li_padding);
            justify-content: flex-start;
            gap: 10px;
          }

          > div,
          > li {
            box-shadow: -1px 2px 1px 0px #00000020 !important;
            gap: 10px;
            padding: var(--li_padding);
            width: 100%;
            justify-content: flex-start;
            font-size: 1em;

            &:hover {
              background: #cccccc50;
            }
          }

          @media screen and (max-width: ${({ sm_width }) => sm_width}) {
            right: ${({ isopen }) => (isopen ? "0px" : "-70%")};
            width: 60%;

            @media screen and (max-width: ${({ xsm_width }) => xsm_width}) {
              right: ${({ isopen }) => (isopen ? "0px" : "-80%")};
              width: 80%;
            }
          }
        }
      }
    }
  }
`;
