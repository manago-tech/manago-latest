import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import footerbg from "@/assets/footer.png";
import logo from "@/assets/logo.svg";
import { FaWhatsapp } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div
      className="relative flex flex-col border-b overflow-hidden  w-full"
      style={{
        backgroundImage: `url(${footerbg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 mx-10 md:mx-36 my-14 md:my-20">
        <div className="p-3 flex flex-col col-span-12 lg:col-span-4 gap-2">
          <img src={logo.src} alt="logo" className="w-16 h-16" />
          <p className="marcellus text-2xl sm:text-3xl font-light">MANAGO</p>
          <p className="text-base font-normal">
            One Stop Solution for Bangalore Hoteliers
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="https://wa.me/7727072790" rel="noopener noreferrer" target="_blank">
            <Button className="p-2 bg-transparent  border text-sm border-white text-white hover:border-[#25D366] hover:bg-[#25D366] hover:text-black rounded-none">
              <span>
                <FaWhatsapp className="text-xl mr-2" />
              </span>
              WHATSAPP
            </Button>
            </Link>

            <Link href="https://www.instagram.com/manago_official" rel="noopener noreferrer" target="_blank">
              <Button className="p-2 bg-transparent  border text-sm hover:text-sm border-white text-white hover:border-[#E1306C] hover:bg-[#E1306C]  rounded-none">
                <PiInstagramLogoFill className="text-xl" />
              </Button>
            </Link>

            <Link href="https://www.facebook.com/ManagoForEverything/" rel="noopener noreferrer" target="_blank">
              <Button className="p-2 bg-transparent   border text-sm border-white text-white hover:border-[#1877F2] hover:bg-[#1877F2] rounded-none">
                <ImFacebook2 className="text-xl" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="p-3 col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3">
          <p className="text-sm font-medium">EXPLORE</p>
          <div className="text-[12px] pt-2 leading-7 font-extralight">
            <Link href="#about">About Us</Link> <br />
            <Link href="#services">Our Services</Link> <br />
            <Link href="#testimonials">Testimonials</Link> <br />
            <Link href="#team">Our Team</Link> <br />
            <Link href="#success">More From Manago</Link>
          </div>
        </div>
        <div className="p-3 col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-2 leading-snug ">
          <p className="text-sm font-medium">HOURS</p>
          <p className="text-[12px] pt-2 leading-7 font-extralight">
            MON - FRI <br />
            9am - 6pm <br />
            SAT- SUN <br />
            10am - 4pm
          </p>
        </div>
        <div className="p-3 col-span-12 sm:col-span-3 md:col-span-4 lg:col-span-3">
          <p className="text-sm font-medium">ADDRESS</p>
          <p className="text-[12px] pt-2 leading-5 font-extralight">
            No. 1036, Second Floor, <br />
            B - Block, 12th Main Road, <br />
            AECS Layout, Singasandra, <br />
            Bangalore, Karnataka - 560068
          </p>
        </div>
      </div>
    </div>
  );
}