import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useCategory } from "../../Context/category-context";
import { HomePageCard } from "../HomepageCard/Homepagecard";

export const Categories = () => {
  const { categories, setCategories } = useCategory();

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <HomePageCard category={category} key={category._id} index={index} />
        );
      })}
    </div>
  );
};
