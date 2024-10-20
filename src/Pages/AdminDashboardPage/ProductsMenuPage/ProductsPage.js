import React, { useState } from "react";
import Button from "../../../Components/Common/Button/Button";
import Modal from "../../../Components/Common/Modal/Modal";
import toast from "react-hot-toast";
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "../../../Redux/productApi";
import { useGetCategoriesQuery } from "../../../Redux/categoryApi";
import "./product.css";
import Pagination from "../../../Components/Shared/Pagination/Pagination";
const ProductsPage = () => {
  const { data: products, error, isLoading, refetch } = useGetProductsQuery();
  const {
    data: categories,
    isLoading: loadingCategories,
    error: errorCategories,
  } = useGetCategoriesQuery(); // Fetch categories
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [category, setCategory] = useState(""); // For the category ID
  const [photo, setPhoto] = useState(null);

  console.log("categories", categories?.category);
  const [createProduct] = useCreateProductMutation();

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleAddProduct = async () => {
    const formData = new FormData();
    console.log("Product Name:", productName); // Log productName
    formData.append("name", productName);

    // formData.append("name", productName);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("shipping_charge", shippingCharge);
    formData.append("description", description);
    formData.append("countInStock", countInStock);
    formData.append("category", category); // Pass the selected category ID
    if (photo) {
      formData.append("photo", photo);
    }

    try {
      await createProduct(formData).unwrap();
      toast.success("Product added successfully!"); // Show success message
      refetch();
      handleModalToggle(); // Close the modal
    } catch (err) {
      console.error("Failed to add product:", err);
      toast.error("Failed to add product. Please try again."); // Display error message
    }
  };
  const [page, setPage] = useState(0);
  // Helper function to get category name by ID
  const getCategoryName = (categoryId) => {
    const categoryObj = categories?.category?.find(
      (cat) => cat._id === categoryId
    );
    return categoryObj ? categoryObj.name : "Unknown Category";
  };

  return (
    <div>
      <div className="add-button">
        <p>Product List</p>
        <Button
          title={"Add Product"}
          color={"red"}
          onClick={handleModalToggle}
        />
      </div>
      <div className="category-list">
        {isLoading && <p>Loading products...</p>}
        {error && <p>Error fetching products</p>}
        {products?.products &&
          products?.products
            ?.slice(5 * page, 5 * (page + 1))
            .map((product, index) => (
              <div key={index} className="admin-product-card">
                <div className="admin-product-content">
                  <span>{index + 1}. </span>
                  <div className="admin-product-img">
                    <img
                      src={`http://localhost:8080/${product.photo}`} // Directly reference the image using the path stored in product.photo
                      alt={product.name}
                    />
                  </div>
                  <div>
                    <p>{product?.name}</p>
                    <p>
                      <span>Total Price: </span>
                      {product?.price}
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    <span>Total Stock: </span>
                    {product?.countInStock}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Shipping Charge : </span>
                    {product?.shipping_charge}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Discount: </span>
                    {product?.discount}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Category: </span>
                    {getCategoryName(product?.category)}{" "}
                    {/* Use the helper function */}
                  </p>
                </div>
              </div>
            ))}
        <Pagination
          length={
            Array.isArray(products?.products) ? products.products.length : 0
          }
          page={page}
          setPage={setPage}
        />
      </div>

      {showModal && (
        <Modal
          menu={"Product"}
          buttonTitle={"Add Product"}
          title={"Add New Product"}
          handleModalToggle={handleModalToggle}
          handleAddCategory={handleAddProduct}
          setCategoryName={setProductName}
          setProductName={setProductName}
          productName={productName}
          setPhoto={setPhoto}
          setPrice={setPrice}
          setDiscount={setDiscount}
          setShippingCharge={setShippingCharge}
          setDescription={setDescription}
          setCountInStock={setCountInStock}
          category={category}
          setCategory={setCategory}
          categories={categories} // Pass categories to the modal if needed
        />
      )}
    </div>
  );
};

export default ProductsPage;
