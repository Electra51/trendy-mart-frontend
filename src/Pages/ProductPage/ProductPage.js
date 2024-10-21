import React from "react";
import { useGetProductsQuery } from "../../Redux/productApi";
import Card from "../../Components/Common/Card/Card";
import "./user-product.css";
import HelmetComponent from "../../Components/Shared/HelmetComponent/HelmetComponent";
const ProductPage = () => {
  const { data: products, error, isLoading, refetch } = useGetProductsQuery();

  return (
    <div className="product-page-normal">
      <HelmetComponent title={"Product | TrendyMart"} />
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
