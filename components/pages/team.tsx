import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/updatedCarousel";

import { TiSocialLinkedinCircular } from "react-icons/ti";
import Link from "next/link";

import Img1 from "@/assets/team/team_1.png";

export default function Team() {
  return (
    <>
      <div className="flex flex-col mx-5 md:mx-36 my-14 md:my-20">
        {/* <div className="flex flex-row justify-between">
          <div className="flex md:hidden flex-col max-w-sm p-3 gap-3">
            <p className="text-xs ">OUR TEAM</p>
            <h1 className="marcellus text-2xl sm:text-4xl font-light">
              The People <br /> Behind MANAGO
            </h1>
            <ul className="list-disc text-xs pl-5 mt-1">
              <li>Extensive Industry Experience</li>
              <li>Specialized Expertise</li>
              <li>Proven Track Record</li>
              <li>Collaborative Consulting</li>
              <li>Client Centric Approach</li>
            </ul>
          </div>
          <div className="flex md:hidden ">
            <CarouselPrevious className="mr-4" />
            <CarouselNext />
          </div>
        </div> */}

        <Testimonial />
      </div>
    </>
  );
}

export function Testimonial() {
  return (
    <div
      id="testimonials"
      className="w-full flex flex-col "
      //   px-[2rem] md:px-[4rem] xl:px-[8.5rem]
    >
      <Carousel className="">
      <div className="flex flex-row justify-between">
          <div className="flex md:hidden flex-col max-w-sm p-3 gap-3">
            <p className="text-xs ">OUR TEAM</p>
            <h1 className="marcellus text-2xl sm:text-4xl font-light">
              The People <br /> Behind MANAGO
            </h1>
            <ul className="list-disc text-xs pl-5 mt-1">
              <li>Extensive Industry Experience</li>
              <li>Specialized Expertise</li>
              <li>Proven Track Record</li>
              <li>Collaborative Consulting</li>
              <li>Client Centric Approach</li>
            </ul>
          </div>
          <div className="flex  items-end md:hidden ">
            <CarouselPrevious className="mr-4" />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent className="">
          <CarouselItem key="1" className="basis-1/1 pl-0">
            <div className="flex flex-col w-full ">
              <div className="md:flex hidden  flex-col max-w-sm p-3 gap-3">
                <p className="text-xs">OUR TEAM</p>
                <h1 className="marcellus  xl:text-4xl lg:text-3xl md:text-2xl sm:text-4xl font-light">
                  The People <br /> Behind MANAGO
                </h1>
                <ul className="list-disc text-xs pl-5 mt-1">
                  <li>Extensive Industry Experience</li>
                  <li>Specialized Expertise</li>
                  <li>Proven Track Record</li>
                  <li>Collaborative Consulting</li>
                  <li>Client Centric Approach</li>
                </ul>
              </div>
            </div>
          </CarouselItem>
          {cardData.map((card, index) => (
            <>
              <CarouselItem
                key={index}
                className="sm:ml-5 md:w-full w-80 ml-4 pl-0 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card key={index} className="border-none shadow-none mt-10 mx-2">
                  <CardHeader className="p-0">
                    <CardTitle>
                      <img src={Img1.src} className="w-full" alt="Card Image" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex justify-between items-center mt-4 mb-2">
                      <p className="text-xl marcellus">{card.name}</p>
                      <div className="hidden md:flex space-x-2">
                        <Link href={card.links.linkedin} passHref>
                          <TiSocialLinkedinCircular className="text-xl w-9 h-9 text-[#A16262]" />
                        </Link>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed">{card.title}</p>
                  </CardContent>

                  <CardFooter className="p-0 pt-2">
                    <div className="flex md:hidden space-x-2"></div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

const cardData = [
  {
    name: "Arihant Jain",
    title: "Licensing & Finance",
    links: {
      linkedin: "#",
    },
  },
  {
    name: "Arihant Jain",
    title: "Licensing & Finance",
    links: {
      linkedin: "#",
    },
  },
  {
    name: "Satya Prakash Singh",
    title: "Interior & Sign Board",
    links: {
      linkedin: "#",
    },
  },
  {
    name: "Arihant Jain",
    title: "Licensing & Finance",
    links: {
      linkedin: "#",
    },
  },
  {
    name: "Sheetal Mishra",
    title: "Manpower",
    links: {
      linkedin: "#",
    },
  },
  {
    name: "Arihant Jain",
    title: "Licensing & Finance",
    links: {
      linkedin: "#",
    },
  },
];
