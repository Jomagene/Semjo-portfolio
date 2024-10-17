"use client";
import { useState } from "react";

export const Header = () => {
  let [active, setActive] = useState(0);
  function activate(current: number) {
    setActive(current);
  }
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border-white/15 border bg-white/10 backdrop-blur rounded-full">
        <a
          href="#"
          className={`nav-item ${active == 0 ? "active" : ""}`}
          onClick={() => activate(0)}>
          Home
        </a>
        <a
          href="#projects"
          className={`nav-item ${active == 1 ? "active" : ""}`}
          onClick={() => activate(1)}>
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item ${active == 2 ? "active" : ""}`}
          onClick={() => activate(2)}>
          About
        </a>
        <a
          href="#contacts"
          className={`nav-item ${active == 3 ? "active" : ""}`}
          onClick={() => activate(3)}>
          Contact
        </a>
      </nav>
    </div>
  );
};
