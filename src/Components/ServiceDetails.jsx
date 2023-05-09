import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Medicines from "./Medicines";
import Beds from "./Beds";

const ServiceDetails = () => {
  const dynamic = useParams();
  const [jd, setJd] = useState([]);
  // const [clicked, setClicked] = useState(0);
  let final = {};
  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setJd(data));
  }, []);
  jd.find((d) => {
    if (d.id == dynamic.id) {
      final = { ...d };
    }
  });
  const { id, image, title, details } = final;
  return (
    <div>
      <div className="bg-cyan-100 h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Services
      </div>
      <div className="my-container">
        <div className="flex flex-col lg:flex-row justify-center items-center pb-10  border-b-2">
          <div className="">
            <h1 className="font-bold text-3xl mb-3">{title}</h1>
            <p className="text-base text-gray-500 md:text-lg mb-4 text-justify">
              {details}
            </p>
            <button className="btn">Appoint Now</button>
          </div>
          <div className="bg-gray-200 h-fit w-fit overflow-hidden shrink-0 mx-5 lg:mx-10 rounded-lg">
            <img className="h-full w-full object-contain" src={image} alt="" />
          </div>
        </div>
        {id === 4 && (
          <div>
            <div className="py-6">
              <h1 className="text-center text-3xl md:text-5xl font-semibold">
                Our Medicines
              </h1>
              <p className="text-center text-base text-gray-500 md:text-lg mt-4">
                Our Hospital Management Website is your gateway to top-notch
                healthcare services.
              </p>
            </div>
            {final.medicines.map((medicine) => (
              <Medicines key={medicine.id} medicine={medicine} />
            ))}
          </div>
        )}
        {id === 5 && (
          <div>
            <div className="py-6">
              <h1 className="text-center text-3xl md:text-5xl font-semibold">
                Our Bed Facilities
              </h1>
              <p className="text-center text-base text-gray-500 md:text-lg mt-4">
                Our Hospital Management Website is your gateway to top-notch
                healthcare services.
              </p>
            </div>
            {final.beds.map((bed) => (
              <Beds key={bed.id} bed={bed} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
