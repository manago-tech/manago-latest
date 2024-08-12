import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col md:flex-row mx-10 md:mx-36 my-14 md:my-28 ">
      <div className="flex flex-col md:w-1/2 p-3 gap-3">
      <p className="text-xs ">
        ABOUT US
        </p>
        <h1 className="marcellus text-4xl font-light">Redefining Hospitality with Innovation and Integration</h1>
      </div>
      <div className="flex flex-col gap-3 md:w-1/2 p-3 pt-10">
        <p className="text-sm">
          Manago is a team of F&B experts who act as personal managers, helping you set up restaurants, cafes, or hotels. We provide comprehensive consulting services, from concept to launch, including in-house services. Our all-in-one approach saves time and capital, ensuring a well-planned and budget-friendly setup.
        </p>
        <p className="text-sm">
          At MANAGO, our vision is to redefine the hospitality landscape in Bangalore by seamlessly integrating diverse services to empower businesses. We envision becoming the go-to-partner for establishments in the hospitality industry, providing not only skilled manpower but also the essential infrastructure and resources necessary for success. Our aim is to enhance operational efficiency and elevate the overall guest experience, establishing MANAGO as the cornerstone of excellence in the hospitality sector.
        </p>
      </div>
    </div>
  );
}