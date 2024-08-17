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
import star from "@/assets/star.svg";

import Link from "next/link";

import { SiLinkedin } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";

import Team1 from "@/assets/team/arihant.png";
import Team2 from "@/assets/team/prakash.png";
import Team3 from "@/assets/team/prasanna.png";
import Team4 from "@/assets/team/satya.png";
import Team5 from "@/assets/team/sheetal.png";
import Team6 from "@/assets/team/sumit.png";

export default function Team() {
  return (
    <>
      <div id="team">
        <div className="flex flex-col mx-5 md:mx-36 my-14 md:my-20">
          <TeamCarousel />
        </div>
      </div>
    </>
  );
}

export function TeamCarousel() {
  return (
    <div
      className="w-full flex flex-col "
        // px-[2rem] md:px-[4rem] xl:px-[8.5rem]
    >
      <Carousel className="">
        <div className="flex flex-row justify-between">
          <div className="flex md:hidden flex-col max-w-sm p-3 gap-3">
            <div className="flex flex-row text-xs">
              <span>
                <img
                  src={star.src}
                  className="animate-spin-slow mr-3 w-4 h-4"
                />
              </span>
              <p>OUR TEAM</p>
              <span>
                <img
                  src={star.src}
                  className="animate-spin-slow ml-3 w-4 h-4"
                />
              </span>
            </div>
            <h1 className="marcellus text-2xl sm:text-4xl font-light">
              The People Behind MANAGO
            </h1>
            {/* <ul className="list-disc text-xs pl-5 mt-1">
              <li>Extensive Industry Experience</li>
              <li>Specialized Expertise</li>
              <li>Proven Track Record</li>
              <li>Collaborative Consulting</li>
              <li>Client Centric Approach</li>
            </ul> */}
          </div>
        
        </div>
        <CarouselContent className="">
          <CarouselItem key="1" className="basis-1/1 pl-0">
            <div className="flex flex-col w-full ">
              <div className="md:flex hidden  flex-col max-w-sm p-3 gap-3">
                {/* <p className="text-xs">OUR TEAM</p> */}
                <div className="flex flex-row text-xs">
                  <span>
                    <img
                      src={star.src}
                      className="animate-spin-slow mr-3 w-4 h-4"
                    />
                  </span>
                  <p>OUR TEAM</p>
                  <span>
                    <img
                      src={star.src}
                      className="animate-spin-slow ml-3 w-4 h-4"
                    />
                  </span>
                </div>
                <h1 className="marcellus  xl:text-4xl lg:text-3xl md:text-2xl sm:text-4xl font-light">
                  The People <br /> Behind MANAGO
                </h1>
                {/* <ul className="list-disc text-xs pl-5 mt-1">
                  <li>Extensive Industry Experience</li>
                  <li>Specialized Expertise</li>
                  <li>Proven Track Record</li>
                  <li>Collaborative Consulting</li>
                  <li>Client Centric Approach</li>
                </ul> */}
              </div>
            </div>
          </CarouselItem>
          {cardData.map((card, index) => (
            <>
              <CarouselItem
                key={index}
                className="sm:ml-5 md:w-full w-80 ml-4 pl-0 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card
                  key={index}
                  className="border-none shadow-none mt-3 sm:mt-10 mx-2"
                >
                  <CardHeader className="p-0">
                    <CardTitle>
                      <div className="md:max-h-[22rem] overflow-hidden">
                        <img
                          src={card.image.src}
                          className="w-full h-full  transform transition duration-500 hover:scale-110"
                          alt="Card Image"
                        />
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex justify-between items-center mt-2 sm:mt-4 mb-1 sm:mb-2">
                      <p className="text-xl marcellus">{card.name}</p>
                      <div className="hidden md:flex space-x-2">
                        {card.links.linkedin ? (
                          <Link href={card.links.linkedin} passHref rel="noopener noreferrer" target="_blank">
                            <SiLinkedin className="w-6 h-6 text-black" />
                          </Link>
                        ) : (
                          <Link href={card.links.facebook || "#"} passHref rel="noopener noreferrer" target="_blank">
                            <ImFacebook2 className="w-6 h-6 text-black" />
                          </Link>
                        )}
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed">{card.title}</p>
                  </CardContent>

                  <CardFooter className="p-0 pt-2">
                    <div className="flex md:hidden space-x-2">
                      <Link href={card.links.linkedin || card.links.facebook || "#"} passHref rel="noopener noreferrer" target="_blank">
                        {card.links.linkedin ? (
                          <SiLinkedin className="w-4 h-4 text-black" />
                        ) : (
                          <ImFacebook2 className="w-4 h-4 text-black" />
                        )}
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-4  ">
          <CarouselPrevious className="mr-4" />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

const cardData = [
  {
    name: "Arihant Bagra",
    title: "Licensing & Finance",
    links: {
      linkedin: "https://www.linkedin.com/in/arihant-bagra-ab1144223",
    },
    image: Team1,
  },
  {
    name: "Prakash Bagra",
    title: "Equipment Furniture & Machinery",
    links: {
      facebook: "https://www.facebook.com/share/ed2kvdUEdcEnuWJi/?mibextid=qi2Omg",
    },
    image: Team2,
  },
  {
    name: "Prasanna Sankhala",
    title: "Hotel Real-estate",
    links: {
      linkedin: "https://www.linkedin.com/in/prasanna-sankhala-760399a0",
    },
    image: Team3,
  },
  {
    name: "Satya Prakash Singh",
    title: "Interior & Sign Board",
    links: {
      linkedin: "https://www.linkedin.com/in/satya-prakash-singh-386a8818",
    },
    image: Team4,
  },
  {
    name: "Sheetal Mishra",
    title: "Manpower Services",
    links: {
      linkedin: "https://www.linkedin.com/in/sheetal-mishra-16686a144",
    },
    image: Team5,
  },
  {
    name: "Sumit Dadhich",
    title: "Customer Service & Training",
    links: {
      facebook: "https://www.facebook.com/share/dfh7gwhGdyuJJ3hD/?mibextid=qi2Omg",
    },
    image: Team6,
  },
];