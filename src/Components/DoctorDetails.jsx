import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const dynamic = useParams();
  const [jd, setJd] = useState([]);
  // const [clicked, setClicked] = useState(0);
  let final = {};
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setJd(data));
  }, []);
  jd.find((d) => {
    if (d.id == dynamic.id) {
      final = { ...d };
    }
  });
  const { id, doctorImage, name, speciality, description } = final;
  return (
    <div>
      <div className="bg-cyan-100 h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Know Your Doctor
      </div>
      <div className="my-container">
        <div className="flex flex-col lg:flex-row justify-center items-center mb-10">
          <div className="bg-gray-200 p-6 lg:p-12 mx-5 lg:mx-10 rounded-lg">
            <img
              className="h-full w-full rounded-lg"
              src={doctorImage}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="font-bold text-3xl">{name}</h1>
            <p className="text-base font-semibold text-gray-500 md:text-lg mb-2">
              {speciality}
            </p>
            <p className="text-base text-gray-500 md:text-lg mb-2">
              {description}
            </p>
            <button className="btn">Appoint Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
