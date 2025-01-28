import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div
      className="NotFoundPage d-flex flex-column align-items-center justify-content-center pb-5"
      style={{ height: "calc(100svh - 71px)" }}
    >
      <h1>404</h1>
      <p>Not Found</p>
      <Link href="/" className="btn btn-primary">
        Go To Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
