import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import Empty from "./Empty";

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length > 0) {
    return (
      <div className="row product-list">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-6">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  } else {
    return <Empty>No Products</Empty>;
  }
};

export default ProductList;
