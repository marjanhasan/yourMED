import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const OurServiceCard = ({ singleInfo }) => {
  return (
    <div className="bg-cyan-50 border-2 border-cyan-600 transition duration-200 rounded-md  flex flex-col justify-center py-6">
      <div className="py-6 px-6">
        <div className="h-16 w-16 bg-cyan-100 flex items-center justify-center rounded-md">
          <img
            src={singleInfo.logo}
            alt=""
            className="object-cover h-10 w-10"
          />
        </div>
        <h2 className="font-bold text-xl mt-5">{singleInfo.title}</h2>
        <p className="text-base text-gray-500 md:text-lg mt-1">
          {singleInfo.description}
        </p>
        <Link to="about">
          <button className="btn-line mt-3">
            Learn More{" "}
            <ArrowRightCircleIcon className="h-6 w-6 text-cyan-800 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurServiceCard;
