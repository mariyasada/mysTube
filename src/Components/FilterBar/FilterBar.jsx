import React from "react";
import { useCategory, useVideos } from "../../Context";
import "./FilterBar.css";

export const FilterBar = () => {
  const { categories, setCategories } = useCategory();
  const { state, dispatch } = useVideos();
  return (
    <div className="all-filter-conatiner flex-center">
      <ul className="filter-item-container flex-center">
        <li
          className={`filter-item selected ${
            state.currentCategory === "All" && "filter-link-active"
          } `}
          onClick={() =>
            dispatch({ type: "SET_CURRENT_CATEGORY", payload: "All" })
          }
        >
          All
        </li>

        {categories.map((category, index) => {
          return (
            <li
              className={`filter-item selected ${
                state.currentCategory === category.categoryName &&
                "filter-link-active"
              } `}
              key={index}
              onClick={() =>
                dispatch({
                  type: "SET_CURRENT_CATEGORY",
                  payload: category.categoryName,
                })
              }
            >
              {category.categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
