import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import classNames from "classnames";
import CartIcon from "./CartIcon";
import WishlistIcon from "./WishlistIcon";

const Header: React.FC = () => {
  return (
    <header className={classNames("header", styles.root)}>
      <div className="container">
        <nav className="d-flex align-items-center justify-content-between py-3">
          <Link href="/" className="logo text-decoration-none">
            <h2 className="m-0 text-primary fs-3">Zenova</h2>
          </Link>
          <div className="d-inline-flex align-items-center justify-content-end gap-2 gap-md-3">
            <WishlistIcon />
            <CartIcon />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
