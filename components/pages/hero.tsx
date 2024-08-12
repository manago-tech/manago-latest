import React from "react";
import { Button } from '@/components/ui/button'
import bg from "@/assets/bg.png";
import Navbar from "@/components/layout/navbar";
import { FaWhatsapp } from "react-icons/fa";

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
      <Navbar />
      <div className="w-full text-white h-[100vh] lg:max-w-7xl mx-auto">
        <div className="flex items-end justify-start h-full px-10 pb-28 md:pb-40">
          {/* <p className="tracking-widest px-10 md:px-32 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFE600] md:leading-relaxed xl:leading-relaxed"
          >
            Enabling Enterprise Performance Excellence
          </p> */}
          <div className="flex flex-col gap-3">
            <p className="text-white marcellus text-3xl sm:text-4xl md:text-5xl leading-snug">
              <span className="md:max-w-xl ">ONE STOP SOLUTION</span> <br /> FOR
              BANGALORE HOTELIERS
            </p>
            <p className="text-white text-xs max-w-lg md:text-sm leading-6 ">
              Empowering Hospitality Businesses with Comprehensive Solutions,
              Skilled Manpower, and Essential Infrastructure for Unparalleled
              Operational Excellence and Guest Satisfaction
            </p>
            <div className="flex flex-col sm:flex-row sm:max-w-sm gap-4 mt-2">
              <Button className="bg-transparent w-full sm:w-1/2 border text-sm border-white text-white rounded-none">
                <span><FaWhatsapp className="w-6 h-6 mr-2"/></span>WHATSAPP US
              </Button>
              <Button className="bg-transparent w-full sm:w-1/2 border text-sm border-white text-white rounded-none">
                EXPLORE MANAGO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
