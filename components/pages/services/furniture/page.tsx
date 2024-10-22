"use client";
import React from "react";
import image from "@/assets/services-page/blog-6.png";

import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function blog() {
  return (
    <div className="bg-[#F1EEE766] w-full gap-10 grid grid-cols-1 md:grid-cols-[70%_30%] px-7 sm:px-14 md:px-28 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold marcellus">Manago Furniture</h1>
          <img
            src={image.src}
            className="w-full h-72 object-cover"
            alt="Card Image"
          />
          <p className="text-base mt-3" id="introduction">
            In the fast-paced and highly competitive hospitality industry, the
            importance of creating a unique and inviting ambiance cannot be
            overstated. Whether it's a hotel lobby that speaks of luxury and
            comfort, a restaurant that exudes warmth and sophistication, or a
            pub that promises lively evenings, the right furniture plays a
            pivotal role in shaping the experience for your guests. At Manago
            Furniture, we specialize in providing top-tier furniture solutions
            designed specifically for the hospitality sector, helping you
            elevate your space and create lasting impressions.
          </p>
        </div>

        <div id="why-choose-manago-furniture" className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Why Choose Manago Furniture?</p>

          <p className="text-base leading-relaxed">
            Manago Furniture is a leading name in bespoke furniture solutions
            for hotels, restaurants, pubs, and cafes. Our expertise lies in
            designing and crafting furniture that not only complements your
            brand's aesthetics but also ensures comfort, durability, and
            functionality. We understand that hospitality spaces require a
            unique blend of style and practicality, and our furniture is
            designed to withstand the rigors of daily use while enhancing the
            guest experience.
          </p>
        </div>

        <div id="what-we-offer" className="flex flex-col gap-4 ">
          <p className="text-xl font-semibold">What We Offer :</p>

          <ul className="list-disc list-outside pl-6 text-base leading-relaxed">
            <li className="mb-2">
              Wide Range of Options: We provide a comprehensive selection of
              furniture, including dining tables and chairs, bar stools, lounge
              seating, outdoor furniture, and more. Our products are available
              in various materials, finishes, and designs, giving you the
              flexibility to choose pieces that best suit your space.
            </li>
            <li className="my-2">
              High Durability for Commercial Use: Hospitality furniture endures
              heavy use, which is why we prioritize durability in our designs.
              Manago Furniture uses premium materials like high-grade wood,
              metal, and upholstery that are not only aesthetically pleasing but
              also resistant to wear and tear. Our furniture is built to last,
              ensuring you get the best value for your investment.
            </li>
            <li className="my-2">
              Design Consultation Services: Our team of experts works closely
              with you to understand your brand, your space, and your target
              audience. We offer design consultations to help you select the
              right furniture and layout, ensuring every piece fits seamlessly
              into your overall design concept.
            </li>
            <li className="my-2">
              Sustainability: As part of our commitment to sustainability,
              Manago Furniture incorporates eco-friendly materials and practices
              wherever possible. We source sustainable woods and fabrics to
              reduce our environmental impact, helping you create a space that
              is as responsible as it is beautiful.
            </li>
          </ul>

          <div id="transform-your-space" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">
              Transform Your Space with Manago Furniture :
            </p>

            <p className="text-base leading-relaxed">
              When you choose Manago Furniture, you’re not just buying products;
              you’re investing in a partnership that focuses on helping you
              create unforgettable spaces. We pride ourselves on delivering
              furniture that meets the highest standards of quality, design, and
              functionality, ensuring that your establishment stands out in the
              competitive hospitality market.
            </p>
          </div>

          <div className="mt-4">
            <p className="text-base font-semibold leading-relaxed ">
              Let us help you set the stage for success with furniture that
              speaks volumes about your brand. Contact Manago Furniture today to
              explore how we can assist in turning your vision into reality!
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
    title: "Why Choose Manago Furniture?",
    id: "#why-choose-manago-furniture",
  },
  {
    title: "What We Offer",
    id: "#what-we-offer",
  },
  {
    title: "Transform Your Space with Manago Furniture",
    id: "#transform-your-space",
  },
];
