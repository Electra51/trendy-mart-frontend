import React from "react";
import "./modal.css";

const Modal = ({
  handleModalToggle,
  title,
  buttonTitle,
  menu,
  handleAddCategory,
  productName,
  setPhoto,
  price,
  setPrice,
  discount,
  setDiscount,
  shippingCharge,
  setShippingCharge,
  description,
  setDescription,
  countInStock,
  setCountInStock,
  category,
  setCategory,
  categories,
  setProductName,
  setCategoryName,
}) => {
  console.log("categories", categories?.category);
  console.log("productName", productName);
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        {menu === "Category" ? (
          <input
            type="text"
            placeholder="Category Name"
            onChange={(e) => setCategoryName(e.target.value)}
            aria-label="Category Name"
          />
        ) : (
          <div>
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              aria-label="Product Name"
            />
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              aria-label="Price"
            />
            <input
              type="text"
              placeholder="Discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              aria-label="Discount"
            />
            <input
              type="text"
              placeholder="Shipping Charge"
              value={shippingCharge}
              onChange={(e) => setShippingCharge(e.target.value)}
              aria-label="Shipping Charge"
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              aria-label="Description"
            />
            <input
              type="text"
              placeholder="Count in Stock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              aria-label="Count in Stock"
            />
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={categories?.category}
              aria-label="Select Category">
              <option value="">Select Category</option>
              {categories?.category?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              aria-label="Upload Product Photo"
            />
          </div>
        )}

        <div className="modal-buttons">
          <button onClick={handleModalToggle}>Cancel</button>
          <button onClick={handleAddCategory}>{buttonTitle}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
