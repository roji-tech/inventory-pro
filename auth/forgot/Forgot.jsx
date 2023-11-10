import Head from "next/head";
import React, { useState } from "react";
import { Input, Button } from "../components/Input";
import Agree from "../components/agree";
import Link from "next/link";

const Forgot = () => {
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    mail ? alert("reset link has been sent") : alert("input field is empty");
    setMail("");
  };

  return (
    <>
      <Head>
        <title>forget</title>
      </Head>
      <form autoComplete="off">
        <Input
          placeholder="Email"
          name="email"
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <Agree />
        <div>
          <Button type="submit" onClick={handleSubmit}>
            Get Reset Link
          </Button>
        </div>
        <p>
          I know my password? <Link href="/login">Sign In</Link>
        </p>
      </form>
    </>
  );
};

export default Forgot;
