import React from "react";
import { useGetUserOrdersQuery } from "../../../Redux/orderApi";

const UserOrderPage = () => {
  const { data: orders, error, isLoading } = useGetUserOrdersQuery();

  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p>Error fetching orders: {error.message}</p>;

  return (
    <div className="user-order-page">
      <h2>My Orders</h2>
      {orders && orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="order-item">
            <h4>Order ID: {order._id}</h4>
            <p>Buyer: {order.buyer.name}</p>
            <div className="order-products">
              {order.products.map((product) => (
                <div key={product._id} className="product-item">
                  <p>{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserOrderPage;
