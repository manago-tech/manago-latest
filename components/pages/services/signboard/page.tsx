"use client";
import React from "react";
import image from "@/assets/services-page/blog-4.png";

import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function blog() {
  return (
    <div className="bg-[#F1EEE766] w-full gap-10 grid grid-cols-1 md:grid-cols-[70%_30%] px-7 sm:px-14 md:px-28 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold marcellus">Manago Sign Board</h1>
          <img
            src={image.src}
            className="w-full h-72 object-cover"
            alt="Card Image"
          />
        </div>
        <div id="introduction">
          <p className="text-base mt-3">
            Manago Signboards is your go-to solution for creating dynamic,
            eye-catching signage that enhances the visibility and branding of
            your hospitality business. Specializing in 3D, 2D, and lollipop
            signboards, we aim to transform the first impression your customers
            have as they approach your restaurant, café, pub, or any F&B
            establishment.
          </p>

          <p className="text-base mt-3">
            <span className="font-medium">3D Signboards : </span>
            These signs provide an immersive, three-dimensional effect, giving
            your brand a bold, standout presence. The raised lettering or logos
            create depth, offering an impressive visual impact both during the
            day and at night when paired with lighting elements. This is ideal
            for businesses that want to project a modern, premium image.
          </p>

          <p className="text-base mt-3">
            <span className="font-medium">Lollipop Signboards : </span>
            These vertical signs, often used for street advertising or
            wayfinding, grab attention from a distance. Placed strategically,
            they guide potential customers to your location with ease. Designed
            to be vibrant and attention-grabbing, lollipop signs help you stand
            out in busy, competitive areas.
          </p>

          <p className="text-base mt-3">
            <span className="font-medium">3D Signboards : </span>
            These signs provide an immersive, three-dimensional effect, giving
            your brand a bold, standout presence. The raised lettering or logos
            create depth, offering an impressive visual impact both during the
            day and at night when paired with lighting elements. This is ideal
            for businesses that want to project a modern, premium image.
          </p>
        </div>

        <div id="why-choose-manago-signboards" className="flex flex-col gap-4 ">
          <p className="text-xl font-semibold">
            Why Choose Manago Signboards?{" "}
          </p>

          <p className="text-base mt-3">
            <span className="font-medium">Quality Craftsmanship : </span>
            We use only the best materials to ensure durability and longevity.
            Our signs are resistant to wear and tear from weather conditions,
            ensuring your business looks professional at all times.
          </p>

          <p className="text-base mt-3">
            <span className="font-medium">Customization : </span>
            Each signboard is tailored to your brand’s identity, ensuring a
            perfect match with your vision and style.
          </p>

          <p className="text-base mt-3">
            <span className="font-medium">Professional Installation : </span>
            We provide full installation services to ensure that your signage is
            displayed in the most impactful way possible.
          </p>

          <p className="text-base mt-3">
            <span className="font-medium">End-to-End Service : </span>
            From design to execution, we manage every step of the process, so
            you can focus on running your business while we handle the rest.
          </p>

          <div className="mt-4">
            <p className="text-base font-semibold leading-relaxed ">
              Manago Signboards helps your business stand out in a crowded
              market, giving your establishment the visual appeal and
              professional signage it needs to draw in customers and create
              lasting impressions.
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
    title: "Kitchen Equipment",
    link: "/our-services/kitchen-equipment",
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
    link: "/our-services/uniform",
  },
];

const pageHeaders = [
  {
    title: "Introduction",
    id: "#introduction",
  },
  {
    title: "Why Choose Manago Signboards?",
    id: "#why-choose-manago-signboards",
  }
];
