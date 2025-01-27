import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./styles/bootstrap-customized.scss";
import "./styles/globals.scss";
import Header from "@/components/Header";
import { ReduxProvider } from "@/redux/provider";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
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
      <body className={workSans.variable}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
