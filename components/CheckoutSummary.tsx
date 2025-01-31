"use client";

import { useAppSelector } from "@/redux/hooks";
import { formatMoney } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const CheckoutSummary = ({ handlePlaceOrder, isLoading }: { handlePlaceOrder: () => void; isLoading?: boolean }) => {
  const { items, totalPrice } = useAppSelector((state) => state.cart);

  const totalUndiscounted = items.reduce((cum, cur) => (cum += cur.originalPrice * cur.quantity), 0);

  return (
    <div className="CheckoutSummary box p-4 d-flex flex-column align-items-stretch">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span>Total</span>
        <span>${formatMoney(totalUndiscounted)}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span>Shipping</span>
        <span className="text-success">FREE</span>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span>You save</span>
        <span className="text-success">${formatMoney(totalUndiscounted - totalPrice)}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <strong className="fw-medium">You pay</strong>
        <strong className="fw-medium">${formatMoney(totalPrice)}</strong>
      </div>
      <button className="btn btn-primary btn-lg rounded mt-3" onClick={handlePlaceOrder} disabled={isLoading}>
        Pay Now
      </button>
      <Link
        href="/cart"
        className="btn btn-light text-primary mt-3"
        style={{ pointerEvents: isLoading ? "none" : "initial" }}
      >
        Back to Cart
      </Link>
    </div>
  );
};

export default CheckoutSummary;
