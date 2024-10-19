import React from "react";
import Button from "../../../Components/Common/Button/Button";
import { useGetCategoriesQuery } from "../../../Redux/categoryApi";
import "./categories.css";

const CategoriesPage = () => {
  const { data: categories, isLoading, error } = useGetCategoriesQuery();
  console.log("data", categories?.category);
  return (
    <div>
      <div className="add-button">
        <p>Category List</p>
        <Button title={"Add Categories"} color={"red"} />{" "}
      </div>
      <div className="category-list">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching categories</p>}
        {categories?.category &&
          categories?.category?.map((category, index) => {
            console.log("cat", category);
            return (
              <p key={index}>
                <span>{index + 1}. </span>
                {category?.name}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default CategoriesPage;
