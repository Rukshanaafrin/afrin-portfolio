"use client";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 bg-transparent">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[150px] opacity-30 top-[-100px] left-[-100px]"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <p className="text-gray-600 dark:text-gray-400">Hey, I'm</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Mst. Rukshana Afrin👋
          </h1>

          <p className="text-gray-600 dark:text-gray-400">
            I am a Web Developer <br />
            Turning ideas into stunning websites ✨
          </p>

          {/* BUTTON */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-full 
          bg-gray-200 dark:bg-white/10 
          backdrop-blur-md border border-gray-300 dark:border-white/20 
          hover:bg-gray-300 dark:hover:bg-white/20 
          transition duration-300">

            Say Hello
            <FiSend className="text-lg" />
          </button>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 pt-4 text-gray-600 dark:text-gray-400 text-xl">

            <a
              href="https://github.com/Rukshanaafrin"
              target="_blank"
              className="hover:text-black dark:hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="www.linkedin.com/in/rukshana-afrin"
              target="_blank"
              className="hover:text-black dark:hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href=""
              target="_blank"
              className="hover:text-black dark:hover:text-white transition"
            >
              <FaFacebook />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center relative">

          {/* IMAGE */}
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-64 h-64 rounded-full border-4 border-purple-500 object-cover z-10"
          />

          {/* FLOATING CARD 1 */}
          <div className="absolute top-5 right-0 
          bg-gray-200 dark:bg-[#1a1f2e]/80 
          backdrop-blur-md px-4 py-2 rounded-xl text-sm shadow-lg">
            💡 120 Problem Solving
          </div>

          {/* FLOATING CARD 2 */}
          <div className="absolute bottom-5 left-0 
          bg-gray-200 dark:bg-[#1a1f2e]/80 
          backdrop-blur-md px-4 py-2 rounded-xl text-sm shadow-lg">
            🏆 150 Finished Projects
          </div>

        </div>

      </div>
    </section>
  );
}