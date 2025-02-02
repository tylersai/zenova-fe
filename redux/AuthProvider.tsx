"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { AuthState, setAccessToken, setUserProfile } from "./authSlice";

type AuthProviderProps = {
  children: React.ReactNode;
} & AuthState;

const AuthProvider: React.FC<AuthProviderProps> = ({ children, accessToken, user }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAccessToken(accessToken));
    dispatch(setUserProfile(user));
  }, [dispatch, accessToken, user]);

  return <>{children}</>;
};

export default AuthProvider;
