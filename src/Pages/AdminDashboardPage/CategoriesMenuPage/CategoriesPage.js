import React, { useState } from "react";
import Button from "../../../Components/Common/Button/Button";
import {
  useAddCategoryMutation,
  useGetCategoriesQuery,
} from "../../../Redux/categoryApi";
import "./categories.css";
import Modal from "../../../Components/Common/Modal/Modal";
import toast from "react-hot-toast";

const CategoriesPage = () => {
  const {
    data: categories,
    isLoading,
    error,
    refetch,
  } = useGetCategoriesQuery();
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [addCategory] = useAddCategoryMutation();

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleAddCategory = async () => {
    if (categoryName) {
      try {
        const response = await addCategory({ name: categoryName }).unwrap();
        // console.log("Category added successfully:", response);
        setCategoryName(""); // Clear the input field
        setShowModal(false); // Close the modal
        toast.success("Category added successfully!"); // Show success message

        refetch(); // Refresh the list of categories
      } catch (err) {
        console.error("Failed to add category:", err);
        toast.error("Failed to add category. Please try again."); // Display error message
      }
    }
  };

  return (
    <div>
      <div className="add-button">
        <p>Category List</p>
        <Button
          title={"Add Categories"}
          color={"red"}
          onClick={handleModalToggle}
        />
      </div>
      <div className="category-list">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching categories</p>}
        {categories?.category &&
          categories?.category?.map((category, index) => {
            return (
              <p key={index}>
                <span>{index + 1}. </span>
                {category?.name}
              </p>
            );
          })}
      </div>

      {showModal && (
        <Modal
          menu={"Category"}
          buttonTitle={"Add Category"}
          title={"Add New Category"}
          handleModalToggle={handleModalToggle}
          handleAddCategory={handleAddCategory}
          setCategoryName={setCategoryName}
        />
      )}
    </div>
  );
};

export default CategoriesPage;
