import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useStore from "@contexts/StoreContext";
import useAuth from "@contexts/AuthContext";
import styled from "styled-components";
import useAxios from "@hooks/useAxios";
import Button from "@components/buttons/Button";

const NavBar = () => {
  const [count, setCount] = useState(0);
  const { isopen, setIsOpen, hamburgerRef } = useStore();
  const hamRef = useRef();
  const { token, logout, user, setUser } = useAuth();
  const router = useRouter();
  const axiosInstance = useAxios();
  const [showBtn, setShowBtn] = useState(false);

  const logoutFunc = () => {
    logout();
    router.push("/login");
  };

  const fetchUser = async () => {
    if (token) {
      await axiosInstance
        .get("/central/myusers/me/")
        .then((resp) => {
          console.log("UPDATING USER");
          setUser(() => ({ ...resp.data }));
        })
        .catch((err) => console.log(`ERROR=== ${err?.response?.status}`));
    }
  };

  useEffect(() => {
    if (router.pathname.startsWith("/dp/dashboard/all")) {
      setShowBtn(true);
    }
  }, []);

  return (
    <>
      <Container>
        {/* hamburgerRef */}
        <HamburgerRef onClick={() => setIsOpen(!isopen)} ref={hamburgerRef}>
          <Image
            src={isopen ? "/cross.svg" : "/side.svg"}
            width={50}
            height={12}
            alt=""
          />
        </HamburgerRef>
        {/* hamburgerRef */}
        <div id="search">
          <input type="search" name="search DP" />
        </div>
        <nav id="hamRef" ref={hamRef}>
          {showBtn && (
            <li>
              <Button />
            </li>
          )}
          <li count={count > 0 ? count : ""} className="notify_icon">
            <Link href={"/dp/dashboard/notify"}>
              {count > 0 && <div className="countBox">{count}</div>}
              <div id="notifImg">
                <Image src={"/notif.png"} width={20} height={25} alt="" />
              </div>
            </Link>
          </li>
          <li className="avatar">
            <Image src={"/aminu.png"} width={25} height={30} alt="" />
          </li>
        </nav>
      </Container>
    </>
  );
};

export default NavBar;

const Container = styled.section`
  * {
    list-style-type: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
    text-decoration: none;
    /* font-weight: 1000; */
  }

  @media screen and (min-width: 500px) {
    .ham {
      display: none;
    }
  }

  a {
    color: var(--nav-cl2);
  }

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 2%;
  padding-left: 9% !important;
  padding-right: 6% !important;
  color: var(--branddeColor);
  width: 100%;
  height: 90%;

  #search {
    height: 34px;
    width: 28%;
    background: #c4c4c4;
    padding: 5px 10px;

    input {
      background: transparent;
      width: 100%;
      height: 100%;
    }
  }

  nav {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 4%;
    padding-right: 3%;
    transition: all 0.3s ease-in-out;
    /* flex: 1; */
    width: 60%;

    @media screen and (max-width: 500px) {
      padding: 0;
    }
  }

  .create {
    width: 226.5px;
    height: 50px;

    background: var(--branddeBlue);
    box-shadow: 0px 7.5px 37.5px rgba(61, 55, 241, 0.25);
    border-radius: 37.5px;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 13.5px;
    line-height: 18px;
    text-align: center;

    color: #ffffff;
  }

  .notify_icon {
    padding: 0 !important;
    align-self: center;
    justify-self: center;
    border-radius: 10px;
    margin: 2px 10px 3px;
    position: relative;
    height: 100%;
    transition: all 0.2s ease-in-out;
    font-size: 10px;

    #notifImg {
      width: 25px;
      height: 25px;
      display: grid;
      place-items: center;

      img {
        padding: 0;
        margin: 0;
        width: 22px;
        height: 23px;
        margin-bottom: -3px;
      }
    }

    .countBox {
      transition: all 0.3s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      font-size: 0.6em;
      background-color: rgb(255, 255, 255);
      color: black;
      width: max-content;
      height: 10px;
      padding: 2px;
      border-radius: 50%;
      scale: 1.5;
      top: -3px;
      right: -4px;
    }

    :hover {
      .countBox {
        background-color: var(--nav-bg);
        scale: 2.5;
        translate: -8px 10px;
        transform: scale(1.2);
        color: rgb(255, 255, 255);
      }
    }
  }

  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 50%;
      aspect-ratio: 1/1;
      width: 44px;
      height: 44px;
    }
  }

  @media screen and (max-width: 800px) {
    padding-left: 2% !important;
    padding-right: 2% !important;
  }

  @media screen and (max-width: 500px) {
    .hide-sm {
      display: none;
      /* visibility: none; */
    }

    /* nav {
      flex-direction: row-reverse;
    } */

    .notify_icon {
      padding: 0.01px !important;
      align-self: center;
      justify-self: center;
      background-color: aliceblue;
      margin: 2px;
      position: relative;
      height: 100%;
      transition: all 0.2s ease-in-out;
      font-size: 10px;
      display: flex;
      justify-content: center;

      img {
        width: 85%;
        align-self: center;
        justify-self: center;
      }
    }
  }
`;

const HamburgerRef = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }

  /* outline: 3px solid red; */
  background-color: white;

  box-sizing: border-box;
  width: fit-content;
  display: grid;
  place-items: center;
  padding: 5px;
  height: 30px;
  width: 30px;
  aspect-ratio: 1/1;
  border-radius: 10px;
  cursor: pointer;

  img {
    width: auto;
  }
`;
