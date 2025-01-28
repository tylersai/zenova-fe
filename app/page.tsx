import { ApiUrl } from "@/utils/constant";
import styles from "./page.module.scss";
import { Product } from "@/types/product";
import ProductList from "@/components/ProductList";

export default async function Home() {
  const resp = await fetch(ApiUrl.PRODUCT);
  const products = (await resp.json()) as Product[];

  return (
    <div className={styles.root}>
      <section className="trending-product section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Products</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <ProductList products={products} />
        </div>
      </section>
    </div>
  );
}
