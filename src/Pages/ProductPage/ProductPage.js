import React from "react";
import { useGetProductsQuery } from "../../Redux/productApi";
import Card from "../../Components/Common/Card/Card";
import "./user-product.css";
const ProductPage = () => {
  const { data: products, error, isLoading, refetch } = useGetProductsQuery();
  console.log("p", products?.products);
  return (
    <div className="product-page-normal">
      <div className="container">
        <div className="products-container-user">
          {products?.products?.map((product, i) => {
            return <Card product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
