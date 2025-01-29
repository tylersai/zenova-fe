"use client";

import React from "react";
import { useProfile } from "@/hooks/use-profile";
import Link from "next/link";
import HeaderIcon from "./HeaderIcon";

const AuthMenu: React.FC = () => {
  const { data: profile } = useProfile();

  if (!profile) {
    return <Link href="/login">Login</Link>;
  }

  return (
    <HeaderIcon href="/profile" className="ProfileIcon">
      <i className="bi bi-person"></i>
    </HeaderIcon>
  );
};

export default AuthMenu;
