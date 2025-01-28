"use client";

import { CartItem as CartItemType } from "@/types/cart";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "./CartItem.module.scss";
import Link from "next/link";

type CartItemProps = {
  item: CartItemType;
  remove?: () => void;
};

const CartItem: React.FC<CartItemProps> = ({ item, remove }) => {
  const { id, name, imageUrl, quantity, price, originalPrice } = item;

  const isDiscounted = price < originalPrice;

  return (
    <div className={classNames(styles.root, "py-2 py-md-3 px-2 px-md-3")}>
      <div className="row align-items-center">
        <div className="col-2">
          <Link href={`/product/${id}`}>
            <Image src={`/images/product/${imageUrl}`} width={200} height={200} alt={name} />
          </Link>
        </div>
        <div className="col-5">
          <h5 className="product-name mb-0 mb-md-1 mb-lg-2">
            <Link href={`/product/${id}`} className={styles.productName}>
              {name}
            </Link>
          </h5>
          <small className="m-0 text-nowrap">
            Color: <span className="text-secondary">Space Gray</span>
          </small>
        </div>
        <div className="col-1 col-lg-2">
          <p>{quantity}</p>
        </div>
        <div className="col-2">
          <p className="d-flex flex-wrap align-items-center gap-0 gap-md-1">
            <span>${price * quantity}</span>
            {isDiscounted && (
              <small className="text-secondary text-decoration-line-through opacity-75">
                ${originalPrice * quantity}
              </small>
            )}
          </p>
        </div>
        <div className="col-2 col-lg-1">
          <button className={styles.removeItem} onClick={remove}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
