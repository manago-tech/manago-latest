import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLink } from "react-icons/fa";

import star from "@/assets/star.svg";
import card1 from "@/assets/services/card-1.png";
import card2 from "@/assets/services/card-2.png";
import card3 from "@/assets/services/card-3.png";
import card4 from "@/assets/services/card-4.png";
import card5 from "@/assets/services/card-5.png";
import card6 from "@/assets/services/card-6.png";
import card7 from "@/assets/services/card-7.png";
import card8 from "@/assets/services/card-8.png";

export default function Services() {
  return (
    <div id="services">
      <div className="flex flex-col mx-2 md:mx-36 my-14 md:my-20">
        <div className="flex flex-col p-3 gap-3 w-full">
          {/* <p className="text-xs text-center">OUR SERVICES</p> */}
          <div className="flex flex-row text-xs justify-center">
            <span>
              <img src={star.src} className="animate-spin-slow mr-3 w-4 h-4" />
            </span>
            <p>OUR SERVICES</p>
            <span>
              <img src={star.src} className="animate-spin-slow ml-3 w-4 h-4" />
            </span>
          </div>
          <h1 className="marcellus text-center text-2xl sm:text-4xl font-light">
            Tailored Solutions for Every Hospitality Need
          </h1>
        </div>
        <div className="grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-4">
          {cardData.map((card, index) => (
            <Card key={index} className="border-none shadow-none  mt-5 sm:mt-10 mx-1 sm:mx-2">
              <CardHeader className="p-0">
                <CardTitle>
                  <div className="overflow-hidden">
                    <img
                      src={card.image.src}
                      className="w-full h-full transform transition duration-500 hover:scale-110"
                      alt="Card Image"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex justify-between items-center mt-2 sm:mt-4 mb-1 sm:mb-2">
                  <p className="text-2xl text-[23px] marcellus">{card.title}</p>
                  <div className="hidden md:flex space-x-2 items-center">
                    <Link href={card.links.facebook} passHref rel="noopener noreferrer" target="_blank">
                      <ImFacebook2 className="text-xl" />
                    </Link>
                    <Link href={card.links.instagram} passHref rel="noopener noreferrer" target="_blank">
                      <PiInstagramLogoFill className="text-2xl" />
                    </Link>
                    {card.links.link && (
                      <Link href={card.links.link} passHref rel="noopener noreferrer" target="_blank">
                        <FaLink className="text-xl" />
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-xs leading-relaxed">{card.content}</p>
              </CardContent>
              <CardFooter className="p-0 pt-2">
                <div className="flex md:hidden space-x-2 items-center">
                  <Link href={card.links.facebook} passHref rel="noopener noreferrer" target="_blank">
                    <ImFacebook2 className="text-xl hover:text-[#1877F2]" />
                  </Link>
                  <Link href={card.links.instagram} passHref rel="noopener noreferrer" target="_blank">
                    <PiInstagramLogoFill className="text-2xl " />
                  </Link>
                  {card.links.link && (
                    <Link href={card.links.link} passHref rel="noopener noreferrer" target="_blank">
                        <FaLink className="text-xl" />
                      </Link>
                    )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const cardData = [
  {
    title: "Resto-estate",
    content:
      "Your Trusted Partner in F&B and Real Estate Expansion, facilitating seamless franchise distribution and property rentals.",
    links: {
      facebook:
        "https://www.facebook.com/share/M5gDvatPHcMso15K/?mibextid=qi2Omg",
      instagram: "https://www.instagram.com/managorestostatebangalore/",
    },
    image: card1, 
  },
  {
    title: "Licensing",
    content:
      "Comprehensive licensing, accounting, and compliance solutions for the hospitality sector.",
    links: {
      facebook: "https://www.facebook.com/Managofoodlicenseservice",
      instagram: "https://www.instagram.com/manago_food_license_services",
    },
    image: card2, 
  },
  {
    title: "Interior",
    content:
      "Transforming culinary visions into reality with bespoke interior design and construction services.",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=61556113223964&mibextid=2JQ9oc",
      instagram: "https://www.instagram.com/manago_craft?igsh=OTZyNXIyZGU0aG9p",
    },
    image: card3, 
  },
  {
    title: "Sign Board",
    content:
      "Crafting eye-catching LED sign boards to elevate your establishment's visual appeal.",
    links: {
      facebook: "https://www.facebook.com/Managosignboard/",
      instagram: "https://www.instagram.com/manago_sign_board/",
    },
    image: card4, 
  },
  {
    title: "Kitchen Equipment",
    content:
      "Providing high-quality kitchen equipment tailored for commercial kitchens.",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=61564445605166",
      instagram: "https://www.instagram.com/manago_kitchen_equipment/",
      link: "https://managokitchen.in/",
    },
    image: card5, 
  },
  {
    title: "Furniture",
    content:
      "Elegant and functional hospitality furniture designed to enhance guest experiences.",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=61564143996284",
      instagram: "https://www.instagram.com/manago_furniture_service/",
    },
    image: card6, 
  },
  {
    title: "Manpower",
    content:
      "Supplying skilled manpower to drive excellence across Bangalore's hospitality industry.",
    links: {
      facebook:
        "https://www.facebook.com/profile.php?id=61564163493455&sk=about",
      instagram: "https://www.instagram.com/manago_manpower/",
    },
    image: card7, 
  },
  {
    title: "Uniform",
    content:
      "Custom-designed uniforms that combine functionality with style, enhancing your brand identity.",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=61564438075530",
      instagram: "https://www.instagram.com/manago_uniform/",
    },
    image: card8,
  },
];

