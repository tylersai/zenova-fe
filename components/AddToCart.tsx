"use client";

import React from "react";
import classNames from "classnames";
import { Product } from "@/types/product";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/cartSlice";

export type AddToCartProps = {
  className?: string;
  product: Product;
  quantity: number;
};

const AddToCart: React.FC<AddToCartProps> = ({ className, product, quantity = 1 }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    alert("Added to cart");
  };

  return (
    <button className={classNames("btn btn-primary text-nowrap add-to-cart", className)} onClick={handleAddToCart}>
      <i className="bi bi-cart-plus atc-icon"></i>
      <span className="atc-text">&nbsp;Add to Cart</span>
    </button>
  );
};

export default AddToCart;
