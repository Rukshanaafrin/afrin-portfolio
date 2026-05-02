"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Job Tracker",
    desc: "A job tracking web app to manage job applications, track status and organize job search efficiently.",
    img: "/job-tracker.png",
    tech: ["HTML", "CSS", "JavaScript", "DOM", "LocalStorage", "Tailwind"],
    github: "https://github.com/Rukshanaafrin/assignment-4_Job-Tracker",
    live: "https://rukshanaafrin.github.io/assignment-4_Job-Tracker/",
  },
  {
    title: "DigiTools Platform",
    desc: "A modern React app to browse digital tools, manage cart and checkout system.",
    img: "/digitools.png",
    tech: ["HTML", "CSS", "JavaScript", "DOM", "LocalStorage", "React", "Tailwind", "Vite", "Toastify"],
    github: "https://github.com/Rukshanaafrin/DigiTools-Platform",
    live: "https://digitools-platform-afrin.netlify.app/",
  },
  {
    title: "GitHub Issues Tracker",
    desc: "Track GitHub issues with clean UI and API integration.",
    img: "/github.png",
    tech: ["HTML", "CSS", "JavaScript", "DOM", "LocalStorage", "React", "API", "Tailwind", "State"],
    github: "https://github.com/Rukshanaafrin/Assignment-5_GitHub-Issues-Tracker",
    live: "https://rukshanaafrin.github.io/Assignment-5_GitHub-Issues-Tracker/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-5">
      <h2 className="text-3xl font-bold text-center mb-2">Projects</h2>
      <p className="text-center text-gray-400 mb-12">Recent Projects</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a href={p.github} target="_blank">
                  <button className="flex items-center gap-1 text-sm bg-blue-400 px-3 py-1 rounded hover:bg-blue-500">
                    <FaGithub /> GitHub
                  </button>
                </a>

                {p.live !== "#" && (
                  <a href={p.live} target="_blank">
                    <button className="flex items-center gap-1 text-sm bg-blue-400 px-3 py-1 rounded hover:bg-blue-500">
                      <FiExternalLink /> Live Demo
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}