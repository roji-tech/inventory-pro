import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { Input, Button } from "../components/Input";
import Agree from "../components/agree";

const Register = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setProfile({ ...profile, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    profile.fullName && profile.email && profile.password
      ? alert([profile.fullName, profile.email] + " successfully registered")
      : alert("input field(s) is missing");
    setProfile({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Head>
        <title>signup</title>
      </Head>
      <form autoComplete="off">
        <div>
          <Input
            placeholder="Full Name"
            name="fullName"
            type="text"
            value={profile.fullName}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            name="email"
            type="email"
            value={profile.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            name="password"
            type="password"
            value={profile.password}
            onChange={handleChange}
          />
        </div>
        <Agree />
        <div>
          <Button onClick={handleSubmit}>Sign Up</Button>
        </div>
        <p>
          Already have an account? <Link href="/login">Sign In</Link>
        </p>
      </form>
    </>
  );
};

export default Register;
