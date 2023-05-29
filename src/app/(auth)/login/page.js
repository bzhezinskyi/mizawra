"use client";

import { roboto_flex } from "@/styles/fonts";
import useStore from "@/store/store";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [blurPassword, setBlurPassword] = useState(true);

  const login = useStore((state) => state.login);

  const handleToggleBlurPassword = () => {
    blurPassword === true ? setBlurPassword(false) : setBlurPassword(true);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const user = { email, password };

    console.log(user);

    setEmail("");
    setPassword("");

    login();
  };

  return (
    <form
      className="mx-auto max-w-md"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2 className="text-3xl mb-5">Welcome back</h2>
      <h3 className={`${roboto_flex.className} text-lg mb-12`}>
        Don’t have an account?{" "}
        <Link href="signup" className="underline">
          Create an account
        </Link>
      </h3>

      <label className="flex flex-col mb-2">
        <span className="text-sm mb-4">Email</span>
        <input
          type="email"
          className={`${roboto_flex.className} h-14 p-5 text-xl rounded-lg border-auth-input`}
          value={email}
          name="email"
          onChange={handleChange}
          required
        />
        <div className="h-6"></div>
      </label>
      <label className="flex flex-col ">
        <div className="mb-4 flex justify-between">
          <span className="text-sm ">Password</span>
          <button
            type="button"
            className="auth-form__blurbtn"
            onClick={handleToggleBlurPassword}
          >
            <HiOutlineEye className={`w-5 h-5 ${blurPassword && "hidden"}`} />
            <HiOutlineEyeSlash
              className={`w-5 h-5 ${!blurPassword && "hidden"}`}
            />
          </button>
        </div>
        <input
          type={blurPassword ? "password" : "text"}
          className={`${roboto_flex.className} h-14 p-5 text-xl rounded-lg border-auth-input`}
          value={password}
          name="password"
          onChange={handleChange}
          required
        />
        <div className="h-6">
          <span className="text-xs txt-err hidden">
            Incorrect password or email
          </span>
        </div>
      </label>

      <Link
        href="/forgot"
        className={`${roboto_flex.className} block mb-12 text-sm underline`}
      >
        Forgot password?
      </Link>
      <button className="w-full py-4 rounded-lg text-lg btn">Log in</button>
    </form>
  );
}
