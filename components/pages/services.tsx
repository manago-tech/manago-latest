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
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

import Img1 from "@/assets/services/card_1.png";

const cardData = [
  {
    title: "Restoestate",
    content:
      "Your Trusted Partner in F&B and Real Estate Expansion, facilitating seamless franchise distribution and property rentals.",
    links: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    title: "Licensing",
    content:
      "Comprehensive licensing, accounting, and compliance solutions for the hospitality sector.",
    links: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    title: "Interior",
    content:
      "Transforming culinary visions into reality with bespoke interior design and construction services.",
    links: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    title: "Sign Board",
    content:
      "Crafting eye-catching LED sign boards to elevate your establishment's visual appeal.",
    links: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    title: "Kitchen Equipment",
    content:
      "Providing high-quality new and refurbished kitchen equipment tailored for commercial kitchens.",
    links: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    title: "Furniture",
    content:
      "Elegant and functional hospitality furniture designed to enhance guest experiences.",
    links: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    title: "Manpower",
    content:
      "Supplying skilled manpower to drive excellence across Bangalore's hospitality industry.",
    links: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    title: "Uniform",
    content:
      "Custom-designed uniforms that combine functionality with style, enhancing your brand identity.",
    links: {
      facebook: "#",
      instagram: "#",
    },
  },
];

export default function Services() {
  return (
    <div className="flex flex-col mx-5 md:mx-36 my-14 md:my-20">
      <div className="flex flex-col p-3 gap-3 w-full">
        <p className="text-xs text-center">OUR SERVICES</p>
        <h1 className="marcellus text-center text-2xl sm:text-4xl font-light">
          Tailored Solutions for Every Hospitality Need
        </h1>
      </div>
      <div className="grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} className="border-none shadow-none mt-10 mx-2">
            <CardHeader className="p-0">
              <CardTitle>
                <img
                  src={Img1.src}
                  className="w-full h-full"
                  alt="Card Image"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex justify-between items-center mt-4 mb-2">
                <p className="text-2xl marcellus">{card.title}</p>
                <div className="hidden md:flex space-x-2">
                  <Link href={card.links.facebook} passHref>
                    <FaFacebook className="text-xl" />
                  </Link>
                  <Link href={card.links.instagram} passHref>
                    <FaInstagramSquare className="text-xl rounded-full" />
                  </Link>
                </div>
              </div>
              <p className="text-xs leading-relaxed">{card.content}</p>
            </CardContent>
            <CardFooter className="p-0 pt-2">
              <div className="flex md:hidden space-x-2">
                <Link href={card.links.facebook} passHref>
                  <FaFacebook className="text-xl" />
                </Link>
                <Link href={card.links.instagram} passHref>
                  <FaInstagramSquare className="text-xl rounded-full" />
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
