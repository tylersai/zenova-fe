"use client";

import React from "react";
import Link from "next/link";
import HeaderIcon from "./HeaderIcon";
import { useAppSelector } from "@/redux/hooks";
import { isLoggedInSelector } from "@/redux/authSlice";

const AuthMenu: React.FC = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  if (!isLoggedIn) {
    return (
      <Link href="/login" className="me-1 link-dark" style={{ textUnderlineOffset: "3px" }}>
        Login
      </Link>
    );
  }

  return (
    <HeaderIcon href="/profile" className="ProfileIcon">
      <i className="bi bi-person"></i>
    </HeaderIcon>
  );
};

export default AuthMenu;
