import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import useAuth from "@contexts/AuthContext";
import useStore from "@contexts/StoreContext";

const Sidebar = () => {
  const { token, logout, user } = useAuth();
  const { setIsOpen } = useStore();
  const router = useRouter();

  const navFunc = (to) => {
    router.push(`/dp/dashboard/${to}`);
    setIsOpen(false);
    console.warn(to);
  };

  const LINK_LIST = [
    { name: "My Profile", link: "profile" },
    { name: "Dashboard", link: "" },
    { name: "All DP Banners", link: "all" },
    { name: "Create New DP", link: "create" },
    { name: "Join Our Community", link: "join" },
  ];

  return (
    <Container>
      <header>
        <div id="logo">
          <Link href="/">
            <Image src={"/branddeTrans.png"} width={150} height={50} alt="" />
          </Link>
        </div>
        <hr className="hr" />
      </header>
      <div className="main">
        {LINK_LIST.map((item) => (
          <li
            key={item.name}
            onClick={() => navFunc(item.link)}
            className="link"
          >
            {item.name}
          </li>
        ))}

        {/* SHOW IN SMALL */}
        {/* {!token ? (
          <>
            <li onClick={() => navFunc("/login")} className="link show-sm">
              Login
            </li>
            <li onClick={() => navFunc("/register")} className="link show-sm">
              Sign Up
            </li>
          </>
        ) : ( */}
        <li id="logout">
          <p onClick={logout}>Logout</p>
        </li>
        {/* )} */}
        {/* SHOW IN SMALL */}
      </div>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  &&& {
    * {
      padding: 0;
      margin: 0;
      border: none;
      text-decoration: none;
      color: inherit;
    }

    --pad-left: 12%;

    background-color: var(--branddeBlue);
    min-height: 100%;
    width: 100%;
    max-height: 100%;
    display: flex;
    padding-top: 30px !important;
    flex-direction: column;
    transition: all 0.3s linear;
    overflow: hidden auto;
    color: white;
    filter: brightness(0.95);

    ::-webkit-scrollbar {
      width: 0;
      background-color: transparent;
    }

    .show-sm {
      @media screen and (min-width: 500px) {
        display: none;
      }
    }

    > header {
      display: flex;
      flex-direction: column;

      #logo {
        padding: 5px 0;
        padding-left: var(--pad-left);
      }

      .hr {
        width: 100%;
        background: var(--branddeLight);

        height: 10px;
      }
    }

    > .main {
      padding-top: 5px;
      width: 100%;
      display: flex;
      flex-direction: column;
      list-style: none;

      .link {
        position: relative;
        background-color: transparent;
        box-shadow: 0 0 1px 0px #00000020;
        color: #fff;
        cursor: pointer;
        padding: 2px;
        padding-left: var(--pad-left);
        font-size: 0.9em;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;

        font-family: "DM Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
      }

      .active {
        background: var(--branddeAlice);
        color: var(--branddeBlue);
      }

      .link::before {
        content: "";
        box-shadow: -2px 11px 9px -4px rgba(0, 0, 0, 0.25);
        position: absolute;
        background: var(--branddeAlice);
        inset: 0;
        border-radius: 5px;
        width: 0;
        transition: all 0.3s ease-in;
        z-index: 1;
        opacity: 0.2;
      }

      .link:hover {
        backdrop-filter: blur(3px);
        ::before {
          width: 100%;
        }
      }
    }

    #logout {
      margin-top: 5px;
      color: var(--nav-cl);
      cursor: pointer;
      padding: 2px 10px;
      text-align: center;
      padding: 2px 15%;
      /* padding-left: var(--pad-left); */
      position: relative;
      min-height: 35px;

      background: transparent;

      p {
        border-radius: 20px;
        width: max-content;
        padding: 9px 20px;
        border: 2px solid #fff;

        :hover {
          box-shadow: -2px 11px 9px -4px rgba(0, 0, 0, 0.25);
          border: 3px solid var(--branddeAlice);
        }
      }
    }
  }
`;
