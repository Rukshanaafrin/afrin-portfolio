"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Rukshana Afrin</h2>
          <p className="text-gray-400 text-sm">
            I am a Web Developer passionate about creating beautiful and
            functional web experiences.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="font-semibold mb-3">Connect With Me</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/Rukshanaafrin" className="hover:text-blue-400">
              <FaGithub />
            </a>
            <a href="www.linkedin.com/in/rukshana-afrin" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="mailto:mst.rukshanaafrin@gmail.com" className="hover:text-red-400">
              <MdEmail />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 text-sm pb-6 border-t border-white/10 pt-4">
        © 2026 Rukshana Afrin. All rights reserved. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}