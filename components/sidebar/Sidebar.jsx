import styled from "styled-components";
import { useRouter } from "next/router";
import useAuth from "@contexts/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const navFunc = (to) => {
    router.push(`/${to}`);
    console.warn(to);
  };

  const LINK_LIST = [
    { name: "Overview", link: "", icon: "overview.svg" },
    { name: "Products", link: "products", icon: "products.svg" },
    { name: "Stocks", link: "stocks", icon: "stocks.svg" },
    { name: "Sales", link: "sales", icon: "sales.svg" },
    { name: "Orders", link: "orders", icon: "orders.svg" },
    { name: "Analysis", link: "analysis", icon: "analysis.svg" },
    { name: "Vendors", link: "vendors", icon: "vendors.svg" },
    { name: "Customers", link: "customers", icon: "reports.svg" },
    { name: "Settings", link: "settings", icon: "settings.svg" },
    // { name: "Log Out", link: "login", icon: "overview.svg" },
    // { name: "Settings", link: "join", icon: "overview.svg" },
  ];

  return (
    <Container>
      <div className="main _auto_scroll_y">
        <section>
          {LINK_LIST.splice(0, 8).map((item) => (
            <li
              key={item.name}
              onClick={() => navFunc(item.link)}
              className={`link _flex ${
                ((router.pathname == "/") &
                  (item?.name?.toLowerCase() == "overview")) |
                router.pathname.includes(item?.name.toLowerCase())
                  ? "active"
                  : ""
              }`}
            >
              <img
                src={
                  ((router.pathname == "/") &
                    (item?.name?.toLowerCase() == "overview")) |
                  router.pathname.includes(item?.name.toLowerCase())
                    ? `${item?.name.toLowerCase()}1.svg`
                    : item?.icon
                }
                alt=""
              />{" "}
              <span>{item?.name}</span>
            </li>
          ))}
        </section>

        <hr style={{ width: "100%", height: "0.3px", background: "#6A6A6A" }} />

        <section>
          {[LINK_LIST.pop()].map((item) => (
            <li
              key={item.name}
              onClick={() => navFunc(item.link)}
              className={`link _flex ${
                ((router.pathname == "/") &
                  (item?.name?.toLowerCase() == "overview")) |
                router.pathname.includes(item?.name.toLowerCase())
                  ? "active"
                  : ""
              }`}
            >
              <img
                src={
                  ((router.pathname == "/") &
                    (item?.name?.toLowerCase() == "overview")) |
                  router.pathname.includes(item?.name.toLowerCase())
                    ? `${item?.name.toLowerCase()}1.svg`
                    : item?.icon
                }
                alt=""
              />
              <span>{item?.name}</span>
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
          <li id="logout" onClick={logout} className="_flex">
            <img src="/logout.svg" alt="" />
            <p>Log out</p>
          </li>
        </section>
        {/* )} */}
        {/* SHOW IN SMALL */}
        <div className="share_ur_thought">
          <div>
            <div className="triangle"></div>
            <p>Share Your Thoughts</p>
          </div>
        </div>
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

    --pad-left: 25%;
    --link_height: 60px;
    --links_gap: 20px;

    /* background-color: var(--INVBlue); */
    min-height: 100%;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s linear;
    overflow: hidden auto;
    color: white;
    padding-bottom: 20px;

    @media screen and (max-width: 1000px) {
      --pad-left: 20%;
      --link_height: 60px;
      --links_gap: 12px;
    }

    @media screen and (max-width: 600px) {
      --links_gap: 12px;
      /* --pad-left: 15%; */
      --link_height: 40px;
    }

    ::-webkit-scrollbar {
      width: 0;
      background-color: transparent;
    }

    .show-sm {
      @media screen and (min-width: 500px) {
        display: none;
      }
    }

    > .main {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3vh;
      list-style: none;

      > section {
        display: flex;
        flex-direction: column;
        gap: var(--links_gap);
        width: 100%;
        padding-right: 25px;
      }

      .link {
        position: relative;
        background-color: transparent;
        box-shadow: 0 0 1px 0px #00000020;
        color: #fff;
        cursor: pointer;
        padding: 5px;
        padding-left: var(--pad-left);
        width: 100%;
        height: 55px;
        display: flex;
        align-items: center;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;

        color: #6d6d6d;

        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        &::before {
          content: "";
          /* box-shadow: -2px 11px 9px -4px rgba(0, 0, 0, 0.25); */
          position: absolute;
          background: var(--blue_light);
          inset: 0;
          border-radius: 5px;
          width: 0;
          transition: all 0.3s ease-in;
          z-index: 1;
          opacity: 0.1;
        }

        &:hover {
          backdrop-filter: blur(1px);

          ::before {
            width: 100%;
          }
        }

        &.active {
          background: var(--blue_light);
          color: var(--blue_color);

          &::after {
            content: "";
            position: absolute;

            inset: 0;
            top: 100%;

            transition: all 0.3s ease-in;
            transform: translate(-20%);
            /* z-index: 0; */

            width: 0;
            height: 0;
            /* border-left: 50px solid transparent; */
            border-right: 75px solid transparent;
            border-top: 60px solid var(--blue_light);
          }
        }
      }
    }

    #logout {
      cursor: pointer;
      text-align: center;
      padding-left: var(--pad-left);
      position: relative;

      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;

      transition: all 0.2s ease-in;

      background: transparent;

      p {
        color: #d12a2a;

        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      &:hover {
        box-shadow: -2px 11px 9px -4px rgba(0, 0, 0, 0.25);
      }
    }

    .share_ur_thought {
      background: transparent;
      display: flex;
      justify-content: center;
      padding-bottom: 20px;

      > div {
        background: var(--blue_light);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 5px;

        width: 170px;
        height: 124.977px;
        flex-shrink: 0;

        border-radius: 12px;
        opacity: 0.9;

        .triangle {
          width: 0;
          height: 0;
          border-radius: 20px;
          border-left: 55px solid transparent;
          border-right: 55px solid transparent;
          border-bottom: 60px solid rgba(105, 86, 229, 0.8);
        }

        p {
          color: var(--purple);
          font-family: Manrope;
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          background: #fff;
          padding: 3px 10px;
          text-align: center;
          height: max-content;
        }
      }
    }
  }
`;

// function getImgBg(item) {
//   const color = "#002CCA";

//   fetch(item?.icon)
//     .then((response) => response.text())
//     .then((svgData) => {
//       const svgContent =
//         ((router.pathname == "/") &
//           (item?.name?.toLowerCase() == "overview")) |
//         router.pathname.includes(item?.name.toLowerCase())
//           ? svgData.replace("{{color}}", color)
//           : svgData;

//       const encodedSVG = btoa(
//         decodeURIComponent(encodeURIComponent(svgContent))
//       );

//       let dataURL = "data:image/svg+xml;base64," + encodedSVG;
//       console.log(dataURL);
//       return dataURL.toString();
//     });
// }
