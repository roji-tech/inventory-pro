import PagesMainLayout from "@layouts/PagesMainLayout";
import Link from "next/link";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { renderProductCell } from "@mypages/renderCell";
import MyDataGrid from "@components/datagrid";
import { useFetchData } from "@hooks/useFetchData";
import { getRandomValues } from "@utils/getRandomStatus";
import useAxios from "@hooks/useAxios";
import { useRouter } from "next/router";
import { DateBox, InputBox, SelectBox } from "@mypages/InputsElememt";
import dayjs from "dayjs";

import Add from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import ModalClose from "@mui/joy/ModalClose";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useAuth from "@contexts/AuthContext";

const Settings = () => {
  const myaxios = useAxios();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [invites, setInvites] = useState([{ email: "", role: "" }]);
  const { state } = useAuth();

  const increment = () => {
    console.log(invites);
    let newfield = { product_item: "", qty_ordered: 1 };
    setInvites([...invites, newfield]);
  };

  const decrement = (index) => {
    if (invites.length > 1) {
      let data = [...invites];
      data.splice(index, 1);
      setInvites(data);
    }
  };

  const handleChange = (event, index) => {
    console.log(event.target.value, index);
    console.log(event.target.name);

    let data = [...invites];
    data[index][event.target.name] = event.target.value;
    setInvites(() => data);
  };

  const handleInvite = async (e) => {
    e.preventDefault();
    setOpen(false);
    console.log(invites);

    const data = {
      data: [...invites.filter((item) => item.email != "")],
    };

    console.log(data);

    ShowSuccess("Sending Invitation");

    if (!data) {
      ShowErrors("Fill All Fields");
      return;
    }

    await fetchDataWithUseAxios(
      myaxios,
      "/invite-team/",
      "post",
      data,
      "Invitation Failed"
    )
      .then(() => {
        router.push("/settings");
      })
      .catch((error) => {
        console.log("Invitation error", error?.response);

        try {
          if (String(error.response.status).startsWith("5")) {
            return ShowErrors(["Service Temporarily Unavailable"]);
          }
          if (error.response?.data?.errors?.length < 15) {
            return ShowErrors([...error.response?.data?.errors]);
          }
          return ShowErrors(
            error?.response?.data?.detail ?? "Invitation Error"
          );
        } catch (err) {
          console.log(err);
          return ShowErrors("Invitation Error");
        }
      });
  };

  const INPUT_LIST = [
    {
      name: "Member's Email",
      ph: "adio07@gmail.com",
      id: "email",
      handleChange,
      type: "email",
    },

    {
      name: "Member's Role",
      ph: "store_clerk",
      id: "role",
      handleChange,
    },
  ];

  const themeSwiter = {
    init: function () {
      this.wrapper = document.getElementById("theme-switcher-wrapper");
      this.button = document.getElementById("theme-switcher-button");
      this.theme = this.wrapper.querySelectorAll("[data-theme]");
      this.themes = [
        "theme-orange",
        "theme-purple",
        "theme-green",
        "theme-blue",
      ];
      this.events();
      this.start();
    },

    events: function () {
      this.button.addEventListener("click", this.displayed.bind(this), false);
      this.theme.forEach((theme) =>
        theme.addEventListener("click", this.themed.bind(this), false)
      );
    },

    start: function () {
      let theme = this.themes[Math.floor(Math.random() * this.themes.length)];
      document.body.classList.add(theme);
    },

    displayed: function () {
      this.wrapper.classList.contains("is-open")
        ? this.wrapper.classList.remove("is-open")
        : this.wrapper.classList.add("is-open");
    },

    themed: function (e) {
      this.themes.forEach((theme) => {
        if (document.body.classList.contains(theme))
          document.body.classList.remove(theme);
      });
      return document.body.classList.add(
        `theme-${e.currentTarget.dataset.theme}`
      );
    },
  };

  useEffect(() => {
    themeSwiter.init();
  }, []);

  return (
    <Wrapper className="_full_wh">
      <PagesMainLayout
        title={
          <span className="bolder _flex _align_center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8054 6.62358L18.183 5.54349C17.6564 4.62957 16.4895 4.31429 15.5743 4.83869V4.83869C15.1387 5.09531 14.6189 5.16812 14.1295 5.04106C13.6401 4.91399 13.2214 4.59749 12.9656 4.16134C12.8011 3.88412 12.7127 3.56836 12.7093 3.24601V3.24601C12.7242 2.72919 12.5292 2.22837 12.1688 1.85764C11.8084 1.48691 11.3133 1.27783 10.7963 1.27805H9.54228C9.03575 1.27804 8.55009 1.47988 8.19278 1.83891C7.83547 2.19795 7.63595 2.68456 7.63839 3.19109V3.19109C7.62338 4.23689 6.77126 5.07678 5.72535 5.07667C5.40299 5.07332 5.08724 4.98491 4.81001 4.82038V4.82038C3.89484 4.29598 2.72789 4.61126 2.20132 5.52519L1.53313 6.62358C1.00719 7.53636 1.31818 8.70258 2.22878 9.23228V9.23228C2.82068 9.57401 3.18531 10.2056 3.18531 10.889C3.18531 11.5725 2.82068 12.204 2.22878 12.5458V12.5458C1.31934 13.0719 1.00801 14.2353 1.53313 15.1453V15.1453L2.1647 16.2346C2.41143 16.6798 2.82538 17.0083 3.31497 17.1474C3.80456 17.2866 4.32942 17.2249 4.7734 16.976V16.976C5.20986 16.7213 5.72997 16.6515 6.21812 16.7822C6.70627 16.9128 7.12201 17.233 7.37294 17.6716C7.53748 17.9489 7.62589 18.2646 7.62924 18.587V18.587C7.62924 19.6435 8.48573 20.5 9.54228 20.5H10.7963C11.8493 20.5 12.7043 19.6491 12.7093 18.5961V18.5961C12.7069 18.088 12.9076 17.6 13.2669 17.2407C13.6262 16.8814 14.1143 16.6806 14.6224 16.6831C14.944 16.6917 15.2584 16.7797 15.5377 16.9394V16.9394C16.4505 17.4653 17.6167 17.1543 18.1464 16.2437V16.2437L18.8054 15.1453C19.0605 14.7075 19.1305 14.186 19 13.6963C18.8694 13.2067 18.549 12.7893 18.1098 12.5366V12.5366C17.6705 12.2839 17.3502 11.8665 17.2196 11.3769C17.089 10.8873 17.159 10.3658 17.4141 9.92793C17.58 9.63831 17.8202 9.39817 18.1098 9.23228V9.23228C19.0149 8.70286 19.3252 7.54346 18.8054 6.63274V6.63274V6.62358Z"
                stroke="#53545C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="10.1752"
                cy="10.889"
                r="2.63616"
                stroke="#53545C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Settings</span>
          </span>
        }
        showHeaderBtn={false}
        headerBtnText=""
        otherHeaderElement={
          <>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="headerBtn _flex_center"
            >
              <img src="/add.svg" alt="" />
              <span>Invite New Member</span>
            </button>
          </>
        }
        mainContent={
          <>
            <Modal
              aria-labelledby="Member Invite"
              aria-describedby="Modal to Invite new member"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              open={open}
              onClose={() => setOpen(false)}
            >
              <ModalDialog
                className="_auto_scroll_y"
                sx={{ width: "100%", maxWidth: 500 }}
              >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <DialogTitle>Invite New Member</DialogTitle>
                <DialogContent>
                  Fill in the information of the member.
                </DialogContent>
                <form onSubmit={handleInvite}>
                  <Stack className="_auto_scroll_y" spacing={3}>
                    {invites.map((member, i) => (
                      <div
                        className="_flex_col _box_shadow _p10"
                        style={{
                          border: "2px solid #00000030",
                          position: "relative",
                        }}
                      >
                        <RemoveIcon
                          onClick={() => decrement(i)}
                          className="_pointer"
                          style={{
                            position: "absolute",
                            zIndex: 10,
                            top: -2,
                            right: -2,
                            fontSize: "20px",
                            borderRadius: "50%",
                            border: "1px solid red",
                            opacity: invites.length == 1 ? 0.2 : 1,
                          }}
                        />
                        {INPUT_LIST.map((item) => (
                          <FormControl key={item?.id}>
                            <InputBox
                              item={{
                                ...item,
                                handleChange: (e) => handleChange(e, i),
                                value: invites[i][item?.id],
                              }}
                            />
                          </FormControl>
                        ))}
                      </div>
                    ))}

                    <Button
                      variant="outlined"
                      color="neutral"
                      startDecorator={<Add />}
                      onClick={increment}
                    >
                      {invites?.length}
                    </Button>

                    <Button type="submit">Submit</Button>
                  </Stack>
                </form>
              </ModalDialog>
            </Modal>

            <section className="settingsMain _flex">
              {/* <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="author" content="CodeHim">
      <title> Dashboard Profile Page Theme Color CSS Vanilla JS Example </title>
      <!-- Style CSS -->
      <link rel="stylesheet" href="./css/style.css">
      <!-- Demo CSS (No need to include it into your project) -->
      <link rel="stylesheet" href="./css/demo.css">
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap" rel="stylesheet"> */}

              <header className="cd__intro">
                <h1>
                  {" "}
                  Dashboard Profile Page Theme Color CSS Vanilla JS Example{" "}
                </h1>
                <p> Dashboard Profile Page Theme Color CSS Vanilla JS </p>
                <div className="cd__action">
                  <a
                    href="#"
                    title="Back to download and tutorial page"
                    className="cd__btn back"
                  >
                    Back to Tutorial
                  </a>
                </div>
              </header>

              <main className="cd__main">
                <div className="profile-page">
                  <div className="content">
                    <div className="content__cover">
                      <div className="content__avatar"></div>
                      <div className="content__bull">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="content__actions">
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path
                            fill="currentColor"
                            d="M192 256A112 112 0 1 0 80 144a111.94 111.94 0 0 0 112 112zm76.8 32h-8.3a157.53 157.53 0 0 1-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 0 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.23 115.23 0 0 0 268.8 288z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M480 256a96 96 0 1 0-96-96 96 96 0 0 0 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592a48 48 0 0 0 48-48 111.94 111.94 0 0 0-112-112z"
                          ></path>
                        </svg>
                        <span>Connect</span>
                      </a>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M208 352c-41 0-79.1-9.3-111.3-25-21.8 12.7-52.1 25-88.7 25a7.83 7.83 0 0 1-7.3-4.8 8 8 0 0 1 1.5-8.7c.3-.3 22.4-24.3 35.8-54.5-23.9-26.1-38-57.7-38-92C0 103.6 93.1 32 208 32s208 71.6 208 160-93.1 160-208 160z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M576 320c0 34.3-14.1 66-38 92 13.4 30.3 35.5 54.2 35.8 54.5a8 8 0 0 1 1.5 8.7 7.88 7.88 0 0 1-7.3 4.8c-36.6 0-66.9-12.3-88.7-25-32.2 15.8-70.3 25-111.3 25-86.2 0-160.2-40.4-191.7-97.9A299.82 299.82 0 0 0 208 384c132.3 0 240-86.1 240-192a148.61 148.61 0 0 0-1.3-20.1C522.5 195.8 576 253.1 576 320z"
                          ></path>
                        </svg>
                        <span>Message</span>
                      </a>
                    </div>
                    <div className="content__title">
                      <h1>{state?.user?.full_name}</h1>
                      <span>{state?.user?.full_name}</span>
                    </div>
                    <div className="content__description">
                      <p>Web Producer - Web Specialist</p>
                      <p>Columbia University - New York</p>
                    </div>
                    <ul className="content__list">
                      <li>
                        <span>Admin</span>Role
                      </li>
                      <li>
                        <span>20</span>Members
                      </li>
                      <li>
                        <span>50</span>Products
                      </li>
                    </ul>
                    <div className="content__button">
                      <a className="button" href="#">
                        <div className="button__border"></div>
                        <div className="button__bg"></div>
                        <p className="button__text">Show more</p>
                      </a>
                    </div>
                  </div>
                  <div className="bg">
                    <div>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div
                    className="theme-switcher-wrapper"
                    id="theme-switcher-wrapper"
                  >
                    <span>Themes color</span>
                    <ul>
                      <li>
                        <em className="is-active" data-theme="orange"></em>
                      </li>
                      <li>
                        <em data-theme="green"></em>
                      </li>
                      <li>
                        <em data-theme="purple"></em>
                      </li>
                      <li>
                        <em data-theme="blue"></em>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="theme-switcher-button"
                    id="theme-switcher-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M352 0H32C14.33 0 0 14.33 0 32v224h384V32c0-17.67-14.33-32-32-32zM0 320c0 35.35 28.66 64 64 64h64v64c0 35.35 28.66 64 64 64s64-28.65 64-64v-64h64c35.34 0 64-28.65 64-64v-32H0v32zm192 104c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.75-24 24-24z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </main>
            </section>
          </>
        }
      />
    </Wrapper>
  );
};

