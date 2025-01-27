import { ApiUrl } from "@/utils/constant";
import styles from "./page.module.scss";
import { Product } from "@/types/product";
import { notFound } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import ProductActions from "@/components/ProductActions";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  if (!id) {
    return notFound();
  }
  const resp = await fetch(`${ApiUrl.PRODUCT}/${id}`);
  if (!resp.ok) {
    return notFound();
  }
  const product = (await resp.json()) as Product;
  const { name, description, price, category, imageUrl, originalPrice, isNewlyAdded } = product;

  const isDiscounted = price < originalPrice;
  return (
    <div className={classNames(styles.root, "pt-3 pt-md-4")}>
      <div className="container">
        <nav className="breadcrumb-nav bg-white px-2 px-sm-3 px-md-4 py-3 mb-3 mb-md-4" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 flex-nowrap">
            <li className="breadcrumb-item text-nowrap overflow-hidden">
              <Link href="/">
                <i className="bi bi-house-door-fill"></i> Home
              </Link>
            </li>
            <li className="breadcrumb-item text-nowrap overflow-hidden">
              <a href="#">{category}</a>
            </li>
            <li className="breadcrumb-item active text-nowrap overflow-hidden" aria-current="page">
              {name}
            </li>
          </ol>
        </nav>

        <div className={styles.topArea}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="product-images">
                <main id="gallery">
                  <div className="main-img position-relative">
                    {isNewlyAdded && (
                      <small
                        className="bg-primary text-white px-2 py-1 position-absolute left-0 top-0 z-2"
                        style={{ borderRadius: "2px" }}
                      >
                        New
                      </small>
                    )}
                    <Image src={`/images/product/${imageUrl}`} width={600} height={600} alt={name} priority={true} />
                  </div>
                </main>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="product-info">
                <h2 className="title mt-4 mt-md-0">{name}</h2>

                <small
                  className={classNames(
                    "d-inline-block mb-3 px-2 py-1 text-secondary opacity-75 text-uppercase",
                    styles.category
                  )}
                >
                  {category}
                </small>

                <h3 className="price">
                  <span>${price}</span>
                  {isDiscounted && (
                    <span
                      className="d-inline-block text-danger text-decoration-line-through fw-normal fs-5 ms-2 opacity-75"
                      style={{ transform: "translateY(-2px)" }}
                    >
                      ${originalPrice}
                    </span>
                  )}
                </h3>

                <p className="info-text mb-5">{description}</p>

                <ProductActions product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
