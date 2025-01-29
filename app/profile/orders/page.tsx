"use client";

import styles from "./page.module.scss";
import classNames from "classnames";
import { useMyOrders } from "@/hooks/use-orders";
import Empty from "@/components/Empty";

const OrdersPage = () => {
  const { data: orders } = useMyOrders();

  return (
    <div className={classNames(styles.root, "py-3 py-md-4 py-lg-5")}>
      <div className="container">
        {orders.length > 0 ? (
          <div className="row">
            <div className="col-12">
              <div className="box p-4">
                <pre>{JSON.stringify(orders, null, 2)}</pre>
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
