import React from "react";

const DoctorsCard = ({ singleInfo }) => {
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
          <h2 className="font-bold text-xl mt-5">{singleInfo.name}+</h2>
          <p className="text-base text-gray-500 md:text-lg mt-1">
            {singleInfo.expertise}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorsCard;
