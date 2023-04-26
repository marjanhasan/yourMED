import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const ClientsReviewCard = ({ singleInfo }) => {
  const { image, name, rating, review } = singleInfo;
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className=" pb-2/3">
        <img className=" h-full w-full object-cover" src={image} alt={name} />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="flex items-center mt-2 mb-4">
          <StarIcon className="h-6 w-6 text-cyan-800 mr-2" />
          <span className="text-lg font-medium">{rating}</span>
        </div>
        <p className="text-base text-gray-500 md:text-lg mt-1">{review}</p>
      </div>
    </div>
  );
};

export default ClientsReviewCard;
