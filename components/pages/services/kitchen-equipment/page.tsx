"use client";
import React from "react";
import image from "@/assets/services-page/blog-5.png";
import Why from "@/assets/services-page/blog-5-why.png";

import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function blog() {
  return (
    <div className="bg-[#F1EEE766] w-full gap-10 grid grid-cols-1 md:grid-cols-[70%_30%] px-7 sm:px-14 md:px-28 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold marcellus">
            Manago Kitchen Equipment
          </h1>
          <img
            src={image.src}
            className="w-full h-72 object-cover"
            alt="Card Image"
          />
          <p className="text-base mt-3" id="introduction">
            Manago Kitchen Equipment specializes in providing top-quality
            commercial kitchen equipment for restaurants, pubs, cafes, and
            online kitchens. With a focus on durability, efficiency, and
            innovation, our products are designed to meet the high demands of
            the foodservice industry. From advanced cooking appliances to
            essential tools and accessories, we offer a comprehensive range of
            equipment tailored to enhance kitchen operations and boost
            productivity. Whether you’re setting up a new kitchen or upgrading
            existing facilities, Manago Kitchen Equipment ensures your business
            is equipped with reliable, industry-leading solutions that support
            seamless food preparation and exceptional service delivery.
          </p>

          <img src={Why.src} alt="why" className="my-4" />
        </div>

        <div
          id="why-opt-manago-commercial-kitchen-equipment"
          className="flex flex-col gap-8 "
        >
          <p className="text-xl font-semibold">
            Why Opt for Manago Commercial Kitchen Equipment?
          </p>

          <ul className="list-disc list-outside pl-6 text-base leading-relaxed">
            <li className="my-2">
              Save Capital: At Manago, we understand the importance of balancing
              quality with cost. By offering both new and refurbished equipment,
              we provide businesses with flexible options to meet their
              budgetary constraints. Our refurbished equipment undergoes
              rigorous testing and refurbishment to ensure it performs like new,
              allowing you to save capital while still equipping your kitchen
              with high-quality, reliable tools.
            </li>
            <li className="my-2">
              Stock Availability: Time is critical in the foodservice industry,
              and we make sure your kitchen never has to wait. Manago maintains
              a robust stock of essential kitchen equipment, from cooking ranges
              to refrigeration units, so you get quick access to what you need.
              Our vast inventory ensures that whether you’re starting from
              scratch or expanding your operations, the equipment is ready and
              available for fast delivery.
            </li>
            <li className="my-2">
              After-Sales Service: Purchasing equipment is only the first
              step—ensuring it runs smoothly is just as important. Our
              comprehensive after-sales service includes maintenance, repairs,
              and technical support to keep your kitchen functioning
              efficiently. Manago’s responsive support team is always ready to
              address any issues, minimizing downtime and extending the lifespan
              of your equipment.
            </li>
            <li className="my-2">
              Free Consultation: Setting up a commercial kitchen can be
              daunting, but our expert consultants are here to help. We offer
              free consultations to assess your specific needs, ensuring you get
              the right equipment for your restaurant, pub, cafe, or online
              kitchen. Our team works with you to design a layout that maximizes
              efficiency, saves space, and boosts productivity, all while
              considering your budget.
            </li>
          </ul>

          <div className="mt-4">
            <p className="text-base font-semibold leading-relaxed ">
              With Manago, you not only invest in top-tier kitchen equipment but
              also in a trusted partner committed to your long-term success.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className=" flex-col gap-8 md:flex hidden">
        <div>
          <p className="text-xl font-semibold">More Services :</p>
          <div className="flex flex-col gap-3 mt-2 py-1 border-l-2 border-[#A8A8A8]">
            {moreServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="flex flex-row items-center gap-2 px-3"
              >
                <p className="text-sm">{service.title}</p>
                <SquareArrowOutUpRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xl font-semibold">More Services :</p>
          <div className="flex flex-col gap-3 mt-2 py-1 border-l-2 border-[#A8A8A8]">
            {pageHeaders.map((service, index) => (
              <div key={index} className="flex flex-col gap-2 px-3">
                <Link href={service.id} className="text-sm">
                  {service.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const moreServices = [
  {
    title: "Restoestate",
    link: "/our-services/restoestate",
  },
  {
    title: "Licensing",
    link: "/our-services/licensing",
  },
  {
    title: "Interior",
    link: "/our-services/interior",
  },
  {
    title: "Sign Board",
    link: "/our-services/signboard",
  },
  {
    title: "Furniture",
    link: "/our-services/furniture",
  },
  {
    title: "Manpower",
    link: "/our-services/manpower",
  },
  {
    title: "Uniforms",
    link: "/our-services/uniforms",
  },
];

const pageHeaders = [
  {
    title: "Introduction",
    id: "#introduction",
  },
  {
    title: "Why Opt for Manago Commercial Kitchen Equipment?",
    id: "#why-opt-manago-commercial-kitchen-equipment",
  },
];

