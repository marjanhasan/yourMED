import React from "react";
import { addToDb } from "../utilities/fakedb";

const Medicines = ({ medicine }) => {
  const { image, name, price, companyName, id } = medicine;
  const handleAddToCart = (id) => {
    addToDb(id);
  };
  return (
    <div>
      <div className="w-full lg:w-1/2 md:flex items-center mx-auto mb-10 border-2 rounded-lg py-6">
        <div className="bg-gray-200 h-32 w-32 mx-8 rounded-lg ">
          <img className="h-full w-full rounded-lg" src={image} alt="" />
        </div>
        <div className="mt-3 grow">
          <h1 className="font-bold text-3xl">{name}</h1>
          <h2 className="font-medium text-lg mt-1">
            Manufacturer: {companyName}
          </h2>
          <h2 className="font-medium text-lg mt-1">Price: ${price}</h2>
        </div>
        <button
          onClick={() => handleAddToCart(id)}
          className=" md:ml-6 md:mx-6 p-4 btn rounded-full"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Medicines;
