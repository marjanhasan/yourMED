import React from "react";
import { addToDb } from "../utilities/fakedb";

const Beds = ({ bed }) => {
  const { image, pricePerHour, pricePerDay, type, id } = bed;
  const handleAddToCart = (id) => {
    addToDb(id);
  };
  return (
    <div>
      <div className="w-full lg:w-1/2 md:flex items-center mx-auto mb-10 border-2 rounded-lg py-6">
        <div className="bg-gray-200 h-32 w-32 mx-8 rounded-lg overflow-hidden">
          <img className="h-full w-full object-cover" src={image} alt="" />
        </div>
        <div className="mt-3 grow">
          <h1 className="font-bold text-3xl">{type}</h1>
          <h2 className="font-medium text-lg mt-1">
            Price/Hour: ${pricePerHour}
          </h2>
          <h2 className="font-medium text-lg mt-1">
            Price/Day: ${pricePerDay}
          </h2>
        </div>
        <button
          onClick={() => handleAddToCart(id)}
          className="shrink-0 md:ml-6 md:mx-6 p-4 btn rounded-full"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Beds;
