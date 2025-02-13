import React from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";
import classNames from "classnames";
import AddToCart from "./AddToCart";

export type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, category, imageUrl, isNewlyAdded, originalPrice, rating } = product;

  const isDiscounted = price < originalPrice;
  const discountPercent = (((originalPrice - price) * 100) / originalPrice).toFixed(0);

  return (
    <div className={classNames(styles.root, "product-card mt-3 mt-md-4")}>
      <Link href={`/product/${id}`} className={styles.image}>
        {(isNewlyAdded || isDiscounted) && (
          <div className={classNames("d-inline-flex gap-2 position-absolute left-0 top-0 z-2", styles.tags)}>
            {isDiscounted && <small className="bg-danger text-white px-2 py-1">-{discountPercent}%</small>}
            {isNewlyAdded && <small className="bg-primary text-white px-2 py-1">New</small>}
          </div>
        )}
        <Image src={`/images/product/${imageUrl}`} width={600} height={600} alt={name} />
      </Link>
      <div className={classNames(styles.info, "product-info")}>
        <span className={styles.category}>{category}</span>
        <h4 className="mb-1">
          <Link className={classNames(styles.title, "product-title")} href={`/product/${id}`}>
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
          <div className={classNames(styles.price, "price")}>
            <span className="selling-price">${price}</span>
            {isDiscounted && (
              <span className="original-price text-secondary text-decoration-line-through fw-normal fs-6 ms-1 ms-sm-2 opacity-75">
                ${originalPrice}
              </span>
            )}
          </div>
          <AddToCart className="btn-sm" product={product} quantity={1} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
