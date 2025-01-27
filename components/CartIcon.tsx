"use client";

import React from "react";
import HeaderIcon from "./HeaderIcon";
import { useAppSelector } from "@/redux/hooks";

const CartIcon: React.FC = () => {
  const items = useAppSelector((state) => state.cart.items);
  const count = items.reduce((cum, cur) => (cum += cur.quantity), 0);

  return (
    <HeaderIcon href="/cart" className="CartIcon" count={count}>
      <i className="bi bi-bag"></i>
    </HeaderIcon>
  );
};

export default CartIcon;
