import React, { useEffect, useState } from "react";
import OurServiceCard from "./OurServiceCard";

const OurService = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="mt-6 md:mt-12">
      <h1 className="text-center text-3xl md:text-5xl font-semibold">
        Our Services
      </h1>
      <p className="text-center text-base text-gray-500 md:text-lg mt-4">
        Discover the latest job openings from top companies and connect with
        hiring managers.
      </p>
      <div className="my-container grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {info.map((singleInfo, i) => (
          <OurServiceCard key={i} singleInfo={singleInfo} />
        ))}
      </div>
    </div>
  );
};

export default OurService;