export default Settings;

const Wrapper = styled.div`
  &&& {
    .settingsMain {
      & {
        position: relative;
        background: #fff;
        font: 14px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        color: rgba(0, 0, 0, 0.6);

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .cd__main {
          display: block !important;
        }

        .profile-page {
          display: flex;
          min-height: 100vh;
          padding-top: 5rem;
        }
        @media (max-width: 990px) {
          .profile-page {
            padding-top: 0;
          }
        }

        .profile-page .content {
          display: flex;
          flex-direction: column;
          max-width: 800px;
          width: 100%;
          position: relative;
          z-index: 2;
          margin: auto;
          padding: 2rem;
          background: #fff;
          border-radius: 2rem;
          box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
            0 5px 15px rgba(0, 0, 0, 0.07);
        }
        @media (max-width: 990px) {
          .profile-page .content {
            max-width: 420px;
            padding: 0;
            border-radius: 0;
          }
        }
        .profile-page .content__cover {
          position: relative;
          background: linear-gradient(150deg, #1d8cf8 20%, #3358f4 100%);
        }
        .theme-orange .profile-page .content__cover {
          background: linear-gradient(150deg, #ff4086 20%, #fd8d76 100%);
        }
        .theme-purple .profile-page .content__cover {
          background: linear-gradient(150deg, #8700ff 20%, #f000ff 100%);
        }
        .theme-green .profile-page .content__cover {
          background: linear-gradient(150deg, #1dcc45 20%, #42b883 100%);
        }
        .theme-blue .profile-page .content__cover {
          background: linear-gradient(150deg, #0098f0 20%, #00f2c3 100%);
        }
        .profile-page .content__bull {
          display: none;
          height: 12rem;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 990px) {
          .profile-page .content__bull {
            display: block;
          }
        }
        .profile-page .content__bull span:nth-child(1) {
          display: block;
          position: absolute;
          z-index: 1;
          border-radius: 50%;
        }
        .profile-page .content__bull span:nth-child(2) {
          display: block;
          position: absolute;
          z-index: 1;
          border-radius: 50%;
        }
        .profile-page .content__bull span:nth-child(3) {
          display: block;
          position: absolute;
          z-index: 1;
          border-radius: 50%;
        }
        .profile-page .content__bull span:nth-child(4) {
          display: block;
          position: absolute;
          z-index: 1;
          border-radius: 50%;
        }
        .profile-page .content__bull span:nth-child(5) {
          display: block;
          position: absolute;
          z-index: 1;
          border-radius: 50%;
        }
        .profile-page .content__bull span:nth-child(1) {
          width: 5rem;
          height: 5rem;
          top: -6%;
          left: -3%;
          background: rgba(255, 255, 255, 0.12);
        }
        .profile-page .content__bull span:nth-child(2) {
          width: 8rem;
          height: 8rem;
          top: 18%;
          left: 18%;
          background: rgba(255, 255, 255, 0.05);
        }
        .profile-page .content__bull span:nth-child(3) {
          width: 3rem;
          height: 3rem;
          top: 8%;
          right: 2%;
          background: rgba(255, 255, 255, 0.05);
        }
        .profile-page .content__bull span:nth-child(4) {
          width: 6rem;
          height: 6rem;
          top: 28%;
          right: 12%;
          background: rgba(255, 255, 255, 0.1);
        }
        .profile-page .content__bull span:nth-child(5) {
          width: 4rem;
          height: 4rem;
          top: 70%;
          left: -6%;
          background: rgba(255, 255, 255, 0.04);
        }
        .profile-page .content__avatar {
          width: 12rem;
          height: 12rem;
          position: absolute;
          bottom: 0;
          left: 50%;
          z-index: 2;
          transform: translate(-50%, 50%);
          background: #8f6ed5 url("/avatar.svg") center center no-repeat;
          background-size: cover;
          border-radius: 50%;
          box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
            0 5px 15px rgba(0, 0, 0, 0.07);
        }
        .profile-page .content__avatar::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          border-radius: 50%;
        }
        @media (max-width: 990px) {
          .profile-page .content__avatar {
            width: 11rem;
            height: 11rem;
            border: 0.3rem solid #fff;
            box-shadow: none;
          }
        }
        .profile-page .content__actions {
          display: flex;
          justify-content: space-between;
          padding: 0.2rem;
        }
        @media (max-width: 990px) {
          .profile-page .content__actions {
            padding: 0.8rem 2rem;
          }
        }
        .profile-page .content__actions a {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          height: 3rem;
          padding: 0.2rem 1rem;
          border-radius: 2rem;
          text-decoration: none;
          font-size: 0.9rem;
        }
        @media (max-width: 990px) {
          .profile-page .content__actions a {
            padding: 0.5rem;
          }
        }
        @media (max-width: 990px) {
          .profile-page .content__actions a span {
            display: none;
          }
        }
        .profile-page .content__actions a svg {
          width: 2rem;
          margin-right: 0.4rem;
        }
        @media (max-width: 990px) {
          .profile-page .content__actions a svg {
            margin: 0;
          }
        }
        .profile-page .content__actions a svg path:last-child {
          opacity: 0.5;
        }
        .profile-page .content__actions a:first-child {
          color: #ff4086;
        }
        .theme-orange .profile-page .content__actions a:first-child {
          color: #ff4086;
        }
        .theme-purple .profile-page .content__actions a:first-child {
          color: #8700ff;
        }
        .theme-green .profile-page .content__actions a:first-child {
          color: #1dcc45;
        }
        .theme-blue .profile-page .content__actions a:first-child {
          color: #0098f0;
        }
        .profile-page .content__actions a:last-child {
          color: #d782d9;
        }
        .theme-orange .profile-page .content__actions a:last-child {
          color: #fd8d76;
        }
        .theme-purple .profile-page .content__actions a:last-child {
          color: #f000ff;
        }
        .theme-green .profile-page .content__actions a:last-child {
          color: #42b883;
        }
        .theme-blue .profile-page .content__actions a:last-child {
          color: #00f2c3;
        }
        .profile-page .content__actions a:hover:first-child {
          background: #1d8cf8;
          color: #fff;
        }
        .theme-orange .profile-page .content__actions a:hover:first-child {
          background: #ff4086;
        }
        .theme-purple .profile-page .content__actions a:hover:first-child {
          background: #8700ff;
        }
        .theme-green .profile-page .content__actions a:hover:first-child {
          background: #1dcc45;
        }
        .theme-blue .profile-page .content__actions a:hover:first-child {
          background: #0098f0;
        }
        .profile-page .content__actions a:hover:last-child {
          background: #1d8cf8;
          color: #fff;
        }
        .theme-orange .profile-page .content__actions a:hover:last-child {
          background: #fd8d76;
        }
        .theme-purple .profile-page .content__actions a:hover:last-child {
          background: #f000ff;
        }
        .theme-green .profile-page .content__actions a:hover:last-child {
          background: #42b883;
        }
        .theme-blue .profile-page .content__actions a:hover:last-child {
          background: #00f2c3;
        }
        .profile-page .content__title {
          margin-top: 4.5rem;
          text-align: center;
          order: 1;
        }
        @media (max-width: 990px) {
          .profile-page .content__title {
            margin-top: 1.5rem;
          }
        }
        .profile-page .content__title h1 {
          margin-bottom: 0.1rem;
          font-size: 2.4rem;
        }
        @media (max-width: 990px) {
          .profile-page .content__title h1 {
            font-size: 1.8rem;
          }
        }
        .profile-page .content__title span {
          font-size: 1rem;
        }
        @media (max-width: 990px) {
          .profile-page .content__title span {
            font-size: 0.9rem;
          }
        }
        .profile-page .content__description {
          margin-top: 2.5rem;
          text-align: center;
          order: 2;
        }
        @media (max-width: 990px) {
          .profile-page .content__description {
            margin-top: 1.5rem;
            order: 3;
          }
        }
        .profile-page .content__description p {
          margin-bottom: 0.2rem;
          font-size: 1.2rem;
        }
        @media (max-width: 990px) {
          .profile-page .content__description p {
            font-size: 1rem;
          }
        }
        .profile-page .content__list {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          list-style-type: none;
          order: 3;
        }
        @media (max-width: 990px) {
          .profile-page .content__list {
            margin-top: 1.5rem;
            order: 2;
          }
        }
        .profile-page .content__list li {
          padding: 0 1.5rem;
          text-align: center;
          font-size: 1rem;
        }
        @media (max-width: 990px) {
          .profile-page .content__list li {
            font-size: 0.8rem;
          }
        }
        .profile-page .content__list li span {
          display: block;
          margin-bottom: 0.1rem;
          font-weight: bold;
          font-size: 1.6rem;
        }
        @media (max-width: 990px) {
          .profile-page .content__list li span {
            font-size: 1.2rem;
          }
        }
        .profile-page .content__button {
          margin: 3rem 0 2rem;
          text-align: center;
          order: 4;
        }
        @media (max-width: 990px) {
          .profile-page .content__button {
            margin: 1.5rem 0 2.2rem;
          }
        }
        .profile-page .content__button .button {
          display: inline-block;
          padding: 1.2rem 1.8rem;
          text-align: center;
          text-decoration: none;
          background: linear-gradient(100deg, #1d8cf8 30%, #3358f4 100%);
          border-radius: 2rem;
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
        }
        .theme-orange .profile-page .content__button .button {
          background: linear-gradient(100deg, #ff4086 10%, #fd8d76 100%);
        }
        .theme-purple .profile-page .content__button .button {
          background: linear-gradient(100deg, #8700ff 10%, #f000ff 100%);
        }
        .theme-green .profile-page .content__button .button {
          background: linear-gradient(100deg, #1dcc45 10%, #42b883 100%);
        }
        .theme-blue .profile-page .content__button .button {
          background: linear-gradient(100deg, #0098f0 10%, #00f2c3 100%);
        }
        .profile-page .content__button .button:hover {
          color: #fff;
        }
        @media (max-width: 990px) {
          .profile-page .content__button .button {
            padding: 1rem 1.4rem;
            font-size: 0.9rem;
          }
        }
        .profile-page .bg {
          width: 100%;
          height: 50%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
        .profile-page .bg div {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          overflow: hidden;
          background: linear-gradient(150deg, #1d8cf8 20%, #3358f4 100%);
        }
        .theme-orange .profile-page .bg div {
          background: linear-gradient(150deg, #ff4086 20%, #fd8d76 100%);
        }
        .theme-purple .profile-page .bg div {
          background: linear-gradient(150deg, #8700ff 20%, #f000ff 100%);
        }
        .theme-green .profile-page .bg div {
          background: linear-gradient(150deg, #1dcc45 20%, #42b883 100%);
        }
        .theme-blue .profile-page .bg div {
          background: linear-gradient(150deg, #0098f0 20%, #00f2c3 100%);
        }
        .profile-page .bg span:nth-child(1) {
          display: block;
          position: absolute;
          z-index: 2;
          border-radius: 50%;
          animation: floating 34s infinite;
        }
        .profile-page .bg span:nth-child(2) {
          display: block;
          position: absolute;
          z-index: 2;
          border-radius: 50%;
          animation: floating 34s infinite;
        }
        .profile-page .bg span:nth-child(3) {
          display: block;
          position: absolute;
          z-index: 2;
          border-radius: 50%;
          animation: floating 34s infinite;
        }
        .profile-page .bg span:nth-child(4) {
          display: block;
          position: absolute;
          z-index: 2;
          border-radius: 50%;
          animation: floating 34s infinite;
        }
        .profile-page .bg span:nth-child(5) {
          display: block;
          position: absolute;
          z-index: 2;
          border-radius: 50%;
          animation: floating 34s infinite;
        }
        .profile-page .bg span:nth-child(6) {
          display: block;
          position: absolute;
          z-index: 2;
          border-radius: 50%;
          animation: floating 34s infinite;
        }
        .profile-page .bg span:nth-child(7) {
          display: block;
          position: absolute;
          z-index: 2;
          border-radius: 50%;
          animation: floating 34s infinite;
        }
        .profile-page .bg span:nth-child(1) {
          width: 11rem;
          height: 11rem;
          top: 30%;
          left: 16%;
          background: rgba(255, 255, 255, 0.05);
          animation-duration: 34s;
        }
        .profile-page .bg span:nth-child(2) {
          width: 8rem;
          height: 8rem;
          top: 18%;
          left: 1%;
          background: rgba(255, 255, 255, 0.12);
          animation-duration: 40s;
        }
        .profile-page .bg span:nth-child(3) {
          width: 8rem;
          height: 8rem;
          top: 34%;
          right: 10%;
          background: rgba(255, 255, 255, 0.1);
          animation-duration: 38s;
        }
        .profile-page .bg span:nth-child(4) {
          width: 4rem;
          height: 4rem;
          top: 34%;
          right: 3%;
          background: rgba(255, 255, 255, 0.2);
          animation-duration: 34s;
        }
        .profile-page .bg span:nth-child(5) {
          width: 12rem;
          height: 12rem;
          top: 42%;
          right: 28%;
          background: rgba(255, 255, 255, 0.1);
          animation-duration: 40s;
        }
        .profile-page .bg span:nth-child(6) {
          width: 8rem;
          height: 8rem;
          top: 72%;
          left: 6%;
          background: rgba(255, 255, 255, 0.05);
          animation-duration: 38s;
        }
        .profile-page .bg span:nth-child(7) {
          width: 4rem;
          height: 4rem;
          top: 82%;
          right: 8%;
          background: rgba(255, 255, 255, 0.05);
          animation-duration: 34s;
        }
        .theme-switcher-button {
          position: fixed;
          top: calc(50% - 3.6rem);
          right: 0;
          z-index: 2;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.6);
          border-top-left-radius: 1rem;
          border-bottom-left-radius: 1rem;
          font-size: inherit;
          color: #fd7686;
          cursor: pointer;
        }
        .theme-orange .theme-switcher-button {
          color: #fd7686;
        }
        .theme-purple .theme-switcher-button {
          color: #80f;
        }
        .theme-green .theme-switcher-button {
          color: #42b883;
        }
        .theme-blue .theme-switcher-button {
          color: #1d8cf8;
        }
        .theme-switcher-button svg {
          width: 1.1rem;
        }
        .theme-switcher-wrapper {
          width: 200px;
          position: fixed;
          top: calc(50% - 5rem);
          right: 5rem;
          z-index: 2;
          padding: 1.5rem 0;
          background: linear-gradient(#222a42, #1d253b);
          box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
          border-radius: 0.25rem;
          opacity: 0;
          text-align: center;
          font-size: 1rem;
          color: inherit;
          visibility: hidden;
          transform: translateY(-15%) translateZ(0);
          transform-origin: 0 0;
          transition: transform 0.15s cubic-bezier(0.43, 0.195, 0.02, 1);
        }
        .theme-switcher-wrapper.is-open {
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, 1px, 0);
        }
        .theme-switcher-wrapper span {
          display: block;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.9);
          cursor: default;
        }
        .theme-switcher-wrapper ul {
          margin-top: 0.8rem;
          list-style-type: none;
          font-size: 0;
        }
        .theme-switcher-wrapper li {
          display: inline-block;
          vertical-align: middle;
          padding: 0 0.2rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
        }
        .theme-switcher-wrapper li em {
          display: block;
          border-radius: 1rem;
        }
        .theme-switcher-wrapper [data-theme] {
          width: 20px;
          height: 20px;
        }
        .theme-switcher-wrapper [data-theme="orange"] {
          background: #ff4086;
        }
        .theme-switcher-wrapper [data-theme="purple"] {
          background: #80f;
        }
        .theme-switcher-wrapper [data-theme="green"] {
          background: #42b883;
        }
        .theme-switcher-wrapper [data-theme="blue"] {
          background: #1d8cf8;
        }
        @-moz-keyframes floating {
          0% {
            -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
            transform: rotate(0deg) translate(-10px) rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
            transform: rotate(360deg) translate(-10px) rotate(-360deg);
          }
        }
        @-webkit-keyframes floating {
          0% {
            -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
            transform: rotate(0deg) translate(-10px) rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
            transform: rotate(360deg) translate(-10px) rotate(-360deg);
          }
        }
        @-o-keyframes floating {
          0% {
            -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
            transform: rotate(0deg) translate(-10px) rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
            transform: rotate(360deg) translate(-10px) rotate(-360deg);
          }
        }
        @keyframes floating {
          0% {
            -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
            transform: rotate(0deg) translate(-10px) rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
            transform: rotate(360deg) translate(-10px) rotate(-360deg);
          }
        }
      }

      & {
        @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
        @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

        min-height: 100vh;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: flex-start;

        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 300;
        font-smoothing: antialiased;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 15px;
        background: #eee;

        * {
          margin: 0;
          padding: 0;
        }
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }

        .cd__intro {
          padding: 60px 30px;
          margin-bottom: 15px;
          flex-direction: column;
        }
        .cd__intro,
        .cd__credit {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          background: #fff;
          color: #333;
          line-height: 1.5;
          text-align: center;
        }

        .cd__intro h1 {
          font-size: 18pt;
          padding-bottom: 15px;
        }
        .cd__intro p {
          font-size: 14px;
        }

        .cd__action {
          text-align: center;
          display: block;
          margin-top: 20px;
        }

        .cd__action a.cd__btn {
          text-decoration: none;
          color: #666;
          border: 2px solid #666;
          padding: 10px 15px;
          display: inline-block;
          margin-left: 5px;
        }
        .cd__action a.cd__btn:hover {
          background: #666;
          color: #fff;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .cd__action .cd__btn:before {
          font-family: FontAwesome;
          font-weight: normal;
          margin-right: 10px;
        }
        .down:before {
          content: "\f019";
        }
        .back:before {
          content: "\f112";
        }

        .cd__credit {
          padding: 12px;
          font-size: 9pt;
          margin-top: 40px;
        }
        .cd__credit span:before {
          font-family: FontAwesome;
          color: #e41b17;
          content: "\f004";
        }
        .cd__credit a {
          color: #333;
          text-decoration: none;
        }
        .cd__credit a:hover {
          color: #1dbf73;
        }
        .cd__credit a:hover:after {
          font-family: FontAwesome;
          content: "\f08e";
          font-size: 9pt;
          position: absolute;
          margin: 3px;
        }
        .cd__main {
          background: #fff;
          padding: 20px;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
        .cd__main {
          display: flex;
          width: 100%;
        }

        @media only screen and (min-width: 1360px) {
          .cd__main {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding: 24px;
          }
        }
      }
    }
  }
`;

// themeSwitcher.js

const themeSwiter = {
  init: function () {
    this.wrapper = document.getElementById("theme-switcher-wrapper");
    this.button = document.getElementById("theme-switcher-button");
    this.theme = this.wrapper.querySelectorAll("[data-theme]");
    this.themes = ["theme-orange", "theme-purple", "theme-green", "theme-blue"];
    this.events();
    this.start();
  },

  events: function () {
    this.button.addEventListener("click", this.displayed.bind(this), false);
    this.theme.forEach((theme) =>
      theme.addEventListener("click", this.themed.bind(this), false)
    );
  },

  start: function () {
    let theme = this.themes[Math.floor(Math.random() * this.themes.length)];
    document.body.classList.add(theme);
  },

  displayed: function () {
    this.wrapper.classList.contains("is-open")
      ? this.wrapper.classList.remove("is-open")
      : this.wrapper.classList.add("is-open");
  },

  themed: function (e) {
    this.themes.forEach((theme) => {
      if (document.body.classList.contains(theme))
        document.body.classList.remove(theme);
    });
    return document.body.classList.add(
      `theme-${e.currentTarget.dataset.theme}`
    );
  },
};
