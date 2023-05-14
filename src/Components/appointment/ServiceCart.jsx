import React from "react";

const ServiceCart = ({ data }) => {
  return (
    <div className="w-full lg:w-1/2 md:flex items-center mx-auto mb-10 border-2 rounded-lg py-6">
      <div className="bg-gray-200 h-32 w-32 mx-8 rounded-lg ">
        <img className="h-full w-full rounded-lg" src={data.image} alt="" />
      </div>
      <div className="mt-3 grow">
        <h1 className="font-bold text-2xl">Service: {data.name}</h1>
      </div>
    </div>
  );
};

export default ServiceCart;
