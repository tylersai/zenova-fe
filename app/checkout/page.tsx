"use client";

import styles from "./page.module.scss";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import CheckoutBox from "@/components/CheckoutBox";
import CheckoutSummary from "@/components/CheckoutSummary";
import { useCallback, useState } from "react";
import { CreateOrderPayload } from "@/types/order";
import { ApiUrl } from "@/utils/constant";
import { clearCart } from "@/redux/cartSlice";
import { getFormValue } from "@/utils/helper";
import { useProfile } from "@/hooks/use-profile";

const CartPage = () => {
  const { data: profile } = useProfile();
  const { items, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  if (items.length === 0) {
    redirect("/");
  }

  const prepareOrderPayload = useCallback((): CreateOrderPayload => {
    const payload: CreateOrderPayload = {
      cartItems: [],
      subTotal: 0,
      shippingFee: 0,
      discount: 0,
      totalPayment: 0,
      name: "",
      email: "",
      address: {
        line1: "",
        line2: undefined,
        city: "",
        province: "",
        country: "",
        postalCode: "",
      },
      status: "unpaid",
    };

    // Cart
    payload.cartItems = items.map((el) => ({
      id: el.id,
      category: el.category,
      imageUrl: el.imageUrl,
      name: el.name,
      originalPrice: el.originalPrice,
      price: el.price,
      quantity: el.quantity,
      rating: el.rating,
      stock: el.stock,
    }));
    const subTotal = items.reduce((cum, cur) => (cum += cur.originalPrice * cur.quantity), 0);
    const discount = subTotal - totalPrice;
    payload.subTotal = subTotal;
    payload.shippingFee = 0;
    payload.discount = discount;
    payload.totalPayment = totalPrice;

    // Personal
    payload.name = getFormValue("name");
    payload.email = getFormValue("email");

    // Address
    payload.address = {
      line1: getFormValue("address1"),
      line2: getFormValue("address2"),
      city: getFormValue("city"),
      province: getFormValue("province"),
      postalCode: getFormValue("postalCode"),
      country: getFormValue("country"),
    };

    // Payment
    payload.paymentMethod = "card";
    payload.status = "paid";

    return payload;
  }, [items, totalPrice]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const processPlaceOrder = useCallback(async (payload: CreateOrderPayload): Promise<any> => {
    const resp = await fetch(`${ApiUrl.ORDER}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!resp.ok) {
      console.error(await resp.json());
      return false;
    }
    return await resp.json();
  }, []);

  const handlePlaceOrder = async () => {
    setIsLoading(true);
    const payload = prepareOrderPayload();
    const createdOrder = await processPlaceOrder(payload);
    setIsLoading(false);
    if (createdOrder) {
      console.log(createdOrder);
      alert("Successfully placed order");
      dispatch(clearCart());
      redirect("/");
    } else {
      alert("Fail to place order. Please try again.");
    }
  };

  return (
    <div className={classNames(styles.root, "py-3 py-md-4 py-lg-5")}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-8 mb-3 mb-md-4">
            <CheckoutBox title="Personal Details" className="mb-4">
              {profile && (
                <p className="text-secondary">
                  You&apos;re logged in with <strong className="fw-medium">{profile.email}</strong>
                </p>
              )}
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                    required
                    defaultValue={profile?.name || ""}
                    disabled={Boolean(profile)}
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="john@example.com"
                    required
                    defaultValue={profile?.email || ""}
                    disabled={Boolean(profile)}
                  />
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
                  <input type="password" className="form-control" id="cvc" placeholder="***" required min={3} max={3} />
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
          <div className="col-12 col-md-5 col-lg-4 mb-3 mb-md-4">
            <CheckoutSummary handlePlaceOrder={handlePlaceOrder} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
