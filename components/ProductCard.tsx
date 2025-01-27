import React from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";
import classNames from "classnames";

export type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, category, imageUrl, isNewlyAdded, originalPrice, rating } = product;

  const isDiscounted = price < originalPrice;
  const discountPercent = (((originalPrice - price) * 100) / originalPrice).toFixed(0);

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        {(isNewlyAdded || isDiscounted) && (
          <div className={classNames("d-inline-flex gap-2 position-absolute left-0 top-0", styles.tags)}>
            {isDiscounted && <small className="bg-danger text-white px-2 py-1 z-2">-{discountPercent}%</small>}
            {isNewlyAdded && <small className="bg-primary text-white px-2 py-1 z-2">New</small>}
          </div>
        )}
        <Image src={`/images/product/${imageUrl}`} width={600} height={600} alt={name} />
      </div>
      <div className={styles.info}>
        <span className={styles.category}>{category}</span>
        <h4 className="mb-1">
          <Link className={styles.title} href={`/product/${id}`}>
            {name}
          </Link>
        </h4>
        <small className="d-flex align-items-center gap-1 opacity-75">
          {[...Array(5).keys()].map((idx) =>
            idx < rating ? (
              <i key={idx} className="bi bi-star-fill text-warning"></i>
            ) : (
              <i key={idx} className="bi bi-star text-secondary opacity-75"></i>
            )
          )}
          {rating > 0 ? (
            <span className="ms-1 text-secondary">
              ({(Math.floor(Math.random() * 2500) + 1).toLocaleString("en-US", { useGrouping: true })})
            </span>
          ) : (
            <span className="ms-1 text-secondary opacity-75">(No Reviews)</span>
          )}
        </small>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className={styles.price}>
            <span>${price}</span>
            {isDiscounted && (
              <span className="text-secondary text-decoration-line-through fw-normal fs-6 ms-2 opacity-75">
                ${originalPrice}
              </span>
            )}
          </div>
          <button className="btn btn-sm btn-primary">
            <i className="bi bi-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
