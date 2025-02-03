import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./styles/bootstrap-customized.scss";
import "./styles/globals.scss";
import Header from "@/components/Header";
import { ReduxProvider } from "@/redux/provider";
import AuthProvider from "@/redux/AuthProvider";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_KEY } from "@/utils/constant";
import { getProfile } from "@/repo/auth";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Zenova Online",
  description: "Zenova e-commerce online shop",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get(ACCESS_TOKEN_KEY)?.value;

  let user = null;
  if (accessToken) {
    const res = await getProfile(accessToken);
    const { status, name, email } = res;
    if (!(status && status !== 200)) {
      user = { name, email };
    } else {
      accessToken = undefined;
    }
  }

  return (
    <html lang="en">
      <body className={workSans.variable}>
        <ReduxProvider>
          <AuthProvider accessToken={accessToken} user={user}>
            <Header />
            {children}
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
