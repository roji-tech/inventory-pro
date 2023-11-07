import { useState } from "react";
import styled from "styled-components";

const GeneralLayout = ({ children }) => {
  const [toggleHam, setToggleHam] = useState(true);

  return (
    <GeneralLayoutStyles toggleHam={toggleHam}>
      <div className="parent">
        <div className="sidebar">
          <h2>Sidebar</h2>
        </div>
        <div className="main">
          <div className="navbar ">1188px</div>
          <div className="main_content _border">{children}</div>
        </div>
      </div>
    </GeneralLayoutStyles>
  );
};

export default GeneralLayout;

const GeneralLayoutStyles = styled.div`
  &&& {
    --nav_height: 100px;

    position: fixed;
    inset: 0;
    background: #ffffff;
    padding: 10px;

    * {
      padding: 0;
      margin: 0;
    }

    .parent {
      background: #00000018;
      max-width: 100%;
      min-width: 100%;
      max-height: 100%;
      min-height: 100%;

      display: flex;

      .sidebar {
        padding-top: var(--nav_height);
        max-width: 18%;
        min-width: 18%;
      }

      .main {
        display: flex;
        flex-direction: column;
        flex: 1;

        > * {
          max-width: 100%;
          min-width: 100%;
        }

        .navbar {
          min-height: var(--nav_height);
          max-height: var(--nav_height);

          max-width: 100%;
          min-width: 100%;
        }

        .main_content {
          flex: 1;
          padding: 25px 25px 10px;
        }
      }

      @media screen and (max-width: 800px) {
        .sidebar {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          transform: ${({ toggleHam }) =>
            toggleHam ? "translateX(-105%)" : "translateX(0%)"};
          background: #517607;
          max-width: 250px;
          min-width: 250px;
        }
      }
    }
  }
`;
