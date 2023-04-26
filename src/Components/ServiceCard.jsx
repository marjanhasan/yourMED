import React from "react";

const ServiceCard = ({ singleInfo }) => {
  return (
    <>
      <div className="bg-cyan-50 hover:bg-cyan-200 border-2 border-cyan-600 transition duration-200 rounded-md h-60 flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 bg-cyan-100 flex items-center justify-center rounded-full">
            <img
              src={singleInfo.logo}
              alt=""
              className="object-cover h-10 w-10"
            />
          </div>
          <h2 className="font-bold text-xl mt-5">{singleInfo.services}+</h2>
          <p className="text-base text-gray-500 md:text-lg mt-1">
            {singleInfo.service}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
