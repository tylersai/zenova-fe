import { ApiUrl } from "@/utils/constant";
import styles from "./page.module.scss";
import { Product } from "@/types/product";
import { notFound } from "next/navigation";
import ProductList from "@/components/ProductList";

const ProductPage = async ({ searchParams }: { searchParams: Promise<Record<string, string>> }) => {
  const { q } = await searchParams;
  if (!q?.trim()) {
    return notFound();
  }
  const resp = await fetch(`${ApiUrl.SEARCH_PRODUCT}?q=${decodeURIComponent(q.trim())}`);
  if (!resp.ok) {
    throw new Error(await resp.json());
  }
  const products = (await resp.json()) as Product[];

  return (
    <div className={styles.root}>
      <section className="search-products section pt-4 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="mb-1">
                Showing search results for <strong className="fw-medium">&quot;{q.trim()}&quot;</strong>
              </p>
            </div>
          </div>
          <ProductList products={products} />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
