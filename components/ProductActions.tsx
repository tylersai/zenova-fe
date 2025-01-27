"use client";

import { Product } from "@/types/product";
import React, { useState } from "react";
import AddToCart from "./AddToCart";
import classNames from "classnames";

export type ProductActionsProps = {
  className?: string;
  product: Product;
};

const ProductActions: React.FC<ProductActionsProps> = ({ className, product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={classNames("ProductActions", className)}>
      <div className="row mb-4">
        <div className="col-lg-4 col-md-4 col-12">
          <div className="d-flex align-items-center">
            <label htmlFor="quantity" className="me-4 me-md-3">
              Quantity
            </label>
            <select
              id="quantity"
              className="form-select form-select-sm"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            >
              {[...Array(5).keys()].map((idx) => (
                <option key={idx + 1} value={idx + 1}>
                  {idx + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 mb-3">
          <AddToCart className="w-100" product={product} quantity={quantity} />
        </div>
        <div className="col-lg-4 col-md-4 col-12 mb-3">
          <button className="btn w-100 btn-outline-primary">
            <i className="bi bi-heart"></i> Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
