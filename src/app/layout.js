import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mst. Rukshana Afrin | Full-Stack Developer",
  description: "Portfolio of Mst. Rukshana Afrin — Full-Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen bg-white dark:bg-[#0b0f19] text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}  