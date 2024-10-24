"use client";
import React from "react";
import image from "@/assets/services-page/blog-3.png";
import portfolio from "@/assets/services-page/blog-3-portfolio.png";
import steps from "@/assets/services-page/blog-3-steps.png";

import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import One from "@/assets/interior/1st.png";
import Two from "@/assets/interior/2nd.png";
import Three from "@/assets/interior/3rd.png";
import Four from "@/assets/interior/4th.png";
import Five from "@/assets/interior/5th.png";
import Six from "@/assets/interior/6th.png";
import Seven from "@/assets/interior/7th.png";
import Eight from "@/assets/interior/8th.png";
import Nine from "@/assets/interior/9th.png";
import Ten from "@/assets/interior/10th.png";
import Eleven from "@/assets/interior/11th.png";
import Twelve from "@/assets/interior/12th.png";
import Thirteen from "@/assets/interior/13th.png";
import Fourteen from "@/assets/interior/14th.png";

export default function blog() {
  return (
    <div className="bg-[#F1EEE766] w-full gap-10 grid grid-cols-1 md:grid-cols-[70%_30%] px-7 sm:px-14 md:px-28 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold marcellus">Manago Interior</h1>
          <img
            src={image.src}
            className="w-full h-72 object-cover"
            alt="Card Image"
          />
          <p className="text-base mt-3" id="introduction">
            At Manago Interior, we specialize in crafting unique and inviting
            spaces for restaurants, cafes, pubs, tea joints, and hotels. Our
            dedicated team of designers and construction experts brings your
            vision to life through innovative 2D and 3D designs and exceptional
            construction services. Whether you’re starting from scratch or
            looking to remodel, we have the expertise and passion to create an
            atmosphere that not only meets your needs but also captivates your
            guests.
          </p>
        </div>

        <div id="our-services" className="flex flex-col gap-8 ">
          <p className="text-xl font-semibold">Our Services :</p>

          <img src={steps.src} alt="steps" />

          <div id="2d-3d-design" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">2D & 3D Design : </p>

            <p className="text-base leading-relaxed">
              Experience your ideas come to life with our comprehensive design
              services. We utilize cutting-edge technology to create detailed 2D
              floor plans and stunning 3D visualizations. Our design process
              includes:
            </p>

            <ul className="list-disc list-outside pl-6 text-base leading-relaxed">
              <li>
                Concept Development: We work closely with you to understand your
                vision and requirements, ensuring that every detail reflects
                your brand’s identity.
              </li>
              <li>
                Visual Representation: Our advanced 3D renderings provide a
                realistic view of your space, allowing you to explore design
                elements before construction begins.
              </li>
              <li>
                Space Planning : Our expert designers maximize functionality and
                flow, creating an environment that enhances the guest
                experience.
              </li>
            </ul>
          </div>

          <div id="construction-services" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Construction Services : </p>

            <p className="text-base leading-relaxed">
              At Manago Interior, we don't just design; we also build. Our
              construction team is committed to delivering high-quality
              workmanship on every project. Our construction services include:
            </p>

            <ul className="list-disc list-outside pl-6  text-base leading-relaxed">
              <li>
                Project Management: From planning to execution, we oversee every
                aspect of the construction process, ensuring timely completion
                and attention to detail.
              </li>
              <li>
                Renovations and Build-outs : Whether you’re opening a new
                location or updating an existing space, we handle renovations
                and build-outs to ensure your vision becomes a reality.
              </li>
              <li>
                Quality Assurance: Our commitment to quality is evident in every
                project. We source the best materials and skilled craftsmen to
                ensure a durable and aesthetically pleasing finish.
              </li>
            </ul>
          </div>

          <div id="why-choose-manago-interior" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">
              Why Choose Manago Interior?{" "}
            </p>

            <ul className="list-disc list-outside pl-6  text-base leading-relaxed">
              <li>
                <span className="font-medium">Experienced Professionals:</span>{" "}
                Our team brings years of experience in the hospitality industry,
                ensuring you receive informed and innovative design solutions.
              </li>
              <li>
                <span className="font-medium">Customized Solutions:</span> We
                understand that each client and project is unique. We tailor our
                services to meet your specific needs and preferences.
              </li>
              <li>
                <span className="font-medium">Client Collaboration:</span> We
                believe in working closely with our clients throughout the
                process. Your satisfaction is our top priority, and we welcome
                your input and feedback to create the ideal space.
              </li>
              <li>
                <span className="font-medium">Attention to Detail:</span> We
                pride ourselves on our meticulous approach to design and
                construction, ensuring that every element is crafted to
                perfection.
              </li>
            </ul>
          </div>

          <div id="portfolio" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">
              Portfolio (History of Manago Interior) :
            </p>
            <p className="text-base leading-relaxed">
              Take a glimpse at our previous work to see how we’ve transformed
              various spaces. Our portfolio showcases a wide array of successful
              projects, highlighting our versatility, creativity, and dedication
              to quality.
            </p>
          </div>

          <div className="mt-4">
            <p className="text-base font-semibold leading-relaxed ">
              Call for free consultation and customisation : 7727072790{" "}
            </p>
            <p className="text-base font-semibold leading-relaxed mt-2">
              Feel free to customize any section to better fit your brand’s
              voice and style!
            </p>
          </div>

          <div className=" gap-1 grid grid-cols-7 grid-rows-2">
            {clickableImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger className="mx-0 px-0">
                  <img
                    src={image.src.src}
                    alt={image.alt}
                    className="cursor-pointer col-span-7 row-span-2 "
                  />
                </DialogTrigger>
                <DialogContent className="p-0 bg-transparent border-none h-full shadow-none flex justify-center items-center">
                  <img
                    src={image.src.src}
                    alt={image.alt}
                    className="lg:w-80 md:w-60 w-40 rounded-md"
                  />
                </DialogContent>
              </Dialog>
            ))}
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
  {
    title: "Uniforms",
    link: "/our-services/uniform",
  },
];

const pageHeaders = [
  {
    title: "Our Services",
    id: "#our-services",
  },
  {
    title: "2D & 3D Design",
    id: "#2d-3d-design",
  },
  {
    title: "Construction Services",
    id: "#construction-services",
  },
  {
    title: "Why Choose Manago Interior?",
    id: "#why-choose-manago-interior",
  },
  {
    title: "Portfolio (History of Manago Interior)",
    id: "#portfolio",
  },
];

const clickableImages = [
  { src: One, alt: "Image One" },
  { src: Two, alt: "Image Two" },
  { src: Three, alt: "Image Three" },
  { src: Four, alt: "Image Four" },
  { src: Five, alt: "Image Five" },
  { src: Six, alt: "Image Six" },
  { src: Seven, alt: "Image Seven" },
  { src: Eight, alt: "Image Eight" },
  { src: Nine, alt: "Image Nine" },
  { src: Ten, alt: "Image Ten" },
  { src: Eleven, alt: "Image Eleven" },
  { src: Twelve, alt: "Image Twelve" },
  { src: Thirteen, alt: "Image Thirteen" },
  { src: Fourteen, alt: "Image Fourteen" },
];
