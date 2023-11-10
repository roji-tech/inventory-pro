import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// import useStore from "@contexts/StoreContext";
import useAuth from "@contexts/AuthContext";
import styled from "styled-components";
import useAxios from "@hooks/useAxios";

const Navbar = ({ isopen, setIsOpen, hamRef }) => {
  const [count, setCount] = useState(15);
  const { token, logout, user, setUser } = useAuth();
  const router = useRouter();
  const axiosInstance = useAxios();

  // const logoutFunc = () => {
  //   logout();
  //   router.push("/login");
  // };

  // const fetchUser = async () => {
  //   if (token) {
  //     await axiosInstance
  //       .get("/central/myusers/me/")
  //       .then((resp) => {
  //         console.log("UPDATING USER");
  //         setUser(() => ({ ...resp.data }));
  //       })
  //       .catch((err) => console.log(`ERROR=== ${err?.response?.status}`));
  //   }
  // };

  // useEffect(() => {
  //   if (router.pathname.startsWith("/dashboard/all")) {
  //     setShowBtn(true);
  //   }
  // }, []);

  return (
    <Container>
      <div className="profile _flex _gap20">
        <div className="avatar_circle">
          <img src={""} alt="" />
        </div>
        <div className="title _flex_col_code">
          <p>Ajibola-B.O</p>
          <small>Marketer</small>
        </div>
      </div>

      <img className="search_icon" src="search.svg" alt="" />
      <div className="_flex searchDiv">
        <div className="_flex search">
          <img src="search.svg" alt="" />

          <input
            type="text"
            placeholder="Search for stocks and more "
            name="search"
          />
        </div>
        <div>
          <li count={count > 0 ? count : ""} className="notify_icon">
            <Link href={"/reports"}>
              {count > 0 && <div className="countBox">{count}</div>}
              <div id="notifImg">
                <Image src={"/notif.svg"} width={30} height={35} alt="" />
              </div>
            </Link>
          </li>
        </div>
      </div>

      <HamburgerRef onClick={() => setIsOpen(!isopen)} ref={hamRef}>
        <img
          src={isopen ? "/cross.svg" : "/ham.svg"}
          width={28}
          height={28}
          alt=""
        />
      </HamburgerRef>
    </Container>
  );
};

export default Navbar;

const Container = styled.section`
  &&& {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    padding-right: 9% !important;
    padding-left: 4% !important;
    box-sizing: border-box;

    width: 100%;
    height: 90%;

    * {
      list-style-type: none;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      border: none;
      text-decoration: none;
    }

    @media screen and (max-width: 900px) {
      padding-right: 3% !important;
      padding-left: 3% !important;
    }

    @media screen and (max-width: 500px) {
    }

    a {
      color: var(--nav-cl2);
    }

    .profile {
      white-space: nowrap;
      align-items: center;

      .avatar_circle {
        background: #d9d9d9;
        width: 66px;
        height: 66px;

        border-radius: 50%;
        border: 1px solid #00000060;
      }

      .title {
        p {
          color: #262626;
          font-family: Source Sans Pro;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        small {
          color: #686767;
          font-family: Source Sans Pro;
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
        }
      }
    }

    .search_icon {
      display: none;
      width: 25px;
      cursor: pointer;
    }

    .searchDiv {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 36%;
      gap: 30px;

      .search {
        height: 45px;
        min-width: calc(100% - 70px);
        flex: 1;
        gap: 15px;

        padding: 6px 12px;
        background: #f7f6f9;

        img {
          width: 25px
        }

        &:focus {
          border: 2px solid var(--blue);
        }

        input {
          background: transparent;
          width: 100%;
          height: 100%;
          color: #262626;
          font-family: Source Sans Pro;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
    }

    .notify_icon {
      padding: 0 !important;
      align-self: center;
      justify-self: center;
      border-radius: 10px;
      position: relative;
      height: 100%;
      transition: all 0.2s ease-in-out;
      font-size: 10px;

      #notifImg {
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;

        img {
          padding: 0;
          margin: 0;
          width: 25px;
          height: 26px;
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
        background: rgba(211, 41, 41, 1);
        color: #ffffff;
        width: max-content;
        height: 10px;
        padding: 2px;
        border-radius: 50%;
        scale: 2;
        top: 1px;
        right: -1px;
      }

      :hover {
        .countBox {
          scale: 2.5;
          translate: -4px 6px;
          transform: scale(1.2);
        }
      }
    }

    @media screen and (max-width: 900px) {
      padding-left: 2% !important;
      padding-right: 2% !important;

      .searchDiv {
        min-width: 26%;

        .search {
          min-width: calc(100% - 90px);
          gap: 10px;
        }
      }
    }

    @media screen and (max-width: 600px) {
      .search_icon {
        display: block;
      }

      .searchDiv {
        min-width: 36%;
        display: none;
      }

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
  }
`;

const HamburgerRef = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }

  /* outline: 3px solid red; */
  background-color: var(--blue_light);

  box-sizing: border-box;
  display: grid;
  place-items: center;
  padding: 2px;
  height: 35px;
  width: 35px;
  aspect-ratio: 1/1;
  border-radius: 10px;
  cursor: pointer;

  img {
    width: auto;
  }
`;
