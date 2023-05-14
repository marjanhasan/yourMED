import React from "react";

const MedicineCart = ({ data }) => {
  return (
    <div className="w-full lg:w-1/2 md:flex items-center mx-auto mb-10 border-2 rounded-lg py-6">
      <div className="bg-gray-200 h-32 w-32 mx-8 rounded-lg ">
        <img className="h-full w-full rounded-lg" src={data.image} alt="" />
      </div>
      <div className="mt-3 grow">
        <h1 className="font-bold text-2xl">Medicine: {data.name}</h1>
        <h2 className="font-medium text-lg mt-1">Price: ${data.price}</h2>
      </div>
    </div>
  );
};

export default MedicineCart;
