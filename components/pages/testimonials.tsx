"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import star from "@/assets/star.svg";

import Img1 from "@/assets/testimonials/brewery.png";
import Img2 from "@/assets/testimonials/peak.jpg";
import Img3 from "@/assets/testimonials/burger.jpg";

export default function Testimonials() {
  return (
    <div className="flex flex-col mx-14 md:mx-36 my-14 md:my-20">
      <div className="flex flex-col p-3 gap-3 w-full">
        {/* <p className="text-xs text-center">TESTIMONIALS</p> */}
        <div className="flex flex-row text-xs justify-center">
          <span>
            <img src={star.src} className="animate-spin-slow mr-3 w-4 h-4" />
          </span>
          <p>TESTIMONIALS</p>
          <span>
            <img src={star.src} className="animate-spin-slow ml-3 w-4 h-4" />
          </span>
        </div>
        <h1 className="marcellus text-center text-2xl sm:text-4xl font-light">
          Client Experiences and Endorsements
        </h1>
      </div>
      <div className="w-full pt-8">
        <CarouselDApiDemo />
      </div>
    </div>
  );
}

export function CarouselDApiDemo() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div id="testimonials">
      <div className="flex w-full flex-col ">
        <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {/* {Array.from({ length: 5 }).map((_, index) => ( */}
            {cardData.map((card, index) => (
              <CarouselItem key={index}>
                {/* <Card>
                <CardContent className="flex  items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
                <Card className="border-none shadow-none ">
                  <CardHeader className="p-0">
                    <CardTitle>
                      <div className="overflow-hidden max-h-[28rem]">
                        <img
                          src={card.img.src}
                          className="w-full h-full transform transition duration-500 hover:scale-110"
                          alt="Card Image"
                        />
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center mt-4 mb-2 w-full">
                      <p className="text-2xl w-full text-center marcellus">
                        {card.title}
                      </p>
                    </div>
                    <p className="text-xs pt-2 text-center leading-relaxed">
                      {card.content}
                    </p>
                  </CardContent>
                  <CardFooter className="p-0 pt-2"></CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex justify-center pt-5">
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className={`mx-1 h-3 w-3 rounded-full ${
                current === index + 1 ? "bg-gray-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const cardData = [
  {
    title: "Gold Rush Brewery",
    content:
      "Gold Rush Brewery founder, Mr. Saket, who has utilized Manago Kitchen Equipment and Manago Manpower services regularly, praises the exceptional dedication and professionalism of the Manago staff. He highlights their friendly and responsive approach, along with their unwavering commitment to ensuring success. Their attention to detail expedited the setup of Gold Rush Kitchen and Bar, while also facilitating the filling of crucial job positions, greatly enhancing operational efficiency beyond expectations. Mr. Saket highly recommends Manago's services to anyone in need of manpower assistance, expressing gratitude for a flawless search experience and exceptional service.",
    img: Img1,
  },
  {
    title: "The Peak",
    content:
      "The Peak founder Mr. Param Shinde says “We’ve been using Manago’s services for the last couple of years now, they’ve constantly assisted us not only in our manpower requirements but also in the setting up of our upcoming F&B premises also with staff uniform. They have a highly proactive group that has gained our trust and business with their commitment to delivering what’s promised. Much needed in the tough times our industry is facing. Special thanks to Sheetal, Prakash & Sumit.",
    img: Img2,
  },
  {
    title: "Biggies Burger",
    content:
      "Biggies Burger Management Applauds Manago for Seamless Collaboration in Manago Kitchen Equipment and Manago Manpower, Manago Uniform and Manago furniture over Three Years, Highlighting Exceptional Service and Endorsement for Companies Seeking Efficiency.",
    img: Img3,
  },
  {
    title: "Global Kitchen",
    content:
      "For the past three years, Global Kitchen, a prominent figure in Bangalore's hospitality industry, has consistently relied on Manago Manpower for their staffing needs. Praised as 'thorough professionals' with an exceptional grasp of Bangalore's hospitality sector, the Manago team has been an invaluable partner to Global Kitchen, overseeing operations for establishments such as The Irish House and Bombay Brasserie.",
    img: Img1,
  },
  {
    title: "Shilton Hospitality",
    content:
      "Shilton Hospitality, a prominent entity in Bangalore's thriving hospitality sector, has maintained a steadfast partnership with Manago Kitchen Equipment and Manago Manpower. Corporate HR representative, Shilpa K Bangera, lauds the Manago team for their unwavering promptness, professionalism, and attentiveness to Shilton Hospitality's requirements. She expresses a strong conviction that Manago is poised to revolutionize the hospitality sector for the better.",
    img: Img1,
  },
  {
    title: "Play Arena",
    content:
      "We had a fantastic experience working with MANAGO 360. Their team was incredibly responsive, supportive, and helpful throughout the entire process. It felt like a personalized service, which is rare to find nowadays. We highly recommend MANAGO for their exceptional customer service and prompt actions.",
    img: Img1,
  },
];
