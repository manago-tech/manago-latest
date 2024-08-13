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
import Img1 from "@/assets/testimonials/test_1.png";

export default function Testimonials() {
  return (
    <div className="flex flex-col mx-14 md:mx-36 my-14 md:my-20">
      <div className="flex flex-col p-3 gap-3 w-full">
        <p className="text-xs text-center">TESTIMONIALS</p>
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
                    <img
                      src={Img1.src}
                      className="w-full h-full"
                      alt="Card Image"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex items-center mt-4 mb-2 w-full">
                    <p className="text-2xl w-full text-center marcellus">{card.title}</p>
                  </div>
                  <p className="text-xs pt-2 text-center leading-relaxed">{card.content}</p>
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
  );
}

const cardData = [
  {
    title: "Gold Rush Brewery",
    content:
      "Gold Rush Brewery founder, Mr. Saket, who has utilized Manago Kitchen Equipment and Manago Manpower services regularly, praises the exceptional dedication and professionalism of the Manago staff. He highlights their friendly and responsive approach, along with their unwavering commitment to ensuring success. Their attention to detail expedited the setup of Gold Rush Kitchen and Bar, while also facilitating the filling of crucial job positions, greatly enhancing operational efficiency beyond expectations. Mr. Saket highly recommends Manago’s services to anyone in need of manpower assistance, expressing gratitude for a flawless search experience and exceptional service.",
  },
  {
    title: "Gold Rush Brewery",
    content:
      "Gold Rush Brewery founder, Mr. Saket, who has utilized Manago Kitchen Equipment and Manago Manpower services regularly, praises the exceptional dedication and professionalism of the Manago staff. He highlights their friendly and responsive approach, along with their unwavering commitment to ensuring success. Their attention to detail expedited the setup of Gold Rush Kitchen and Bar, while also facilitating the filling of crucial job positions, greatly enhancing operational efficiency beyond expectations. Mr. Saket highly recommends Manago’s services to anyone in need of manpower assistance, expressing gratitude for a flawless search experience and exceptional service.",
  },
  {
    title: "Gold Rush Brewery",
    content:
      "Gold Rush Brewery founder, Mr. Saket, who has utilized Manago Kitchen Equipment and Manago Manpower services regularly, praises the exceptional dedication and professionalism of the Manago staff. He highlights their friendly and responsive approach, along with their unwavering commitment to ensuring success. Their attention to detail expedited the setup of Gold Rush Kitchen and Bar, while also facilitating the filling of crucial job positions, greatly enhancing operational efficiency beyond expectations. Mr. Saket highly recommends Manago’s services to anyone in need of manpower assistance, expressing gratitude for a flawless search experience and exceptional service.",
  },
  {
    title: "Gold Rush Brewery",
    content:
      "Gold Rush Brewery founder, Mr. Saket, who has utilized Manago Kitchen Equipment and Manago Manpower services regularly, praises the exceptional dedication and professionalism of the Manago staff. He highlights their friendly and responsive approach, along with their unwavering commitment to ensuring success. Their attention to detail expedited the setup of Gold Rush Kitchen and Bar, while also facilitating the filling of crucial job positions, greatly enhancing operational efficiency beyond expectations. Mr. Saket highly recommends Manago’s services to anyone in need of manpower assistance, expressing gratitude for a flawless search experience and exceptional service.",
  },
  {
    title: "Gold Rush Brewery",
    content:
      "Gold Rush Brewery founder, Mr. Saket, who has utilized Manago Kitchen Equipment and Manago Manpower services regularly, praises the exceptional dedication and professionalism of the Manago staff. He highlights their friendly and responsive approach, along with their unwavering commitment to ensuring success. Their attention to detail expedited the setup of Gold Rush Kitchen and Bar, while also facilitating the filling of crucial job positions, greatly enhancing operational efficiency beyond expectations. Mr. Saket highly recommends Manago’s services to anyone in need of manpower assistance, expressing gratitude for a flawless search experience and exceptional service.",
  },
];
