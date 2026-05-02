"use client";

import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-5">
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
      <p className="text-center text-gray-400 mb-12">Contact Me</p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* LEFT */}
        <div>
          <h3 className="text-lg font-semibold mb-5 justify-center text-center">Talk to me</h3>

          <div className="space-y-5">

            {/* Email */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-center">
              <MdEmail className="text-3xl mx-auto mb-2 text-red-500" />
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm text-gray-400">
                mst.rukshanaafrin@gmail.com
              </p>
              <a href="mailto:mst.rukshanaafrin@gmail.com">
                <button className="mt-2 text-sm text-blue-400 hover:underline">
                  Write me →
                </button>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-center">
              <FaLinkedin className="text-3xl mx-auto mb-2 text-blue-500" />
              <h4 className="font-semibold">LinkedIn</h4>
              <p className="text-sm text-gray-400">www.linkedin.com/in/rukshana-afrin</p>
              <a href="#">
                <button className="mt-2 text-sm text-blue-400 hover:underline">
                  Write me →
                </button>
              </a>
            </div>

            {/* Twitter */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-center">
              <FaTwitter className="text-3xl mx-auto mb-2 text-sky-400" />
              <h4 className="font-semibold">Twitter</h4>
              <p className="text-sm text-gray-400">@yourusername</p>
              <a href="#">
                <button className="mt-2 text-sm text-blue-400 hover:underline">
                  Write me →
                </button>
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Write me your project
          </h3>

          <form className="space-y-5">

            <div>
              <label className="text-sm">Name</label>
              <input
                type="text"
                placeholder="Insert your name"
                className="w-full mt-1 p-3 rounded-lg bg-transparent border border-gray-600 outline-none"
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="Insert your email"
                className="w-full mt-1 p-3 rounded-lg bg-transparent border border-gray-600 outline-none"
              />
            </div>

            <div>
              <label className="text-sm">Project</label>
              <textarea
                rows="5"
                placeholder="Write your project"
                className="w-full mt-1 p-3 rounded-lg bg-transparent border border-gray-600 outline-none"
              />
            </div>

            {/* BUTTON FIX */}
            <button className="bg-blue-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-500">
              Send Message <FiSend />
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}