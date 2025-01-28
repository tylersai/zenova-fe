import React from "react";
import styles from "./CheckoutBox.module.scss";
import classNames from "classnames";

export type CheckoutBoxProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

const CheckoutBox: React.FC<CheckoutBoxProps> = ({ children, className, title }) => {
  return (
    <div className={classNames("CheckoutBox box", className)}>
      <div className={classNames(styles.title, "px-4 py-3")}>
        <h5 className="m-0 fw-medium text-primary">{title}</h5>
      </div>
      <div className="px-4 pt-3 pb-2">{children}</div>
    </div>
  );
};

export default CheckoutBox;
