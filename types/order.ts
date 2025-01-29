import { CartItem } from "./cart";

export type OrderCartItem = Omit<CartItem, "description" | "isNewlyAdded" | "createdAt" | "updatedAt">;

export type Address = {
  line1: string;
  line2?: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
};

export type CreateOrderPayload = {
  cartItems: OrderCartItem[];
  subTotal: number;
  shippingFee: number;
  discount: number;
  totalPayment: number;
  userId?: string;
  name: string;
  email: string;
  address: Address;
  paymentMethod?: "card" | "cod" | "banking";
  status: "unpaid" | "paid";
};
