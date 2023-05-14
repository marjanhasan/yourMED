import React, { useEffect, useState } from "react";
import ClientsReviewCard from "./ClientsReviewCard";

const ClientsReview = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="my-6 md:my-12">
      <h1 className="text-center text-3xl md:text-5xl font-semibold">
        Our Clients Review
      </h1>
      <p className="text-center text-base text-gray-500 md:text-lg mt-4">
        Our Hospital Management Website is your gateway to top-notch healthcare
        services.
      </p>
      <div className="my-container grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {info.map((singleInfo, i) => (
          <ClientsReviewCard key={i} singleInfo={singleInfo} />
        ))}
      </div>
    </div>
  );
};

export default ClientsReview;
