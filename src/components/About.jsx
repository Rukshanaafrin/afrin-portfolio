"use client";

import {
  FaAward,
  FaProjectDiagram,
  FaCode,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-transparent pt-12 md:pt-12 pb-8"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            About
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            My Introduction
          </p>
        </div>


        {/* ================= CONTENT ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center">


          {/* ================= LEFT IMAGE ================= */}
          <div className="flex justify-center">

            <div className="relative group">

              {/* Soft Glow */}
              <div
                className="
                  absolute inset-0
                  rounded-2xl
                  bg-purple-400/20
                  blur-xl
                  scale-95
                  group-hover:scale-105
                  transition duration-500
                "
              ></div>

              {/* Image */}
              <img
                src="/profile.jpg"
                alt="Mst. Rukshana Afrin"
                className="
                  relative
                  w-72
                  rounded-2xl
                  shadow-lg
                  border border-purple-200
                  dark:border-purple-400/30

                  transition-all
                  duration-500
                  ease-out

                  group-hover:-translate-y-2
                  group-hover:shadow-[0_15px_35px_rgba(139,92,246,0.25)]

                  animate-[float_4s_ease-in-out_infinite]
                "
              />

            </div>

          </div>


          {/* ================= RIGHT CONTENT ================= */}
          <div className="space-y-6">


            {/* ================= CARDS ================= */}
            <div className="flex gap-4 flex-wrap">


              {/* EXPERIENCE */}
              <div
                className="
                  group
                  bg-white/70
                  dark:bg-[#1a1f2e]/80
                  backdrop-blur-md

                  border border-purple-200
                  dark:border-purple-400/20

                  p-4
                  rounded-2xl
                  text-center
                  w-32

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-[0_10px_25px_rgba(139,92,246,0.18)]
                  hover:border-purple-300
                "
              >
                <FaAward
                  className="
                    mx-auto mb-2
                    text-purple-500
                    text-xl
                    transition
                    duration-300
                    group-hover:scale-110
                  "
                />

                <p className="text-sm font-semibold">
                  Experience
                </p>

                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Learning & Building
                </p>
              </div>


              {/* PROJECTS */}
              <div
                className="
                  group
                  bg-white/70
                  dark:bg-[#1a1f2e]/80
                  backdrop-blur-md

                  border border-blue-200
                  dark:border-blue-400/20

                  p-4
                  rounded-2xl
                  text-center
                  w-32

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-[0_10px_25px_rgba(59,130,246,0.18)]
                  hover:border-blue-300
                "
              >
                <FaProjectDiagram
                  className="
                    mx-auto mb-2
                    text-blue-500
                    text-xl
                    transition
                    duration-300
                    group-hover:scale-110
                  "
                />

                <p className="text-sm font-semibold">
                  Projects
                </p>

                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  10+ Completed
                </p>
              </div>


              {/* SKILLS */}
              <div
                className="
                  group
                  bg-white/70
                  dark:bg-[#1a1f2e]/80
                  backdrop-blur-md

                  border border-cyan-200
                  dark:border-cyan-400/20

                  p-4
                  rounded-2xl
                  text-center
                  w-32

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-[0_10px_25px_rgba(6,182,212,0.18)]
                  hover:border-cyan-300
                "
              >
                <FaCode
                  className="
                    mx-auto mb-2
                    text-cyan-500
                    text-xl
                    transition
                    duration-300
                    group-hover:scale-110
                  "
                />

                <p className="text-sm font-semibold">
                  Skills
                </p>

                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Full Stack
                </p>
              </div>

            </div>


            {/* ================= DESCRIPTION ================= */}
            <p
              className="
                text-gray-600
                dark:text-gray-400
                leading-relaxed
                text-[15px]
                md:text-base
              "
            >
              I am a passionate Full Stack Developer skilled in React,
              Next.js, Node.js, Express, MongoDB, and TypeScript. I enjoy
              building modern, responsive, and user-friendly web applications
              with clean and efficient solutions.
            </p>


            {/* ================= BUTTON ================= */}
            <a
              href="/resume.pdf"
              download
              className="
                inline-flex
                items-center
                gap-2

                px-6
                py-3
                rounded-full

                bg-gradient-to-r
                from-purple-600
                to-blue-600

                text-white
                font-medium

                shadow-md
                shadow-purple-500/20

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-purple-500/30
              "
            >
              Download Resume

              <span className="text-sm">
                ↓
              </span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}