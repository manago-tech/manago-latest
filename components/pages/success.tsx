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

import Img1 from "@/assets/more/more_1.png";

export default function Success() {
  return (
    <div className="flex flex-col mx-14 md:mx-36 my-14 md:my-20">
      <div className="flex flex-col p-3 gap-3 w-full">
        <p className="text-xs text-center">MORE FROM MANAGO</p>
        <h1 className="marcellus text-center text-2xl sm:text-4xl font-light">
          Snapshots of Success
        </h1>
      </div>
      <div className="w-full pt-6">
        <TeamSuccess />
      </div>
    </div>
  );
}

export function TeamSuccess() {
  return (
    <div
      id="testimonials"
      className="w-full flex flex-col "
      //   px-[2rem] md:px-[4rem] xl:px-[8.5rem]
    >
      <Carousel className="">
        <CarouselContent className="">
          {cardData.map((card, index) => (
            <>
              <CarouselItem
                key={index}
                className="sm:ml-5 md:w-full w-80 pl-0 basis-1/1 lg:basis-1/2"
              >
                <Card
                  key={index}
                  className="border-none shadow-none mt-10 mx-2"
                >
                  <CardHeader className="p-0">
                    <CardTitle>
                      <img src={Img1.src} className="w-full" alt="Card Image" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex justify-between items-center mt-4 mb-2">
                      <p className="text-xs ">{card.title}</p>
                      <div className="hidden md:flex space-x-2"></div>
                    </div>
                    <p className="text-xl marcellus leading-relaxed">
                      {card.content}
                    </p>
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
    title: "Winner of",
    content: "Food Connoisseurs India Awards 2023 South India Edition",
  },
  {
    title: "Winner of",
    content: "Food Connoisseurs India Awards 2023 South India Edition",
  },
  {
    title: "Winner of",
    content: "Food Connoisseurs India Awards 2023 South India Edition",
  },
  {
    title: "Winner of",
    content: "Food Connoisseurs India Awards 2023 South India Edition",
  },
  {
    title: "Winner of",
    content: "Food Connoisseurs India Awards 2023 South India Edition",
  },
  {
    title: "Winner of",
    content: "Food Connoisseurs India Awards 2023 South India Edition",
  },
];
