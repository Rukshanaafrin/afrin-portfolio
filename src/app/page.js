import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3ecff] dark:bg-[#0b0f19]">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}