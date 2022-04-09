import React from "react";
import "./FilterBar.css";

export const FilterBar = () => {
  return (
    <div className="all-filter-conatiner flex-center">
      <ul className="filter-item-container flex-center">
        <li className="filter-item">All</li>
        <li className="filter-item">Resin Art</li>
        <li className="filter-item">Alcoholic Ink Art</li>
        <li className="filter-item">Mehendi</li>
        <li className="filter-item">Acrylic Fluid</li>
        <li className="filter-item">Resin Key-Chain</li>
        <li className="filter-item">Costers</li>
        <li className="filter-item">Arabic Mehendi</li>
      </ul>
    </div>
  );
};
