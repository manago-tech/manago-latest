"use client";
import React from "react";
import image from "@/assets/services-page/blog-8.png";

import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function blog() {
  return (
    <div className="bg-[#F1EEE766] w-full gap-10 grid grid-cols-1 md:grid-cols-[70%_30%] px-7 sm:px-14 md:px-28 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold marcellus">Manago Uniform</h1>
          <img
            src={image.src}
            className="w-full h-72 object-cover"
            alt="Card Image"
          />
          <p className="text-base mt-3" id="introduction">
            At Manago Hospitality, we understand that first impressions matter.
            A well-dressed team not only reflects the professionalism of your
            establishment but also enhances the overall guest experience. Our
            hospitality uniforms are designed to combine comfort, durability,
            and style, ensuring your staff can perform their duties with
            confidence and ease while looking their best. Whether it’s a
            five-star hotel, an upscale restaurant, or a cozy café, our uniform
            solutions are tailored to meet the specific needs of each
            environment, reinforcing your brand identity through meticulous
            design.
          </p>
        </div>

        <div id="manago-uniform" className="flex flex-col gap-4 ">
          <p className="text-xl font-semibold">Manago Hospitality Uniform :</p>

          <ul className="list-disc list-outside pl-6 text-base leading-relaxed">
            <li className="mb-2">
              Style and Customization : At Manago, we believe that uniforms
              should be a reflection of your brand’s personality. That's why our
              uniforms come in a range of customizable styles, from classic to
              contemporary, ensuring a perfect fit with your brand image. Choose
              from an array of colors, fabrics, and designs that best suit your
              establishment, whether it’s sleek and modern or elegant and
              timeless.
            </li>
            <li className="my-2">
              Comfort and Durability : Our hospitality uniforms are crafted with
              comfort as a priority. Long shifts require clothing that not only
              looks good but feels good too. We use breathable, lightweight
              fabrics that allow for ease of movement while being resilient
              enough to withstand the daily rigors of a fast-paced work
              environment. The result is a uniform that remains comfortable,
              even during extended wear, and lasts through countless washes
              without losing its shape or color.
            </li>
            <li className="my-2">
              Functionality for Every Role : From front-of-house to
              back-of-house, our uniforms are designed with functionality in
              mind. Each piece is tailored to meet the specific requirements of
              different roles within the hospitality sector. Whether it’s
              durable aprons for kitchen staff or polished blazers for
              front-desk personnel, we ensure that every uniform is equipped
              with practical features such as easy-access pockets,
              stain-resistant fabrics, and adjustable fittings to suit a wide
              range of body types.
            </li>
            <li className="my-2">
              Enhancing Team Cohesion : A well-coordinated uniform program helps
              foster team spirit and professionalism. With all staff members
              dressed in cohesive, brand-aligned uniforms, guests will
              immediately notice the unified atmosphere within your
              establishment. This, in turn, promotes a seamless experience for
              guests, ensuring that your team not only looks the part but acts
              as one cohesive unit in providing exceptional service.
            </li>
            <li className="my-2">
              Expert Fitting and Service : Our service doesn’t end with the
              design and production of your uniforms. We offer expert fitting
              services to ensure each staff member receives a uniform that fits
              perfectly, enhancing both appearance and comfort. Additionally,
              our customer service team is on hand to provide ongoing support,
              ensuring that any replacements or adjustments are handled promptly
              and efficiently.
            </li>
            <li className="my-2">
              Flexibility and Affordability : We understand that the needs of
              hospitality businesses are diverse, and so are their budgets.
              That's why we offer flexible pricing plans and uniform packages
              that cater to businesses of all sizes. Whether you’re outfitting a
              small team or a large operation, we ensure that you get the best
              value without compromising on quality.
            </li>
          </ul>

          <div className="mt-4">
            <p className="text-base font-semibold leading-relaxed ">
              At Manago Hospitality, our uniforms are more than just
              workwear—they are a statement of excellence and professionalism.
              By partnering with us, you ensure that your team not only meets
              the expectations of your guests but exceeds them, delivering a
              memorable experience every time.
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
];

const pageHeaders = [
  {
    title: "Introduction",
    id: "#introduction",
  },
  {
    title: "Manago Hospitality Uniform",
    id: "#manago-uniform",
  }
];
