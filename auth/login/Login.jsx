import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Input, Button } from "../components/Input";

const Login = () => {
  const [profile, setProfile] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setProfile({ ...profile, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    profile.email && profile.password
      ? alert("logged in as " + profile.email)
      : alert("input field(s) is empty");
    setProfile({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Head>
        <title>login</title>
      </Head>
      <form autoComplete="off">
        <div>
          <Input
            placeholder="Email"
            name="email"
            type="email"
            value={profile.email}
            autoComplete="off"
            onChange={handleChange}
          />
          <Input
            placeholder="password"
            name="password"
            type="password"
            autoComplete="off"
            value={profile.password}
            onChange={handleChange}
          />
        </div>
        <p>
          Forgot Password? <Link href="/dp/auth/forgot">Click Here</Link>
        </p>
        <div>
          <Button type={"submit"} onClick={handleSubmit}>
            Sign In
          </Button>
        </div>
        <p>
          Don't have an account? <Link href="/dp/auth/register">Sign Up</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
