import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import axios from "axios";
import { api } from "@config";

// import Link from "next/link";
// import { AuthLayout } from "@layouts/AuthLayout";
import { ShowErrors } from "@utils/ShowErrors";

import { typ } from "@reducers/AuthReducer";
import useAuth from "@contexts/AuthContext";
import { useRouter } from "next/router";

// import { PulseLoader } from "react-spinners";

import { ShowSuccess } from "@utils/ShowSuccess";
import Link from "next/link";

const defaultTheme = createTheme();

export default function SignInSide() {
  const emailRef = useRef();
  const passRef = useRef();
  const fullNameRef = useRef();
  const businessNameRef = useRef();
  const [checked, setChecked] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { dispatchFunc, state } = useAuth();

  const handleLogin = (event) => {
    let data = {
      email: emailRef.current.value,
      password: passRef.current.value,
      full_name: fullNameRef.current.value,
    };

    if (checked) {
      data.business_name = businessNameRef.current.value;
    }

    event.preventDefault();
    if (!data?.email | !data?.full_name) {
      ShowErrors(["Please fill all fields"]);
      return;
    } else if (!data?.password) {
      ShowErrors(["Please provide a password"]);
      return;
    } else if (data?.password?.length < 8) {
      ShowErrors(["Password is too short"]);
      // return;
    } else if (checked & !data?.business_name) {
      ShowErrors(["Please Provide a Business Name"]);
      return;
    }

    setLoading(true);
    console.log(data);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: api.register,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        dispatchFunc(typ.setUser, response.data);
        ShowSuccess("Account Created, Logging you in");

        let loginData = {
          email: emailRef.current.value,
          password: passRef.current.value,
        };

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: api.login,
          headers: {
            "Content-Type": "application/json",
          },
          data: loginData,
        };

        axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            // alert(JSON.stringify(response.data));
            dispatchFunc(typ.setAll, response.data);
            router.replace("/");
          })
          .catch((e) => {
            console.log("login error", e?.response);

            try {
              dispatchFunc(typ.clearAll);
              if (String(e.response.status).startsWith("5")) {
                return ShowErrors(["Service Temporarily Unavailable"]);
              }
              if (e.response?.data?.errors?.length < 15) {
                return ShowErrors([...e.response?.data?.errors]);
              }
              return ShowErrors(
                e?.response?.data?.detail ?? "An Error Occurred"
              );
            } catch (error) {
              console.log(error);
              return ShowErrors("An Error Occurred");
            }
          })
          .finally((error) => setLoading(false));
      })
      .catch((e) => {
        console.log("login error", e?.response);
        console.log(e.response?.data);

        try {
          dispatchFunc(typ.clearAll);

          if (String(e.response.status).startsWith("5")) {
            return ShowErrors(["Service Temporarily Unavailable"]);
          }
          if (e.response?.data?.email) {
            return ShowErrors(e.response?.data?.email);
          }
          if (e.response?.data?.password) {
            return ShowErrors(e.response?.data?.password);
          }
          if (e.response?.data?.errors?.length < 15) {
            return ShowErrors([...e.response?.data?.errors]);
          }
          return ShowErrors(e?.response?.data?.detail || e.response?.data || "An Error Occurred");
        } catch (error) {
          console.log(error);
          return ShowErrors("An Error Occurred");
        }
      })
      .finally((error) => setLoading(false));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/auth_bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          className="_flex_center"
        >
          <div className="_flex" style={{ maxWidth: "350px", margin: "auto" }}>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
              }}
            >
              <h3
                style={{
                  color: "#333",
                  fontFamily: "Poppins",
                  fontSize: "26px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                Hello There!
              </h3>

              <h3
                style={{
                  color: "#333",
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                You are Highly Welcomed
              </h3>
              <br />

              <Box
                noValidate
                component="form"
                onSubmit={handleLogin}
                sx={{ mt: 1 }}
                className="_flex_col _gap30"
                method="post"
              >
                <InputBox.Wrapper className="_flex _align_center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="20"
                    viewBox="0 0 28 20"
                    fill="none"
                  >
                    <path
                      d="M10.0026 12.3685C6.86584 12.3685 0.619141 13.9368 0.619141 17.0602V19.406H19.386V17.0602C19.386 13.9368 13.1393 12.3685 10.0026 12.3685ZM3.75589 16.7251C4.88191 15.9476 7.60311 15.0494 10.0026 15.0494C12.4021 15.0494 15.1233 15.9476 16.2493 16.7251H3.75589ZM10.0026 10.0226C12.5897 10.0226 14.6943 7.91802 14.6943 5.33087C14.6943 2.74372 12.5897 0.639149 10.0026 0.639149C7.41544 0.639149 5.31086 2.74372 5.31086 5.33087C5.31086 7.91802 7.41544 10.0226 10.0026 10.0226ZM10.0026 3.32013C11.1152 3.32013 12.0133 4.21826 12.0133 5.33087C12.0133 6.44348 11.1152 7.34161 10.0026 7.34161C8.88998 7.34161 7.99185 6.44348 7.99185 5.33087C7.99185 4.21826 8.88998 3.32013 10.0026 3.32013ZM19.4397 12.4489C20.9946 13.5749 22.067 15.0763 22.067 17.0602V19.406H27.429V17.0602C27.429 14.3524 22.7373 12.8108 19.4397 12.4489ZM18.0455 10.0226C20.6327 10.0226 22.7373 7.91802 22.7373 5.33087C22.7373 2.74372 20.6327 0.639149 18.0455 0.639149C17.3217 0.639149 16.6514 0.813413 16.0348 1.10832C16.8793 2.30136 17.3753 3.7625 17.3753 5.33087C17.3753 6.89925 16.8793 8.36038 16.0348 9.55342C16.6514 9.84833 17.3217 10.0226 18.0455 10.0226Z"
                      fill="#2E2A2A"
                    />
                  </svg>
                  <InputBox.MyTextField
                    required={true}
                    id="full_name"
                    ref={fullNameRef}
                    placeholder="Full Name"
                    name="full_name"
                    autoFocus
                  />
                </InputBox.Wrapper>

                <InputBox.Wrapper className="_flex _align_center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g opacity="0.3">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.5 5.25L2.25 4.5H21.75L22.5 5.25V18.75L21.75 19.5H2.25L1.5 18.75V5.25ZM3 6.8025V18H21V6.804L12.465 13.35H11.55L3 6.8025ZM19.545 6H4.455L12 11.8035L19.545 6Z"
                        fill="#333333"
                      />
                    </g>
                  </svg>
                  <InputBox.MyTextField
                    required={true}
                    id="email"
                    ref={emailRef}
                    placeholder="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </InputBox.Wrapper>

                <InputBox.Wrapper className="_flex _align_center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 17C11.4696 17 10.9609 16.7893 10.5858 16.4142C10.2107 16.0391 10 15.5304 10 15C10 13.89 10.89 13 12 13C12.5304 13 13.0391 13.2107 13.4142 13.5858C13.7893 13.9609 14 14.4696 14 15C14 15.5304 13.7893 16.0391 13.4142 16.4142C13.0391 16.7893 12.5304 17 12 17ZM18 20V10H6V20H18ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 8.89 4.89 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z"
                      fill="#5A5A5A"
                      fillOpacity="0.37"
                    />
                  </svg>
                  <InputBox.MyTextField
                    required
                    fullWidth
                    name="password"
                    ref={passRef}
                    placeholder="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </InputBox.Wrapper>

                <InputBox.Wrapper
                  className="_flex _align_center"
                  style={{ padding: "0px 15px" }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    className="_pointer"
                    id="check"
                    onChange={() => setChecked(!checked)}
                  />
                  <label htmlFor="check" className="_pointer _no_select">
                    Create New Business
                  </label>
                </InputBox.Wrapper>

                {checked ? (
                  <InputBox.Wrapper className="_flex _align_center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="20"
                      viewBox="0 0 28 20"
                      fill="none"
                    >
                      <path
                        d="M10.0026 12.3685C6.86584 12.3685 0.619141 13.9368 0.619141 17.0602V19.406H19.386V17.0602C19.386 13.9368 13.1393 12.3685 10.0026 12.3685ZM3.75589 16.7251C4.88191 15.9476 7.60311 15.0494 10.0026 15.0494C12.4021 15.0494 15.1233 15.9476 16.2493 16.7251H3.75589ZM10.0026 10.0226C12.5897 10.0226 14.6943 7.91802 14.6943 5.33087C14.6943 2.74372 12.5897 0.639149 10.0026 0.639149C7.41544 0.639149 5.31086 2.74372 5.31086 5.33087C5.31086 7.91802 7.41544 10.0226 10.0026 10.0226ZM10.0026 3.32013C11.1152 3.32013 12.0133 4.21826 12.0133 5.33087C12.0133 6.44348 11.1152 7.34161 10.0026 7.34161C8.88998 7.34161 7.99185 6.44348 7.99185 5.33087C7.99185 4.21826 8.88998 3.32013 10.0026 3.32013ZM19.4397 12.4489C20.9946 13.5749 22.067 15.0763 22.067 17.0602V19.406H27.429V17.0602C27.429 14.3524 22.7373 12.8108 19.4397 12.4489ZM18.0455 10.0226C20.6327 10.0226 22.7373 7.91802 22.7373 5.33087C22.7373 2.74372 20.6327 0.639149 18.0455 0.639149C17.3217 0.639149 16.6514 0.813413 16.0348 1.10832C16.8793 2.30136 17.3753 3.7625 17.3753 5.33087C17.3753 6.89925 16.8793 8.36038 16.0348 9.55342C16.6514 9.84833 17.3217 10.0226 18.0455 10.0226Z"
                        fill="#2E2A2A"
                      />
                    </svg>
                    <InputBox.MyTextField
                      required={true}
                      id="business_name"
                      ref={businessNameRef}
                      placeholder="Business Name"
                      name="business_name"
                      autoFocus
                    />
                  </InputBox.Wrapper>
                ) : (
                  ""
                )}
                <Button
                  disabled={isLoading}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 30, background: "#0575E6" }}
                >
                  Sign In
                </Button>
              </Box>

              <div className="_flex_jce">
                <Link
                  style={{
                    color: "var(--INVBlue)",
                    fontWeight: 500,
                    scale: "1.2 1",
                    paddingTop: "40px",
                    transformOrigin: "100% 0",
                  }}
                  href={"/login"}
                >
                  Login
                </Link>
              </div>
            </Box>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

const InputBox = {
  Wrapper: styled.div`
    &&& {
      border-radius: 30px;
      border: 1px solid #eee;
      background: #fff;
      padding: 10px 15px;

      transition: 0.3s all ease-in-out;
    }
  `,

  MyTextField: styled("input")`
    &&& {
      background: transparent;
      padding: 1px;
      margin: 0;
      border: none !important;
      font-size: 16px;
      color: #00000099;

      &:focus,
      &:hover {
        background: transparent;
      }
    }
  `,
};

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
