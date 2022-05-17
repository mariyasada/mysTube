import React from "react";
import { useNavigate } from "react-router-dom";
import { reducerTypes } from "../../Context/Reducer/reducertype";
import { useVideos } from "../../Context/video-context";
import "../HomepageCard/homepagecard.css";

export const HomePageCard = ({ category, index }) => {
  const { state, dispatch } = useVideos();
  const { image, categoryName, subDescription } = category;
  const navigate = useNavigate();
  return (
    <div className="Category-card-container flex-center">
      <div className="category-image-container flex-center">
        <img
          className="category-image"
          src={image}
          alt={category.categoryName}
        />
      </div>
      <div className="category-description-container">
        <h2 className="category-title"> {categoryName}</h2>
        <p className="category-description">{subDescription}.</p>
        <span>
          <button
            className="btn btn-primary-first"
            onClick={() => {
              dispatch({
                type: reducerTypes.SET_CATEGORY,
                payload: categoryName,
              }),
                navigate("/videopage");
            }}
          >
            Watch Now
          </button>
        </span>
      </div>
    </div>
  );
};
