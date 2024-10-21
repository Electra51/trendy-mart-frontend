import React from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../Redux/cartSlice";
import { TbCurrencyTaka } from "react-icons/tb";
import { usePlaceOrderMutation } from "../../Redux/orderApi";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [placeOrder, { isLoading, isError, isSuccess }] =
    usePlaceOrderMutation();

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const handlePlaceOrder = async () => {
    const userAuth = JSON.parse(localStorage.getItem("user"));

    if (!userAuth) {
      toast.error("Please Login First, then place order");
      return;
    }

    const orderData = {
      cart: cart.map((item) => item.id),
    };

    try {
      await placeOrder(orderData).unwrap();
      console.log("Order placed successfully!");
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShippingChargeForsub = () => {
    return cart.reduce((total, item) => total + item.shipping_charge, 0);
  };

  const calculateTotalPayable = () => {
    const subtotal = calculateSubtotal();
    const shippingCharge = calculateShippingChargeForsub();
    return subtotal + shippingCharge;
  };
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2>My Cart Items</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <RxCross2
                className="remove-icon"
                onClick={() => handleRemoveItem(item.id)}
              />
              <div className="cart-left-content">
                <div className="cart-img">
                  <img
                    src={`http://localhost:8080/${item.photo}`}
                    alt={item.name}
                    className="cart-item-image"
                  />
                </div>
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: {item.price} BDT</p>
                  <p>Shipping: {item.shipping_charge} BDT</p>
                </div>
              </div>
              <div className="cart-quantity">
                <button onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </button>
                <p>{item.quantity}</p>
                <button onClick={() => handleIncreaseQuantity(item.id)}>
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-right">
        <h2>Order Summary</h2>
        <div
          className="order-summary"
          style={{ boxShadow: "0px 0px 6px #C9C9C919" }}>
          <div className="row-item">
            <p>Subtotal ({cart.length} items)</p>
            <p className="">
              <TbCurrencyTaka /> {calculateSubtotal()}
            </p>
          </div>
          <div className="row-item">
            <p>Shipping Charge</p>
            <p className="">
              <TbCurrencyTaka /> {calculateShippingChargeForsub()}
            </p>
          </div>
          <div className="row-item">
            <p>Wallet Debit</p>
            <p className="">
              <TbCurrencyTaka /> 0
            </p>
          </div>
          <div className="row-item">
            <p>Total Payable</p>
            <p className="">
              <TbCurrencyTaka /> {calculateTotalPayable()}
            </p>
          </div>
          <button
            className="order-button"
            onClick={handlePlaceOrder}
            disabled={isLoading}>
            Order Now
          </button>
        </div>
        {isSuccess && <p>Order placed successfully!</p>}
        {isError && (
          <p className="err">Please, Login first then place order.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
