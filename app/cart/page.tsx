"use client";

import styles from "./page.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Empty from "@/components/Empty";
import { removeFromCart } from "@/redux/cartSlice";
import CartItemComponent from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";

const CartPage = () => {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: string) => {
    if (confirm("Are you sure you want to remove this item from cart")) {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <div className={classNames(styles.root, "py-3 py-md-4 py-lg-5")}>
      <div className="container">
        {items.length > 0 ? (
          <div className="row">
            <div className="col-12 col-md-7 col-lg-8 mb-3 mb-md-4">
              <div className="box">
                <div className={classNames(styles.cartListTitle, "px-2 px-md-3 py-2 py-md-3")}>
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-5">
                      <p>Product Name</p>
                    </div>
                    <div className="col-1 col-lg-2">
                      <p>Qty</p>
                    </div>
                    <div className="col-2">
                      <p>Price</p>
                    </div>
                    <div className="col-2 col-lg-1"></div>
                  </div>
                </div>
                {items.map((item) => (
                  <CartItemComponent key={item.id} item={item} remove={() => handleRemoveItem(item.id)} />
                ))}
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4 mb-3 mb-md-4">
              <CartSummary />
            </div>
          </div>
        ) : (
          <Empty>
            <span className="fs-5">Empty Cart</span>
            <Link href="/" className="text-decoration-none btn btn-sm btn-primary mt-2">
              Continue Shopping
            </Link>
          </Empty>
        )}
      </div>
    </div>
  );
};

export default CartPage;
