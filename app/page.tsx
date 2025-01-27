import { ApiUrl } from "@/utils/constant";
import styles from "./page.module.scss";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const resp = await fetch(ApiUrl.PRODUCT);
  const products = (await resp.json()) as Product[];

  return (
    <div className={styles.root}>
      <section className="trending-product section py-5" style={{ backgroundColor: "#f9f9f9" }}>
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
          {products && products.length > 0 && (
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-6 col-12">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
