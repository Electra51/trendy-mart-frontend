import React from "react";
import "./availableProduct.css";
import { useGetProductsQuery } from "../../../Redux/productApi";
import Card from "../../Common/Card/Card";
const AvailableProduct = () => {
  const { data: products, error, isLoading, refetch } = useGetProductsQuery();

  return (
    <div className="container">
      <h1 className="section-head">Our Available Product</h1>

      <div className="products-container">
        {products?.products?.map((product, i) => {
          return <Card product={product} />;
        })}
      </div>
    </div>
  );
};

export default AvailableProduct;
