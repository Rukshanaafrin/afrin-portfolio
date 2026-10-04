"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiSend, FiFileText } from "react-icons/fi";

export default function Hero() {
  const roles = [
    "Web Developer",
    "Full Stack Developer",
    "DevOps Engineer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10
      bg-gradient-to-br from-purple-300 to-blue-200
      dark:from-[#0f0b1a] dark:via-[#0b1220] dark:to-[#1a0d19]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[150px] opacity-30 top-[-100px] left-[-100px]"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-6">

          <p className="text-xl text-gray-700 dark:text-gray-300">
            Hey, I'm
          </p>

          <h1 className="text-xl md:text-5xl font-bold leading-tight">
            Mst. Rukshana Afrin👋
          </h1>

          {/* DYNAMIC ROLE */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              I am a{" "}
              <span
                key={roleIndex}
                className="
        inline-block
        font-bold
        bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500
        dark:from-purple-400 dark:via-blue-400 dark:to-cyan-300
        bg-clip-text text-transparent
        role-animation
      "
              >
                {roles[roleIndex]}
              </span>
            </p>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-400">
              Turning ideas into stunning websites ✨
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-3">

            {/* VIEW RESUME */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
      flex items-center gap-2
      px-6 py-3
      rounded-full
      bg-gradient-to-r from-purple-600 to-blue-500
      text-white
      font-medium
      shadow-md shadow-purple-500/20
      hover:from-purple-700 hover:to-blue-600
      hover:scale-105
      transition-all duration-300
    "
            >
              View Resume
              <FiFileText className="text-lg" />
            </a>

            {/* SAY HELLO */}
            <button
              className="
      flex items-center gap-2
      px-6 py-3
      rounded-full
      bg-gray-200 dark:bg-white/10
      backdrop-blur-md
      border border-gray-300 dark:border-white/20
      hover:bg-gray-300 dark:hover:bg-white/20
      hover:scale-105
      transition-all duration-300
    "
            >
              Say Hello
              <FiSend className="text-lg" />
            </button>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 pt-4 text-gray-600 dark:text-gray-400 text-xl">

            <a
              href="https://github.com/Rukshanaafrin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rukshana-afrin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition"
            >
              <FaFacebook />
            </a>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="relative w-[460px] h-[430px] flex items-center justify-center">

          {/* PURPLE ORBIT LINE */}
          <div
            className="
              absolute
              w-[410px] h-[245px]
              rounded-[50%]
              border-2 border-purple-400/60
              rotate-[-12deg]
            "
          ></div>


          {/* React */}
          <span
            className="
              absolute top-[48px] left-[82px]
              z-30
              px-4 py-2 rounded-full
              bg-white dark:bg-[#171323]
              border border-purple-300
              shadow-md
              text-sm font-medium
            "
          >
            React
          </span>


          {/* Next.js */}
          <span
            className="
              absolute top-[48px] right-[72px]
              z-30
              px-4 py-2 rounded-full
              bg-white dark:bg-[#171323]
              border border-purple-300
              shadow-md
              text-sm font-medium
            "
          >
            Next.js
          </span>


          {/* MongoDB */}
          <span
            className="
              absolute top-[200px] left-[-2px]
              z-30
              px-4 py-2 rounded-full
              bg-white dark:bg-[#171323]
              border border-purple-300
              shadow-md
              text-sm font-medium
            "
          >
            MongoDB
          </span>


          {/* Node.js */}
          <span
            className="
              absolute top-[190px] right-[8px]
              z-30
              px-4 py-2 rounded-full
              bg-white dark:bg-[#171323]
              border border-purple-300
              shadow-md
              text-sm font-medium
            "
          >
            Node.js
          </span>


          {/* Tailwind */}
          <span
            className="
              absolute bottom-[42px] left-[82px]
              z-30
              px-4 py-2 rounded-full
              bg-white dark:bg-[#171323]
              border border-purple-300
              shadow-md
              text-sm font-medium
            "
          >
            Tailwind
          </span>


          {/* TypeScript */}
          <span
            className="
              absolute bottom-[42px] right-[62px]
              z-30
              px-4 py-2 rounded-full
              bg-white dark:bg-[#171323]
              border border-purple-300
              shadow-md
              text-sm font-medium
            "
          >
            TypeScript
          </span>


          {/* PROFILE IMAGE */}
          <img
            src="/profile.jpg"
            alt="Mst. Rukshana Afrin"
            className="
              relative z-20
              w-64 h-64
              rounded-full
              object-cover
              border-4 border-purple-400
              shadow-[0_0_30px_rgba(168,85,247,0.30)]
            "
          />

        </div>

      </div>
    </section>
  );
}