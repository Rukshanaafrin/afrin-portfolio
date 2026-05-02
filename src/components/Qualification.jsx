"use client";

import { useState } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Qualification() {
  const [active, setActive] = useState("education");

  return (
    <section id="qualification" className="py-8 text-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Qualification</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            My personal journey
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center gap-10 mb-12">
          <button
            onClick={() => setActive("education")}
            className={`flex items-center gap-2 ${
              active === "education" ? "text-purple-500" : ""
            }`}
          >
            <FaGraduationCap />
            Education
          </button>

          <button
            onClick={() => setActive("experience")}
            className={`flex items-center gap-2 ${
              active === "experience" ? "text-purple-500" : ""
            }`}
          >
            <FaBriefcase />
            Experience
          </button>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gray-300 dark:bg-gray-600"></div>

          {/* EDUCATION */}
          {active === "education" && (
            <>
              {/* SSC */}
              <div className="mb-10 flex justify-between items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <h3>SSC</h3>
                  <p className="text-sm text-gray-500"> Kamarpukur High School<br /> - Institute
                  </p>
                  <span className="text-xs">2018</span>
                </div>

                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                <div className="w-1/2"></div>
              </div>

              {/* HSC */}
              <div className="mb-10 flex justify-between items-center w-full">
                <div className="w-1/2"></div>

                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>

                <div className="w-1/2 pl-8">
                  <h3>HSC</h3>
                  <p className="text-sm text-gray-500">Thakurgaon Govt Women<br />College - Institute</p>
                  <span className="text-xs">2020</span>
                </div>
              </div>

              {/* BSC */}
              <div className="mb-10 flex justify-between items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <h3>BSc in CSE</h3>
                  <p className="text-sm text-gray-500">University of South<br />Asia - Institute</p>
                  <span className="text-xs">2022 - 2025</span>
                </div>

                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                <div className="w-1/2"></div>
              </div>
            </>
          )}

          {/* EXPERIENCE */}
          {active === "experience" && (
            <>
              <div className="text-center text-gray-500">
                No Experience Yet
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}