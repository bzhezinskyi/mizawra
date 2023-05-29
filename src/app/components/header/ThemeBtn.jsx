"use client";

import { useEffect, useState } from "react";
import { FaAdjust } from "react-icons/fa";

export default function ThemeBtn() {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  });

  return (
    <button onClick={handleToggleTheme}>
      <FaAdjust className="w-5 h-5" />
    </button>
  );
}
