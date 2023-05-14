import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DoctorCart from "./DoctorCart";
import ServiceCart from "./ServiceCart";
import MedicineCart from "./MedicineCart";

const Appointment = () => {
  const allData = useLoaderData();
  return (
    <div>
      <div className="bg-cyan-100 h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Appointment Page Coming Soon...
      </div>
    </div>
  );
};

export default Appointment;
