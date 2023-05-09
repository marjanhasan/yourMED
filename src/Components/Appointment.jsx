import React, { useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import DoctorCart from "./DoctorCart";
import ServiceCart from "./ServiceCart";
import MedicineCart from "./MedicineCart";

const Appointment = () => {
  const allData = useLoaderData();
  console.log(allData);
  let data = [];
  const loadData = getShoppingCart();
  for (let key in loadData) {
    data.push(key);
  }
  // console.log(data);
  let doctorData = allData.doctor.filter((d) => data.includes(d.id));
  let serviceData = allData.service.filter((d) => data.includes(d.id));
  let medicineData = allData.service[3].medicines.filter((d) =>
    data.includes(d.id)
  );
  let bedsData = allData.service[4].beds.filter((d) => data.includes(d.id));
  console.log(bedsData);
  return (
    <div>
      <div className="bg-cyan-100 h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Appointment Page Coming Soon...
      </div>
      <div>
        {doctorData.map((data, i) => (
          <DoctorCart key={i} data={data} />
        ))}
        {serviceData.map((data, i) => (
          <ServiceCart key={i} data={data} />
        ))}
        {medicineData.map((data, i) => (
          <MedicineCart key={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Appointment;
