import React from "react";
import { useCategory } from "../../Context";
import "./FilterBar.css";

export const FilterBar = () => {
  const { categories, setCategories } = useCategory();
  return (
    <div className="all-filter-conatiner flex-center">
      <ul className="filter-item-container flex-center">
        <li className="filter-item">All</li>

        {categories.map((category, index) => {
          return (
            <li className="filter-item" key={index}>
              {category.categoryName}
            </li>
          );
        })}
        {/* // <li className="filter-item">Resin Art</li>
        // <li className="filter-item">Alcoholic Ink Art</li>
        // <li className="filter-item">Mehendi</li>
        // <li className="filter-item">Acrylic Fluid</li>
        // <li className="filter-item">Resin Key-Chain</li>
        // <li className="filter-item">Costers</li>
        // <li className="filter-item">Arabic Mehendi</li> */}
      </ul>
    </div>
  );
};
