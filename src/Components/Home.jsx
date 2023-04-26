import React from "react";
import { Link } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ServiceCategory from "./ServiceCategory";
import OurService from "./OurService";
import Doctors from "./Doctors";

const Home = () => {
  return (
    <div>
      {/* banner section  */}
      <div className="bg-cyan-100">
        <div className="my-container flex flex-col items-center justify-between lg:flex-row h-full">
          {/* left side  */}
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 lg:mt-8">
              <h2 className="max-w-lg mb-6 font-sans lg:text-5xl font-bold tracking-tight text-gray-900 text-4xl sm:text-4xl sm:leading-none">
                Your Health,
                <br className="hidden md:block" /> Our Priority:
                <br />
                <span className="inline-block txt-color">
                  Welcome to yourMED official Website!
                </span>
              </h2>
              <p className="text-base text-gray-500 md:text-lg">
                Our Hospital Management Website is your gateway to top-notch
                healthcare services. With a compassionate and experienced team,
                we are committed to providing innovative solutions that
                prioritize your health and well-being.Trust us to be your
                partner in health and start your journey towards optimal
                wellness today.
              </p>
              <Link to="/blog" className="btn md:w-auto md:mr-4 mt-6">
                <div className="inline-flex items-center justify-center w-full h-full">
                  <p className="">Get Started</p>
                </div>
              </Link>
            </div>
          </div>
          {/* right side  */}
          {/* Lottie Animation */}
          <div className="lg:w-1/2 ">
            <div className="w-full lg:w-4/5 lg:ml-auto">
              <Player
                autoplay
                speed={1.5}
                loop
                src="/animeDoctor.json"
              ></Player>
            </div>
          </div>
        </div>
      </div>
      {/* Available service category section  */}
      <ServiceCategory />
      {/* Our service section  */}
      <OurService></OurService>
      {/* doctors list section  */}
      <Doctors />
    </div>
  );
};

export default Home;
