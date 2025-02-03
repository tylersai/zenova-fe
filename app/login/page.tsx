"use client";

import styles from "./page.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "@/actions/auth";

const LoginPage = () => {
  const [state, action, pending] = useActionState(loginAction, undefined);

  return (
    <div className={classNames(styles.root, "py-3 py-md-4 py-lg-5")}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <form className="box p-4" action={action}>
              <h3 className="text-center mb-4">Login</h3>
              {state?.errorMessage && (
                <div id="error" className="alert alert-danger mb-3">
                  <i className="bi bi-exclamation-triangle"></i> {state.errorMessage}
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" name="password" required />
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4 mb-2">
                <small className="d-block text-secondary">
                  Don&apos;t have an account? <Link href="/signup">Signup</Link>
                </small>
                <button type="submit" className="btn btn-primary" disabled={pending}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
