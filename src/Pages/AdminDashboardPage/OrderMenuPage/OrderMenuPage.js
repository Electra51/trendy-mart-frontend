import React from "react";
import { useGetAllOrdersQuery } from "../../../Redux/orderApi";

const OrderMenuPage = () => {
  const { data: orders, isLoading, error, refetch } = useGetAllOrdersQuery();
  console.log("order", orders);
  return (
    <div>
      <div className="add-button">
        <p>Order List</p>
      </div>
      <div className="order-list">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching orders</p>}
        {orders?.length > 0 ? (
          orders.map((order, index) => (
            <div key={index} className="order-item">
              <p>
                <strong>Order #{index + 1}</strong>
              </p>
              <p>Order ID: {order._id}</p>
              <p>Buyer ID: {order.buyer}</p> {/* Update this line */}
              {/* You need to fetch and display the total amount if available */}
              <p>Status: {order.status}</p>
              {/* You can add more details about the order here */}
            </div>
          ))
        ) : (
          <p>No orders available</p>
        )}
      </div>
    </div>
  );
};

export default OrderMenuPage;
