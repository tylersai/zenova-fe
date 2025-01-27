import React from "react";
import styles from "./HeaderIcon.module.scss";
import Link from "next/link";
import classNames from "classnames";

export type HeaderIconProps = {
  href: string;
  children: React.ReactNode;
  count?: number;
  className?: string;
};

const HeaderIcon: React.FC<HeaderIconProps> = ({ children, href, count = 0, className }) => {
  return (
    <Link href={href} className={classNames(styles.root, className)}>
      {children}
      {count > 0 && <span className={styles.countBadge}>{count}</span>}
    </Link>
  );
};

export default HeaderIcon;
