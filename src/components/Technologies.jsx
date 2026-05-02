"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiRedux,
  SiFirebase
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

export default function Technologies() {

  const techs = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white dark:text-white" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },

    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "AWS", icon: <FaAws className="text-yellow-400" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ];

  return (
    <section className="py-24 text-center">

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-black dark:text-white">
        Technologies
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-12">
        My Tech Stack
      </p>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 px-6">

        {techs.map((tech, i) => (
          <div
            key={i}
            className="
            w-16 h-16
            flex flex-col items-center justify-center
            rounded-lg

            bg-black/5 dark:bg-white/5
            border border-black/10 dark:border-white/10

            hover:scale-105
            transition
            mx-auto
            "
          >
            <div className="text-xl mb-1">{tech.icon}</div>
            <p className="text-[9px] text-gray-700 dark:text-gray-300 text-center">
              {tech.name}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}