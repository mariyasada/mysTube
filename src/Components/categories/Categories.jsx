import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { HomePageCard } from "../HomepageCard/Homepagecard";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data.categories);
      } catch {
        console.error("something went wrong");
      }
    })();
  });
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
