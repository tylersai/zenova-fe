"use client";

import React from "react";
import HeaderIcon from "./HeaderIcon";

const CartIcon: React.FC = () => {
  return (
    <HeaderIcon href="/cart" className="CartIcon">
      <i className="bi bi-bag"></i>
    </HeaderIcon>
  );
};

export default CartIcon;
