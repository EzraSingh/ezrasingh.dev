import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Spotlight } from "@/app/components";
import cx from "classnames";

import "animate.css";
import "./globals.css";
import "./markdown.scss";

const inter = Inter({ subsets: ["latin"] });

const containerClass = cx(
  inter.className,
  "leading-relaxed",
  "antialiased",
  "bg-slate-900",
  "text-slate-400",
  "selection:bg-teal-300",
  "selection:text-teal-900",
  "overflow-x-hidden"
);

export const metadata: Metadata = {
  title: "Ezra Singh | Software Engineer",
  description: "I build cool things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={containerClass}>
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
