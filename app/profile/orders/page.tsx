"use client";

import styles from "./page.module.scss";
import classNames from "classnames";
import { useMyOrders } from "@/hooks/use-orders";
import Empty from "@/components/Empty";
import { formatMoney } from "@/utils/helper";
import dayjs from "dayjs";

const OrdersPage = () => {
  const { data: orders } = useMyOrders();

  return (
    <div className={classNames(styles.root, "py-3 py-md-4 py-lg-5")}>
      <div className="container">
        {orders.length > 0 ? (
          <div className="row">
            <div className="col-12">
              <div className="box p-4">
                <h4 className="text-primary mb-4 pb-2">
                  <i className="bi bi-clock"></i> Your Order History
                </h4>
                <div className="overflow-x-auto pb-3">
                  <table className="table w-100">
                    <thead>
                      <tr>
                        <th scope="col" className="fw-medium bg-light">
                          Order Id
                        </th>
                        <th scope="col" className="fw-medium bg-light">
                          Shipping Address
                        </th>
                        <th scope="col" className="fw-medium bg-light">
                          Placed On
                        </th>
                        <th scope="col" className="fw-medium bg-light">
                          Status
                        </th>
                        <th scope="col" className="fw-medium bg-light">
                          Paid By
                        </th>
                        <th scope="col" className="fw-medium bg-light text-end">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((o) => (
                        <tr key={o.id}>
                          <td>{o.id}</td>
                          <td>{[o.address.line1, o.address.city, o.address.postalCode].join(", ")}</td>
                          <td>{dayjs(o.createdAt).format("DD/MM/YYYY")}</td>
                          <td className="text-success fw-medium text-uppercase">{o.status}</td>
                          <td>{o.paymentMethod}</td>
                          <td className="text-end fw-medium">${formatMoney(o.totalPayment)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Empty>Empty order history</Empty>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
