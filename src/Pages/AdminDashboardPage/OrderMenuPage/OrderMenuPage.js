import React, { useState } from "react";
import { useGetAllOrdersQuery } from "../../../Redux/orderApi";
import Button from "../../../Components/Common/Button/Button";
import { calculateDiscountedPrice } from "../../../utils/calculateDiscountedPrice";
import Pagination from "../../../Components/Shared/Pagination/Pagination";
const OrderMenuPage = () => {
  const { data: orders, isLoading, error, refetch } = useGetAllOrdersQuery();
  console.log("order", orders);
  const [page, setPage] = useState(0);
  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p>Error fetching orders: {error.message}</p>;
  console.log("order", orders);
  return (
    <div>
      <div className="add-button">
        <p>My Order List</p>
      </div>
      <div className="category-list">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching categories</p>}
        {orders && orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.slice(5 * page, 5 * (page + 1)).map((order) => (
            <div key={order._id} className="order-item">
              <h4>Order ID: {order?._id}</h4>
              <p>Buyer ID: {order?._id}</p>
              <p>Buyer Name: {order.buyer.name}</p>
              <div className="order-products">
                {order.products.map((product, i) => {
                  console.log("p", product);
                  return (
                    <div key={product._id} className="product-item">
                      <p>
                        <span>{i + 1}. </span>
                        <span>Product Name: </span>
                        {product.name}
                      </p>
                      <p>
                        <span>Original Price: </span>
                        {product.price} BDT
                      </p>
                      <p>
                        <span>Discount: </span>
                        {product.discount} %
                      </p>
                      <p>
                        <span>Final Price: </span>
                        {calculateDiscountedPrice(
                          product?.price,
                          product?.discount
                        ).toFixed(2)}{" "}
                        BDT
                      </p>
                      <Button title={order.status} color={"#9FBADE"} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
      <Pagination
        length={Array.isArray(orders) ? orders.length : 0}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default OrderMenuPage;
