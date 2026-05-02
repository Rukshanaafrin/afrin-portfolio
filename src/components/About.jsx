"use client";

import { FaAward, FaProjectDiagram, FaHeadset } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="bg-transparent">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            My Introduction
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="about"
              className="w-72 rounded-2xl shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">

            {/* CARDS */}
            <div className="flex gap-4 flex-wrap">

              <div className="bg-gray-200 dark:bg-[#1a1f2e] p-4 rounded-xl text-center w-32">
                <FaAward className="mx-auto mb-2" />
                <p className="text-sm font-semibold">Experience</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  1+ Years
                </p>
              </div>

              <div className="bg-gray-200 dark:bg-[#1a1f2e] p-4 rounded-xl text-center w-32">
                <FaProjectDiagram className="mx-auto mb-2" />
                <p className="text-sm font-semibold">Projects</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  10+ Completed
                </p>
              </div>

              <div className="bg-gray-200 dark:bg-[#1a1f2e] p-4 rounded-xl text-center w-32">
                <FaHeadset className="mx-auto mb-2" />
                <p className="text-sm font-semibold">Support</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Online 24/7
                </p>
              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I am a frontend developer skilled in React, Next.js and Tailwind CSS.
              I love building modern, responsive and user-friendly websites that
              provide great user experience.
            </p>

            {/* BUTTON */}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-full 
              bg-black text-white 
             dark:bg-purple-500 dark:text-black 
              hover:opacity-80 transition inline-block"
            >
              Download Resume
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
