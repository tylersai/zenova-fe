"use client";

import styles from "./page.module.scss";
import classNames from "classnames";
import Empty from "@/components/Empty";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart } from "@/redux/cartSlice";
import { setAccessToken, setUserProfile } from "@/redux/authSlice";

const ProfilePage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.auth.user);

  const handleLogout = async () => {
    if (confirm("Are you sure you want to logout?")) {
      dispatch(clearCart());
      await fetch("/api/auth/logout", { method: "POST" });
      dispatch(setAccessToken(undefined));
      dispatch(setUserProfile(null));
      router.push("/");
    }
  };

  return (
    <div className={classNames(styles.root, "py-3 py-md-4 py-lg-5")}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            {profile ? (
              <div className="box p-4">
                <p>Name: {profile.name}</p>
                <p>Email: {profile.email}</p>
                <div className="d-flex justify-content-between pt-2">
                  <a
                    href="/logout"
                    className="text-uppercase text-decoration-none link-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                    }}
                  >
                    <i className="bi bi-power"></i> Logout
                  </a>
                  <Link href="/profile/orders" className="text-uppercase text-decoration-none">
                    Order History <i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            ) : (
              <Empty>
                <p>You&apos;re not logged in</p>
                <Link href="/login" className="btn btn-primary">
                  Login
                </Link>
              </Empty>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
