"use client";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa"; // CSS FIX

export default function Skills() {
  return (
    <section id="skills" className="pt-4 pb-20 text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            My Technical Level
          </p>
        </div>

        {/* TWO CARD GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* FRONTEND */}
          <div className="bg-gray-200 dark:bg-[#1a1f2e] p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-center mb-6">
              Frontend Developer
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="flex items-center gap-2">
                <SiHtml5 className="text-orange-500" />
                <div>
                  <p>HTML5</p>
                  <span className="text-xs text-gray-500">Expert</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaCss3Alt className="text-blue-500" />
                <div>
                  <p>CSS3</p>
                  <span className="text-xs text-gray-500">Expert</span>
                </div>
              </div>

               <div className="flex items-center gap-2">
                <SiTailwindcss className="text-sky-400" />
                <div>
                  <p>Tailwind</p>
                  <span className="text-xs text-gray-500">Expert</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <SiJavascript className="text-yellow-400" />
                <div>
                  <p>JavaScript</p>
                  <span className="text-xs text-gray-500">Expert</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <SiReact className="text-cyan-400" />
                <div>
                  <p>React</p>
                  <span className="text-xs text-gray-500">Expert</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <SiNextdotjs />
                <div>
                  <p>Next.js</p>
                  <span className="text-xs text-gray-500">Intermediate</span>
                </div>
              </div>


            </div>
          </div>

          {/* BACKEND */}
          <div className="bg-gray-200 dark:bg-[#1a1f2e] p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-center mb-6">
              Backend Developer
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="flex items-center gap-2">
                <SiNodedotjs className="text-green-500" />
                <div>
                  <p>Node.js</p>
                  <span className="text-xs text-gray-500">Expert</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <SiExpress />
                <div>
                  <p>Express</p>
                  <span className="text-xs text-gray-500">Expert</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <SiMongodb className="text-green-600" />
                <div>
                  <p>MongoDB</p>
                  <span className="text-xs text-gray-500">Expert</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <SiPostgresql className="text-blue-400" />
                <div>
                  <p>PostgreSQL</p>
                  <span className="text-xs text-gray-500">Intermediate</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <SiDocker className="text-blue-500" />
                <div>
                  <p>Docker</p>
                  <span className="text-xs text-gray-500">Intermediate</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <SiKubernetes className="text-blue-600" />
                <div>
                  <p>Kubernetes</p>
                  <span className="text-xs text-gray-500">Intermediate</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}