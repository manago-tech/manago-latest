import React from "react";
import { Button } from "@/components/ui/button";
import bg from "@/assets/bg.png";
import Navbar from "@/components/layout/navbar";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative flex flex-col border-b max-h-screen h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className='absolute z-[1] md:top-[-450px] md:left-[-450px] md:w-[780px] md:h-[780px] top-[-225px] left-[-225px] w-[390px] h-[390px] bg-gradient-to-tl from-white to-[#00C062] rounded-full blur-[100px]'></div> */}
      <div className="absolute z-[1] md:block hidden  top-0 left-0 w-full h-[200px] md:h-[150px] bg-gradient-to-b from-black via-black to-gray-900 blur-[100px]"></div>
      <div className="absolute z-[1] md:hidden block w-full h-full bg-gradient-to-b from-black/60 via-black/60 to-black/60 blur-[100px]"></div>

      <Navbar />
      <div className="w-full text-white h-[100vh] lg:max-w-7xl mx-auto">
        <div className="flex items-end justify-start h-full px-10 pb-28 md:pb-40">
          <div className="relative ">
            <div className="absolute hidden md:block  z-[1] w-full  h-[40vh] sm:h-[37vh] bg-gradient-to-t from-black/80 via-black/80 to-black/80 blur-lg "></div>

            <div className="relative z-[10] flex flex-col gap-6">
              <p
                className="text-white marcellus text-3xl sm:text-4xl md:text-5xl"
                style={{ lineHeight: "55px" }}
              >
                <span className="md:max-w-xl ">ONE STOP SOLUTION</span> <br />{" "}
                FOR BANGALORE HOTELIERS
              </p>
              <p
                className="text-white text-xs max-w-xl md:text-base"
                style={{ lineHeight: "25px" }}
              >
                Empowering Hospitality Businesses with Comprehensive Solutions,
                Skilled Manpower, and Essential Infrastructure for Unparalleled
                Operational Excellence and Guest Satisfaction
              </p>
              <div className="flex flex-col sm:flex-row sm:max-w-md gap-4 mt-2">
                <Button className="bg-transparent w-full sm:w-1/2 h-14 border text-sm border-white text-white hover:border-[#25D366] hover:bg-[#25D366] hover:text-black rounded-none">
                  <span>
                    <FaWhatsapp className="w-6 h-6 mr-2" />
                  </span>
                  WHATSAPP US
                </Button>

                <Button className="bg-transparent w-full sm:w-1/2 h-14 border text-sm border-white text-white hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none">
                  <Link href="#about">
                  EXPLORE MANAGO</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-[1] md:bottom-[-390px] md:right-[-390px] md:w-[780px] md:h-[780px] bottom-[-195px] right-[-195px] w-[390px] h-[390px] bg-gradient-to-tl to-grayh-800 via-black from-black rounded-full blur-[100px]"></div>
    </div>
  );
}