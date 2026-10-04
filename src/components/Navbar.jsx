"use client";

import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home"); // 🔥 default home active

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setDark(!dark);
  };

  const navItem = (id, icon, text) => (
    <li>
      <a
        href={`#${id}`}
        onClick={() => setActive(id)}
        className={`flex items-center gap-1 cursor-pointer
        ${active === id
            ? "text-purple-500 border-b-2 border-purple-500 pb-1"
            : "hover:text-purple-500"
          }`}
      >
        {icon} {text}
      </a>
    </li>
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-50 
    bg-white dark:bg-[#0b0f19]/80 
    backdrop-blur-md 
    border-b border-gray-300 dark:border-gray-700">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          Afrin
        </h1>

        <ul className="flex items-center gap-6 text-base text-gray-700 dark:text-gray-300">

          {navItem("home", <FaHome />, "Home")}
          {navItem("about", <FaUser />, "About")}
          {navItem("skills", <FaCode />, "Skill")}
          {navItem("qualification", <FaGraduationCap />, "Qualification")}
          {navItem("projects", <FaProjectDiagram />, "Project")}
          {navItem("contact", <FaEnvelope />, "Contact Me")}

          {/* Dropdown */}
          <li className="relative cursor-pointer">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-purple-500"
            >
              More <IoMdArrowDropdown />
            </div>

            {open && (
              <div className="absolute top-8 right-0 
              bg-white dark:bg-[#1a1f2e] 
              p-4 rounded-xl shadow-lg w-44 space-y-3">

                <a href="#about" className="block hover:text-purple-500">
                  👤 About
                </a>

                <a href="#skills" className="block hover:text-purple-500">
                  💻 Skills
                </a>

                <a href="#qualification" className="block hover:text-purple-500">
                  🎓 Qualification
                </a>

                <a href="#projects" className="block hover:text-purple-500">
                  📂 Projects
                </a>
              </div>
            )}
          </li>

        </ul>

        <button
          onClick={toggleTheme}
          className="text-black dark:text-white text-2xl"
        >
          {dark ? <MdLightMode /> : <MdDarkMode />}
        </button>

      </div>
    </nav>
  );
}