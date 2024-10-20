import React from "react";
import "./card.css";
import { BsCart2 } from "react-icons/bs";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/cartSlice"; // Import addToCart action

const Card = ({ product }) => {
  const dispatch = useDispatch(); // Get the dispatch function
  console.log(product);
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
        quantity: 1, // Keep this if you want to store it but won't be used now
      })
    );
  };

  return (
    <div className="card">
      <div className="card-img">
        <img
          src={`http://localhost:8080/${product.photo}`} // Directly reference the image using the path stored in product.photo
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
            <div className="cart-icon" onClick={handleAddToCart}>
              <BsCart2 />
            </div>
            <Button title={"View Details"} color={"#5A5CDA"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
