import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./bootstrap-customized.scss";
import "./globals.scss";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenova Online",
  description: "Zenova e-commerce online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>{children}</body>
    </html>
  );
}
