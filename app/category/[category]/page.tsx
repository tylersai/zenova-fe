import { ApiUrl } from "@/utils/constant";
import styles from "./page.module.scss";
import { Product } from "@/types/product";
import { notFound } from "next/navigation";
import ProductList from "@/components/ProductList";

const ProductPage = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  if (!category) {
    return notFound();
  }
  const resp = await fetch(`${ApiUrl.CATEGORY}/${category}/product`);
  if (!resp.ok) {
    return notFound();
  }
  const products = (await resp.json()) as Product[];

  return (
    <div className={styles.root}>
      <section className="category-product section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2 className="text-transform-capitalize">{category}</h2>
                <p>
                  Sapiente distinctio corrupti iusto dolorem, fugiat modi officia aspernatur veniam, placeat libero
                  cupiditate voluptatibus ipsa reiciendis esse molestias iure.
                </p>
              </div>
            </div>
          </div>
          <ProductList products={products} />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
