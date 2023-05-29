"use client";

import { roboto_flex } from "@/styles/fonts";
import { useState } from "react";

export default function Forgot() {
  const [email, setEmail] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const user = { email };
    console.log(user);

    setEmail("");
  };

  return (
    <form
      className="mx-auto max-w-md"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2 className="text-3xl mb-5">Forgot password?</h2>
      <h3 className={`${roboto_flex.className} text-lg mb-14`}>
        Enter your email address
      </h3>
      <label className="flex flex-col mb-10">
        <span className="text-sm mb-4">Email</span>
        <input
          type="email"
          className={`${roboto_flex.className} h-14 p-5 text-xl rounded-lg border-auth-input`}
          value={email}
          name="email"
          onChange={handleChange}
          required
        />
        <div className="h-6">
          <span className="text-xs txt-err hidden">Incorrect email</span>
        </div>
      </label>
      <button className="w-full py-4 rounded-lg text-lg btn">
        Reset password
      </button>
    </form>
  );
}
