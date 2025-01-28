"use client";

import styles from "./page.module.scss";
import classNames from "classnames";
import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import CheckoutBox from "@/components/CheckoutBox";

const CartPage = () => {
  const { items } = useAppSelector((state) => state.cart);

  if (items.length === 0) {
    redirect("/");
  }

  return (
    <div className={classNames(styles.root, "py-3 py-md-4 py-lg-5")}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-8 mb-3 mb-md-4">
            <CheckoutBox title="Personal Details" className="mb-4">
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" placeholder="John Doe" required />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="john@example.com" required />
                </div>
              </div>
            </CheckoutBox>

            <CheckoutBox title="Shipping Address" className="mb-4">
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="address1" className="form-label">
                    Address Line 1
                  </label>
                  <input type="text" className="form-control" id="address1" required />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="address2" className="form-label">
                    Address Line 2
                  </label>
                  <input type="text" className="form-control" id="address2" />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="city" required />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="province" className="form-label">
                    Province
                  </label>
                  <input type="text" className="form-control" id="province" required />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <input type="text" className="form-control" id="country" value="Thailand" required readOnly />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="postalCode" className="form-label">
                    Postal Code
                  </label>
                  <input type="text" className="form-control" id="postalCode" required />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="form-check mt-1">
                    <input type="checkbox" className="form-check-input" id="saveAddress" />
                    <label className="form-check-label" htmlFor="saveAddress">
                      Save address
                    </label>
                  </div>
                </div>
              </div>
            </CheckoutBox>

            <CheckoutBox title="Payment Methods" className="mb-2">
              <div className="row align-items-end">
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    required
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="cardholderName" className="form-label">
                    Cardholder Name
                  </label>
                  <input type="text" className="form-control" id="cardholderName" placeholder="John Doe" />
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <label htmlFor="expireDate" className="form-label">
                    Expire Date
                  </label>
                  <input type="text" className="form-control" id="expireDate" placeholder="MM/YY" required />
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <label htmlFor="cvc" className="form-label">
                    CVC/CVV
                  </label>
                  <input type="text" className="form-control" id="cvc" placeholder="***" required />
                </div>
                <div className="col-12 col-md-6" style={{ marginBottom: "1.25rem" }}>
                  <div className="form-check mt-1">
                    <input type="checkbox" className="form-check-input" id="saveCard" />
                    <label className="form-check-label" htmlFor="saveCard">
                      Save card
                    </label>
                  </div>
                </div>
              </div>
            </CheckoutBox>
          </div>
          <div className="col-12 col-md-5 col-lg-4 mb-3 mb-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
