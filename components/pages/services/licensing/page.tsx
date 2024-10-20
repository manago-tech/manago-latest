"use client";
import React from "react";
import image from "@/assets/services-page/blog-2.png";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function blog() {
  return (
    <div className="bg-[#F1EEE766] w-full gap-10 grid grid-cols-1 md:grid-cols-[70%_30%] px-7 sm:px-14 md:px-28 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold marcellus">Manago Licensing</h1>
          <img
            src={image.src}
            className="w-full h-72 object-cover"
            alt="Card Image"
          />
          <p className="text-base mt-3" id="introduction">
            Manago Licensing for the Hospitality Sector is designed to simplify
            the regulatory and legal aspects of running a hospitality business.
            In the hospitality industry, compliance with various laws and
            regulations is crucial to avoid penalties and ensure smooth
            operations. Manago provides a complete solution by offering a wide
            range of licensing, tax, and registration services, allowing you to
            focus on what matters most—your business.
          </p>
        </div>

        <div id="licenses-required" className="flex flex-col gap-2 ">
          <p className="text-xl font-semibold">
            Licenses Required To Start Food Business In India :
          </p>
          <ul className="list-decimal list-inside text-base leading-relaxed pl-2">
            <li>Food License </li>
            <li>Trade License/Eating House License</li>
            <li>Liquor License</li>
            <li>Fire Department NOC</li>
            <li>Shops and Establishment Registration</li>
            <li>Pollution clearance</li>
            <li>License for playing music or videos</li>
            <li>Tax registrations </li>
            <ul className="list-disc list-inside text-base leading-relaxed pl-2">
              <li>Income Tax</li>
              <li>GST (Goods and Service Tax)</li>
              <li>Professional Tax </li>
            </ul>
            <li>Labour law Registrations </li>
            <li>Infrastructure Licenses</li>
          </ul>
        </div>

        <div id="manago-offers" className="flex flex-col gap-8 ">
          <p className="text-xl font-semibold">Here’s What Manago Offers : </p>

          <div id="food-license" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">1. Food License :</p>

            <p className="text-base leading-relaxed">
              Every food business owner including a petty vendor/ hawker needs
              to obtain a Food license from FSSAI. FSSAI stands for the Food
              Safety and Standards Authority of India. The FSSAI license is of 3
              types:
            </p>

            <ul className="list-disc list-inside pl-8 text-base leading-relaxed">
              <li>FSSAI Registration</li>
              <li>FSSAI State License</li>
              <li>FSSAI Central License</li>
            </ul>

            <p className="text-base leading-relaxed mt-4">
              Application for FSSAI Registration / License can be made either
              offline or online. For obtaining the license offline, the food
              business owner shall send an application to the Licensing
              Authority along with requisite fees. However, for online license/
              registration, the Food Licensing and Registration System (FLRS),
              portal launched by FSSAI can be used. On completion of the
              registration process, an FSSAI license number is provided to the
              food business operator. If the food business is operating in more
              than one state a central license will be needed for the head
              office / registered office. The license is issued with varying
              validity from 1 year to 5 years. Heavy penalties are levied on
              operators running a food business without FSSAI
              Registration/License.
            </p>
          </div>

          <div id="trade-license" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">
              2. Trade License/Eating House License :{" "}
            </p>

            <p className="text-base leading-relaxed">
              Food business is usually granted Trade License as an ‘Eating
              House’ under the Municipal Corporation laws of the respective
              States in India. Any food business operator can obtain a trade
              license by making an application to the concerned municipality.
              Typically, the trade licenses issued in most of the States are
              valid for a period of 1 year and the same is renewed on payment of
              yearly fees. If you plan to open more than one outlet, every
              outlet must have a valid trade license from the concerned
              municipality.
            </p>
          </div>

          <div id="liquor-license" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">3. Liquor License : </p>
            <p className="text-base leading-relaxed">
              In case you are planning to serve alcohol along with the food, you
              will also require a liquor license. Selling of alcohol or its
              distribution without a valid liquor license is illegal and
              prohibited. You can approach the State excise department for
              obtaining approval to sell and distribute alcohol. There are many
              different types of Alcohol Licenses, it varies depending on
              whether you are a Star hotel, bar/ pub, selling imported liquor or
              foreign brand or Indian Made Foreign Liquor. To obtain the
              license, you will be needing an identity proof, address proof, NOC
              from the fire department, NOC from the municipal corporation and
              other documents as the State Department may seek.
            </p>
          </div>

          <div id="fire-department-noc" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">4. Fire Department NOC : </p>
            <p className="text-base leading-relaxed">
              The Fire safety laws of most of the States in India consider the
              business of restaurants/ cafes/ hotels/ bakery to be a hazardous
              activity requiring a “No objection Certificate” from the Chief
              Fire Officer before commencing business. To obtain a fire license,
              you will have to submit building plans, model of the building and
              certificate from the Architect, and also fill out a questionnaire
              related to compliance with fire safety rules and regulations.
            </p>
          </div>

          <div
            id="shops-and-establishment-registration"
            className="flex flex-col gap-2"
          >
            <p className="text-xl font-semibold">
              5. Shops and Establishment Registration :{" "}
            </p>
            <p className="text-base leading-relaxed">
              Every owner of a shop or commercial establishment, having more
              than 10 employees, must obtain a shop and establishment
              registration from the respective State Labour Department.  This
              process has moved online in the recent past. This registration is
              typically valid for 5 years and thereafter it shall be renewed.
              Currently, some of the States are issuing Shops and Establishment
              Registrations, with lifetime validity on payment of renewal fees.
            </p>
          </div>

          <div id="pollution-clearance" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">6. Pollution clearance :</p>
            <p className="text-base leading-relaxed">
              Food business is considered as a polluting industry given the
              smoke emissions from the cooking process and washings of food
              waste. Therefore your food business will need a pollution license/
              Certificate or consent to establish your business and Consent to
              operate from the State Pollution Control Board.  The category
              under which you will need a license will depend on the type and
              scale of operations of your business. You can see below the
              category wise separation given by the Central Pollution Control
              Board for hotels/restaurants.
            </p>
            <ul className="list-disc list-inside pl-8 text-base leading-relaxed">
              <li>Hotels (Big) – Red Category</li>
              <li>Medium-Scale Hotels – Orange Category</li>
              <li>Non-alcoholic Beverages (Soft drink) – Orange Category</li>
              <li>Small Bakery/Confectionery – Green Category</li>
              <li>Small Hotels – Green Category</li>
            </ul>
          </div>

          <div id="license-for-playing-music-or-videos"
            className="flex flex-col gap-2"
          >
            <p className="text-xl font-semibold">
              7. License for playing music or videos :
            </p>
            <p className="text-base leading-relaxed">
              If you wish to play some pre-recorded music in your cafe/
              restaurant/ hotel to accompany the Food you serve, you need to
              obtain a public performance license issued by Phonographic
              Performance Limited to avoid facing copyright infringement suits.
              This license aims to protect the interest of the artists who
              create the music or compose the lyrics and the owners of such
              creative/artistic works. In the majority of the cases, the public
              performance license is valid for 1 year.
            </p>
          </div>

          <div id="tax-registrations" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">8. Tax registrations : </p>
            <p className="text-base leading-relaxed"></p>
            <ul className="list-disc list-inside pl-8 text-base leading-relaxed">
              <li id="income-tax">
                <span className="text-xl font-medium">Income Tax :</span>
                <p className="text-base leading-relaxed">
                  Every business, including the food industry, shall have a PAN
                  and TAN in the name of the business or in the name of the
                  individual ( in case of a Sole-Proprietorship) in whose name
                  the transactions are to be made. PAN and TAN are two ten-digit
                  unique alphanumeric numbers issued by the Income Tax
                  Department. Every person who deducts or collects tax at source
                  has to apply for the allotment of TAN. As per the recent
                  changes, AADHAR can be used in place of PAN for filing IT
                  Returns but PAN is still essential when it comes to making
                  payments exceeding Rs 50,000.
                </p>
              </li>
              <li id="gst-goods-and-service-tax">
                <span className="text-xl font-medium">
                  GST (Goods and Service Tax) :{" "}
                </span>
                <p className="text-base leading-relaxed">
                  The VAT and Service Tax regime ended with the introduction of
                  GST on 1 July 2017. Under the GST regime, tax is payable if
                  the turnover of Rs.20 lakhs (Rs. 10 lakhs for North Eastern
                  states & Special Category States) is achieved. All business
                  liable to pay GST shall register and obtain GSTIN – a unique
                  Goods and Services Tax Identification Number (GSTIN).
                </p>
              </li>
              <li id="professional-tax">
                <span className="text-xl font-medium">
                  Professional Tax :{" "}
                </span>
                <p className="text-base leading-relaxed">
                  Professional Tax is levied by the local municipality on the
                  salary paid to every individual. The tax rate varies from
                  state to state. For payment of the professional tax, most
                  States issue a registration certificate or an enrolment
                  number, which will be used as a reference for remitting the
                  tax.
                </p>
              </li>
            </ul>
          </div>

          <div id="labour-law-registrations" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">
              9. Labour law Registrations :{" "}
            </p>
            <p className="text-base leading-relaxed">
              There is more than 20 labour law legislation which is in force in
              India. A unified code of wages and a code of social security has
              been introduced by the Government of India to unify the central
              labour laws. The other state-specific laws, still prevail over any
              establishment conducting business in the respective state. Some
              significant labour laws which have registration requirements are
              as under:
            </p>
            <ul className="list-disc list-inside pl-8 text-base leading-relaxed">
              <li>
                <span className="font-medium">
                  Employees State Insurance registration 
                </span>
                 is to be obtained by all establishments, including food
                businesses (excluding Factories) in ESI notified areas, having
                more than 10 employees. Employees earning less than Rs 21,000
                per month are covered under this scheme. Any establishment that
                is exempted from obtaining ESI registration shall obtain an
                Exemption Certificate.
              </li>
              <li>
                <span className="font-medium">
                  Employees Provident Fund registration
                </span>
                 is mandatory for food businesses having 20 or more persons (10
                persons in some states in India). In such cases, employees with
                monthly income less than Rs 15,000 shall be mandatorily covered
                under EPF.
              </li>
              <li>
                <span className="font-medium">
                  Contract Labour Registration
                </span>
                 will apply if you employ more than 20 workers under a
                contract.  They are called contract labourers. Usually, such
                workers are sourced from a manpower supply company for working
                as waiters/ servers/ housekeeping and security personnel. In
                case you employ this model for staffing your business, you will
                need registration as a Principal Employer to these contract
                labourers.
              </li>
            </ul>
          </div>

          <div id="infrastructure-licenses" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">
              10. Infrastructure Licenses :
            </p>
            <p className="text-base leading-relaxed">
              In addition to the above-mentioned licenses, you will need to have
              other licenses which are not specific to the food business but may
              be applicable depending on the infrastructure you invest in for
              your business. Such as, owning a Diesel generator with capacity
              above 500 KVA, requires a Genset registration from the Electrical
              Inspector.
            </p>
            <p className="text-base leading-relaxed mt-4">
              Food Businesses which require to store Diesel, Kerosene, Liquid
              Petroleum Gas (LPG), Boilers, etc. may need a license from PESO if
              the quantum of such flammable materials exceeds the prescribed
              threshold. Here is the link to the PESO website for more details
              on how to obtain Infrastructure license.
            </p>
          </div>

          <p className="text-base font-semibold leading-relaxed mt-4">
            By partnering with Manago Licensing, you have a one-stop solution
            for handling all regulatory, licensing, and financial compliance
            needs, ensuring that your hospitality business remains legally sound
            while you concentrate on delivering quality service to your
            customers.
          </p>
        </div>
      </div>

      <div className=" flex-col gap-8 md:flex hidden">
        <div>
          <p className="text-xl font-semibold">More Services :</p>
          <div className="flex flex-col gap-3 mt-2 py-1 border-l-2 border-[#A8A8A8]">
            {moreServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="flex flex-row items-center gap-2 px-3"
              >
                <p className="text-sm">{service.title}</p>
                <SquareArrowOutUpRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xl font-semibold">More Services :</p>
          <div className="flex flex-col gap-3 mt-2 py-1 border-l-2 border-[#A8A8A8]">
            {pageHeaders.map((service, index) => (
              <div key={index} className="flex flex-col gap-2 px-3">
                <Link href={service.id} className="text-sm">
                  {service.title}
                </Link>
                {service.subSections && (
                  <ul className="pl-4 leading-relaxed">
                    {service.subSections.map((subSection, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subSection.id} className="text-sm">
                          {subSection.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const moreServices = [
  {
    title: "Restoestate",
    link: "/our-services/restoestate",
  },
  {
    title: "Interior",
    link: "/our-services/interior",
  },
  {
    title: "Sign Board",
    link: "/our-services/signboard",
  },
  {
    title: "Kitchen Equipment",
    link: "/our-services/kitchen-equipment",
  },
  {
    title: "Furniture",
    link: "/our-services/furniture",
  },
  {
    title: "Manpower",
    link: "/our-services/manpower",
  },
  {
    title: "Uniforms",
    link: "/our-services/uniforms",
  },
];

const pageHeaders = [
  {
    title: "Introduction",
    id: "#introduction",
  },
  {
    title: "Licenses Required To Start Food Business In India",
    id: "#licenses-required",
  },
  {
    title: "Here’s What Manago Offers",
    id: "#manago-offers",
  },
  {
    title: "Food License",
    id: "#food-license",
  },
  {
    title: "Trade License/Eating House License",
    id: "#trade-license",
  },
  {
    title: "Liquor License",
    id: "#liquor-license",
  },
  {
    title: "Fire Department NOC",
    id: "#fire-department-noc",
  },
  {
    title: "Shops and Establishment Registration",
    id: "#shops-and-establishment-registration",
  },
  {
    title: "Pollution clearance",
    id: "#pollution-clearance",
  },
  {
    title: "License for playing music or videos",
    id: "#license-for-playing-music-or-videos",
  },
  {
    title: "Tax registrations",
    id: "#tax-registrations",
    subSections: [
      { title: "Income Tax", id: "#income-tax" },
      { title: "GST (Goods and Service Tax)", id: "#gst-goods-and-service-tax" },
      { title: "Professional Tax", id: "#professional-tax" },
    ],
  },
  {
    title: "Labour law Registrations",
    id: "#labour-law-registrations",
  },
  {
    title: "Infrastructure Licenses",
    id: "#infrastructure-licenses",
  },
];
