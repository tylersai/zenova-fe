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
  const { id, name, imageUrl, quantity, price } = item;

  return (
    <div className={classNames(styles.root, "py-2 py-md-3 px-2 px-md-3")}>
      <div className="row align-items-center">
        <div className="col-lg-2 col-md-2 col-12">
          <Link href={`/product/${id}`}>
            <Image src={`/images/product/${imageUrl}`} width={200} height={200} alt={name} />
          </Link>
        </div>
        <div className="col-lg-5 col-md-4 col-12">
          <h5 className="product-name">
            <Link href={`/product/${id}`} className={styles.productName}>
              {name}
            </Link>
          </h5>
          <small className="m-0 mt-1 text-nowrap">
            Color: <span className="text-secondary">Space Gray</span>
          </small>
        </div>
        <div className="col-lg-2 col-md-2 col-12">
          <p>{quantity}</p>
        </div>
        <div className="col-lg-2 col-md-2 col-12">
          <p>${price * quantity}</p>
        </div>
        <div className="col-lg-1 col-md-2 col-12">
          <button className={styles.removeItem} onClick={remove}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
