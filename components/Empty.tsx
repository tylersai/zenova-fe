import classNames from "classnames";
import React from "react";

export type EmptyProps = {
  children?: React.ReactNode;
  className?: string;
};

const Empty: React.FC<EmptyProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "Empty box d-flex flex-column justify-content-center align-items-center py-5 px-2 px-sm-3 px-md-4 gap-2 text-secondary",
        className
      )}
    >
      {children || "No Data"}
    </div>
  );
};

export default Empty;
