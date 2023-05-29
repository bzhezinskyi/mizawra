"use client";

import { roboto_flex } from "@/styles/fonts";
import useStore from "@/store/store";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useStore((state) => state.login);

  const [blurPassword, setBlurPassword] = useState(true);

  const handleToggleBlurPassword = () => {
    blurPassword === true ? setBlurPassword(false) : setBlurPassword(true);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
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

    const user = { firstname, lastname, email, password };
    console.log(user);

    setFirstname("");
    setLastname("");
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
      <h2 className="text-3xl mb-5">Create an account</h2>
      <h3 className={`${roboto_flex.className} text-lg mb-12`}>
        Already have an account?{" "}
        <Link href="login" className="underline">
          Log in
        </Link>
      </h3>

      <label className="flex flex-col mb-2">
        <span className="text-sm mb-4">First name</span>
        <input
          type="text"
          className={`${roboto_flex.className} h-14 p-5 text-xl rounded-lg border-auth-input`}
          value={firstname}
          name="firstname"
          onChange={handleChange}
          required
        />
        <div className="h-6">
          <span className="text-xs txt-err hidden">Incorrect first name</span>
        </div>
      </label>
      <label className="flex flex-col mb-2">
        <span className="text-sm mb-4">Last name</span>
        <input
          type="text"
          className={`${roboto_flex.className} h-14 p-5 text-xl rounded-lg border-auth-input`}
          value={lastname}
          name="lastname"
          onChange={handleChange}
          required
        />
        <div className="h-6">
          <span className="text-xs txt-err hidden">Incorrect last name</span>
        </div>
      </label>
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
        <div className="h-6">
          <span className="text-xs txt-err hidden">Incorrect email</span>
        </div>
      </label>
      <label className="flex flex-col mb-14">
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
          <span className="text-xs txt-err hidden ">Incorrect password</span>
        </div>
        <span className={`${roboto_flex.className} text-sm`}>
          (Use 8 or more characters with a mix of letters, numbers & symbols)
        </span>
      </label>
      <button className="w-full py-4 rounded-lg text-lg btn">Sign up</button>
    </form>
  );
}
