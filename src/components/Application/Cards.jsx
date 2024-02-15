import React from "react";
import cardIcon from "../../assets/images/cardIcon.svg";

export const Cards = ({ imageUrl, title, description, buttonText }) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg">
      {" "}
      {/* Modified class to max-w-lg */}
      <img className="w-full" src={imageUrl} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Cards;
