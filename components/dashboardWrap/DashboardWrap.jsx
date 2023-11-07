import { useRef } from "react";
import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";
import NavBar from "@components/navbar/NavBar";
import useStore from "@contexts/StoreContext";
import useClickOutside from "@hooks/useClickOutside";

const Dashboard = ({ element = "NONE" }) => {
  const sideBarRef = useRef();
  const { isopen, setIsOpen, hamburgerRef } = useStore();
  const toggleSidebar = () => setIsOpen(false);

  const close = {
    left: "-100%",
  };

  useClickOutside(sideBarRef, hamburgerRef, toggleSidebar, isopen);

  return (
    <DashboardConatainer isopen={isopen}>
      <section className="up_header">
        <NavBar />
      </section>
      <section className="down">
        <div
          ref={sideBarRef}
          style={!isopen ? close : {}}
          className="outlet mysidebar"
        >
          <Sidebar />
        </div>
        <div className="outlet">{element}</div>
      </section>
    </DashboardConatainer>
  );
};

export default Dashboard;

const DashboardConatainer = styled.div`
  --upHeaderHeight: 80px;

  &&& {
    display: grid;
    grid-template-rows: var(--upHeaderHeight) 100%;
    max-height: 100vh;
    min-height: 100vh;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: var(--bg);
    /* border: 5px solid #00bbff; */
    /* overflow: hidden scroll; */

    * {
      padding: 0;
      border: none;
      box-sizing: border-box;
      /* outline: 3px solid red; */
    }

    .up_header {
      max-height: var(--upHeaderHeight);
      min-height: var(--upHeaderHeight);
      height: var(--upHeaderHeight);
      width: 100%;
      background: #fff;
    }

    .down {
      display: grid;
      grid-template-columns: 25% 74.5%;
      justify-content: space-between;
      overflow: hidden;
      height: calc(100% - var(--upHeaderHeight));
      max-height: calc(100% - var(--upHeaderHeight));
      min-height: calc(100% - var(--upHeaderHeight));
      max-width: 100%;
      background-color: white;

      @media screen and (min-width: 1200px) {
        display: flex;
      }

      @media screen and (max-width: 800px) {
        grid-template-columns: 100%;
      }

      .outlet {
        overflow: hidden auto;
        padding: 0 2% 50px;
        /* width: min(); */
        /* padding-left: 2%; */
        /* padding-bottom: 50px; */

        @media screen and (min-width: 1200px) {
          flex: 1;
          padding: 0 3% 50px;
        }

        @media screen and (max-width: 800px) {
          padding: 0 1% 50px;
        }

        ::-webkit-scrollbar {
          width: 0;
          background-color: var(--bg);
          display: none;
        }
      }

      .mysidebar {
        background-color: var(--branddeBlue);
        transition: all 0.3s linear;
        padding: 0px;
        padding-bottom: 30px;

        @media screen and (min-width: 1200px) {
          max-width: 300px;
          min-width: 200px;
          /* width: min(50%, 300px) !important; */
        }

        @media screen and (max-width: 800px) {
          position: absolute;
          z-index: 999;
          left: ${({ isopen }) => (isopen ? "0" : "-100%")};
          top: var(--upHeaderHeight);
          width: 40%;
          bottom: 0;

          .main {
            padding-bottom: 50px !important;
          }

          @media screen and (max-width: 500px) {
            width: 50%;
          }
        }
      }
    }
  }
`;
