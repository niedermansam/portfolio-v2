import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Salsa } from "next/font/google";
import NavBar from "./NavBar";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
const salsa = Salsa({ weight: "400", subsets: ["latin"], variable: "--font-salsa" })

export const metadata: Metadata = {
  title: "Blue Pine Studio | People Driven Software Development & Data Analysis",
  description: "Creating software to make the world just a little bit better.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-mont bg-light w-full min-h-screen`}><NavBar/>{children}</body>
    </html>
  );
}
