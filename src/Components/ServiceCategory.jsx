import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServiceCategory = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("/serviceCategory.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="mt-6 md:mt-12">
      <div className="my-container grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
        {info.map((singleInfo, i) => (
          <ServiceCard key={i} singleInfo={singleInfo} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
