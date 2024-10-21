import React, { useState } from "react";
import "./card.css";
import { BsCart2, BsFillCartFill } from "react-icons/bs";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  console.log(product);
  const cartItems = useSelector((state) => state.cart.items);
  const [isAdded, setIsAdded] = useState(
    cartItems.some((item) => item.id === product._id)
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        description: product.description,
        shipping_charge: product.shipping_charge,
        discount: product?.discount,
        countInStock: product?.countInStock,
        photo: product?.photo,
        quantity: 1,
      })
    );
  };

  return (
    <div className="card">
      <div className="card-img">
        <img
          src={`http://localhost:8080/${product.photo}`}
          alt={product.name}
        />
      </div>
      <div className="card-content">
        <h4>
          {product.name.length > 12
            ? `${product.name.slice(0, 12)}...`
            : product.name}
        </h4>
        <p>
          <span>Price: </span>
          {product.price} BDT
        </p>
        <p>
          {product.description.length > 60
            ? `${product.description.slice(0, 60)}...`
            : product.description}
        </p>
        <div className="card-bottom">
          <div className="card-button-bottom">
            {/* <div className="cart-icon" onClick={handleAddToCart}>
              <BsCart2 />
            </div> */}
            <div
              className={`cart-icon ${isAdded ? "added" : ""}`}
              onClick={handleAddToCart}>
              {isAdded ? (
                <BsFillCartFill className="added-cart" />
              ) : (
                <BsCart2 />
              )}
            </div>
            <Button title={"View Details"} color={"#5A5CDA"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
