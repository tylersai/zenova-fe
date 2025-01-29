"use client";

import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div
      className="ErrorPage d-flex flex-column align-items-center justify-content-center pb-5"
      style={{ height: "calc(100svh - 71px)" }}
    >
      <h1>500</h1>
      <p>Opps! Unexpected error occurred.</p>
      <Link href="/" className="btn btn-primary">
        Go To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
