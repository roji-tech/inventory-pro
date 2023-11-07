import { useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useClickOutside2 } from "@hooks/useClickOutside";
import { MyNavLink } from "@components/navbar/navbar/MyNavLink";

export const NavBAr = () => {
  const hamburgerRef = useRef();
  const sideBarRef = useRef();
  const [open, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  useClickOutside2(sideBarRef, hamburgerRef, handleOpen, handleClose, open);

  return (
    <Container open={open} className="_max_inner_width_1440">
      <div className="_max_inner_width_1440">
        <div className="_p_y container">
          <div className="__nav_blur" />
          <section className="top">
            <Link href={"/"}>
              <img src="/dp_logo.svg" alt="" />
            </Link>
            <label
              className="ham ham_open"
              ref={hamburgerRef}
              onClick={!open ? handleOpen : handleClose}
            >
              <img src="/hamburger.svg" alt="H" />
            </label>
            <div ref={sideBarRef} className="close_on_small">
              <div className="navDiv">
                <nav className="nav1">
                  <div className="nav1-header">
                    <img src="/dp_logo.svg" alt="" />
                    <h1 className="nav-close" onClick={handleClose}>
                      <Image
                        src={"/icon _close square.svg"}
                        width={35}
                        height={35}
                        alt="close"
                      />
                    </h1>
                  </div>
                  <div className="div-links">
                    <li>
                      <Link
                        className="take_full_wh flex_center"
                        href="/dp/createDemoBanner"
                      >
                        Create DP
                      </Link>
                    </li>
                    <li>My DP Banners</li>
                    <li>Browse Categories</li>
                    <li>Create Event Ticket</li>
                  </div>
                  <center className="nav2_sm">
                    <MyNavLink
                      headerChild={<img src="/avatar.svg" width={40} />}
                    />
                  </center>
                </nav>
                <nav className="nav2">
                  <li className="login_btn flex_center">
                    <Link href={"/dp/auth/login"}>Login</Link>
                  </li>
                  <li className="reg_btn flex_center">
                    <Link href={"/dp/auth/register"}>Sign Up</Link>
                  </li>
                </nav>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  &&& {
    height: 105px;
    position: relative;

    > div {
      position: fixed;
      inset: 0;
      z-index: 500;
      min-height: max-content;

      background: ${({ bg }) =>
        !bg && "linear-gradient(118.98deg, #000000 -2.11%, #243cf4 63.58%)"};

      .container {
        min-height: max-content;
        padding-top: 22px;
        padding-bottom: 22px;
        background: transparent;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          z-index: 3;

          .ham {
            display: none;
          }
        }

        .__nav_blur {
          content: "";
          position: fixed;
          transform: translateX(${({ open }) => (open ? "0%" : "-105%")});
          inset: 0;
          background: #000000b9;
        }

        .navDiv {
          color: #ffffff;
          display: flex;
          gap: var(--nav-gap);
          flex: 1;
          justify-content: flex-end;

          nav {
            display: flex;
            align-items: center;
            gap: 30px;

            .arrow {
              display: none;
            }

            li {
              cursor: pointer;
              white-space: nowrap;
              font-size: 0.85em;
            }
          }

          .nav1 {
            display: flex;

            .nav1-header {
              display: none;

              .nav-close {
              }
            }

            > div {
              display: flex;
              align-items: center;
              gap: 30px;
            }
          }

          .nav2_sm {
            display: none;
          }

          .nav2 {
            padding-left: 20px;

            > li {
              all: unset;
              cursor: pointer;
              display: grid;
              place-items: center;

              border: 1.5px solid #ffffff;
              border-radius: 50px;
              width: 101px;
              height: 41px;

              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 21px;

              a {
                line-height: 0;
              }

              :hover {
                background: #00000050;

                a {
                  color: #ffffff !important;
                }
              }
            }

            .login_btn {
              background: transparent;

              a {
                color: #ffffff !important;
              }
            }

            .reg_btn {
              background: #f2f4ff;

              a {
                color: #243cf4 !important;
              }
            }
          }
        }

        /*  ===================================================  */
        /*  =        MEDIA QUERY   1100                      =   */
        /*  =        MEDIA QUERY   1100                      =   */
        /*  =        MEDIA QUERY   1100                      =   */
        /*  ===================================================  */

        @media screen and (max-width: 1100px) {
          /* padding-bottom: calc(50px + .5%); */

          .top {
            .navDiv {
              .nav1 {
                div {
                  li {
                  }

                  :hover {
                  }
                }
              }
            }
          }

          .navDiv {
            .nav2_sm {
              background: #0803616d;
              border-radius: 300px;
              display: block;
              padding: 0 !important;
            }

            nav {
              display: flex;
              align-items: center;
              gap: 30px;
              position: relative;

              .arrow {
                display: block;
                font-size: 1em;
                transform: scale(2, 1);
                line-height: 0;
                margin-right: 20px;
              }

              li {
                cursor: pointer;
                white-space: nowrap;
                font-size: 0.85em;
              }
            }

            .nav2 {
              display: none;
            }
          }
        }

        /*  ===================================================  */
        /*  =        MEDIA QUERY   900                      =   */
        /*  =        MEDIA QUERY   900                      =   */
        /*  =        MEDIA QUERY   900                      =   */
        /*  ===================================================  */

        @media screen and (max-width: 900px) {
          /* padding-bottom: 15px; */

          .top {
            justify-content: start;
            justify-content: space-between;

            .ham {
              width: 33px;
              height: 31.44px;
              display: block;
              cursor: pointer;
            }

            .ham_open {
            }

            .ham_close {
            }

            .close_on_small {
              position: fixed;
              z-index: 999;
            }
          }

          .navDiv {
            --padding-side: 30px;

            position: fixed;
            top: 0px;
            left: ${({ open }) => (open ? "0px" : "-100%")};
            z-index: 500;

            height: max-content;
            min-height: 100%;
            width: 50%;
            padding: 10px 0 15px;

            background: #243cf4;
            display: flex;

            flex-direction: column;
            justify-content: start;

            transition: 0.3s;
            /* overflow: scroll; */
            box-shadow: 0 0 10px 5px #00000090;
            opacity: 1;
            /* flex-direction: column; */

            nav {
              display: flex;
              flex-direction: column;

              > div {
                width: 100%;
                display: grid;
                place-items: center;
              }

              .arrow {
                display: none;
              }

              li {
                width: 100%;
                height: 40px;
                display: flex;
                align-items: center;
                padding-left: var(--padding-side) !important;
              }
            }

            .active {
              background: #e2e0ff;
              box-shadow: -2px 11px 9px -4px rgba(0, 0, 0, 0.25);
            }

            .nav1 {
              flex-direction: column;
              display: flex;
              align-items: start;
              justify-content: start;

              .nav1-header {
                display: flex;
                position: relative;
                padding: 10px var(--padding-side);

                .nav-close {
                  width: max-content;
                  height: max-content;
                  border-radius: 5px;
                  padding: 0;
                  position: absolute;
                  top: 50%;
                  right: 10%;
                  transform: translate(50%, -50%);
                  font-size: 30px;
                  z-index: 800;
                  cursor: pointer;

                  img {
                  }

                  :hover + div {
                    /* visibility: visible; */
                  }
                }
              }

              > div {
                position: static;
                flex-direction: column;
                visibility: visible;
                align-items: start;
                flex-direction: column;

                padding: 0;
                border: none;
                background-color: transparent;
                border-radius: 0;

                li {
                  box-shadow: -2px 11px 9px -4px rgba(0, 0, 0, 0.25);
                  color: #ffffff;
                  padding: 0;
                  padding-left: 10px;
                  font-family: "DM Sans";
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 21px;

                  :hover {
                    border-left: 10px solid #e2e0ff;
                    color: #243cf4;
                    background: #e2e0ff !important;
                  }
                }
              }
            }

            .nav2_sm {
              display: none;
            }

            .nav2 {
              display: flex;
              padding: 30px var(--padding-side);
              align-items: flex-start;
              justify-self: start;
              margin-bottom: auto;

              li {
                min-width: 101px;
                width: 120px;
                padding: 0 !important;
              }
            }
          }
        }

        /*  ===================================================  */
        /*  =        MEDIA QUERY   600                      =   */
        /*  =        MEDIA QUERY   600                      =   */
        /*  ===================================================  */

        @media screen and (max-width: 600px) {
          .navDiv {
            width: 80%;

            .nav1 {
              .nav1-header {
                /* background-color: red; */

                .nav-close {
                }
              }

              div {
                li {
                }

                :hover {
                  /* visibility: visible; */
                }
              }
            }

            .nav2 {
              > li {
                width: 150px;
              }
            }
          }
        }
      }
    }
  }
`;
