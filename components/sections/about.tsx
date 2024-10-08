import React from "react";
import star from "@/assets/star.svg";

export default function About() {
  return (
    <div id="about">
      <div className="flex flex-col lg:flex-row mx-5 md:mx-36 my-14 md:my-20 ">
        <div className="flex flex-col lg:w-1/2 p-3 gap-3">
          <div className="flex flex-row text-xs ">
            <span>
              <img src={star.src} className="animate-spin-slow mr-3 w-4 h-4" />
            </span>
            <p>ABOUT US</p>
            <span>
              <img src={star.src} className="animate-spin-slow ml-3 w-4 h-4" />
            </span>
          </div>
          <h1 className="marcellus text-2xl sm:text-4xl font-light">
            Redefining Hospitality with Innovation and Integration
          </h1>
        </div>
        <div className="flex flex-col gap-3 lg:w-1/2 p-3 sm:pt-10">
          <p className="text-xs leading-6 sm:text-sm">
            Manago is a team of F&B experts who act as personal managers,
            helping you set up restaurants, cafes, or hotels. We provide
            comprehensive consulting services, from concept to launch, including
            in-house services. Our all-in-one approach saves time and capital,
            ensuring a well-planned and budget-friendly setup.
          </p>
          <p className="text-xs leading-6 sm:text-sm">
            At MANAGO, our vision is to redefine the hospitality landscape in
            Bangalore by seamlessly integrating diverse services to empower
            businesses. We envision becoming the go-to-partner for
            establishments in the hospitality industry, providing not only
            skilled manpower but also the essential infrastructure and resources
            necessary for success. Our aim is to enhance operational efficiency
            and elevate the overall guest experience, establishing MANAGO as the
            cornerstone of excellence in the hospitality sector.
          </p>
        </div>
      </div>
    </div>
  );
}
