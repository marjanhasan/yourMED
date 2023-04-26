import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DoctorsCard = ({ singleInfo }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-cyan-50  border-2 border-cyan-600 transition duration-200 rounded-md py-6 flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <div className="w-36 bg-cyan-100 flex items-center justify-center rounded-full">
            <img
              src={singleInfo.doctorImage}
              alt=""
              className="w-36 object-center"
            />
          </div>
          <h2 className="font-bold text-xl mt-5">{singleInfo.name}</h2>
          <p className="text-base text-gray-500 md:text-lg mt-1">
            {singleInfo.speciality}
          </p>
          <button
            onClick={() => navigate(`doctordetails/${singleInfo.id}`)}
            className="btn mt-3"
          >
            Doctor Details
          </button>
        </div>
      </div>
    </>
  );
};

export default DoctorsCard;
