import React from "react";
import image from "@/assets/services-page/blog-1.png";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function blog() {
  return (
    <div className="bg-[#F1EEE766] w-full gap-10 grid grid-cols-1 md:grid-cols-[70%_30%] px-7 sm:px-14 md:px-28 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold marcellus">Manago Restoestate</h1>
          <p className="text-base marcellus">
            Initiative by New Town Ventures LLP
          </p>
          <img
            src={image.src}
            className="w-full h-72 object-cover"
            alt="Card Image"
          />
        </div>

        <div id="about" className="flex flex-col gap-2 ">
          <p className="text-xl font-semibold">About Us:</p>
          <p className="text-base leading-relaxed">
            MANAGO established in 2019, is known for providing professional
            services to F&B Clients. MANAGO stands for “One Company One Goal,
            Solution For All.” MANAGO is providing all professional services
            required to launch a restaurant from scratch. Our Current services
            include Interior, Kitchen Equipment, Restaurant Furniture,
            Signboards, Uniforms & Hotel Staffing. MANAGO with vast F&B
            clientele is expanding into real-estate.
          </p>
        </div>

        <div id="expect" className="flex flex-col gap-2 ">
          <p className="text-xl font-semibold">What To Expect From MANAGO : </p>
          <p className="text-base leading-relaxed">
            MANAGO with vast network of F&B clientele in Bangalore can help
            clients in finding the right Franchise Opportunity, Property for
            their business, F&B Outlet Rental or Purchase, Management Takeover
            Opportunity or Rebranding of newly acquired F&B Outlet MANAGO with
            relevant experience in F&B industry can help in proper evaluation of
            Properties to keep both buyer & seller in win-win situation. MANAGO
            services are relevant to clients interested in fresh investment into
            Food & Beverages industry. MANAGO helps them to choose the right
            product for them by providing thorough analysis of Projects
            available. MANAGO will take complete responsibility of thorough
            inspection of all properties showcased to protect clients from any
            risky deals.
          </p>
        </div>

        <div id="services" className="flex flex-col gap-2 ">
          <p className="text-xl font-semibold">Our Services :</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="flex flex-col bg-[#F2ECDC] text-black p-4 rounded-lg">
              <p className="text-base leading-relaxed font-medium">
                For Buyers
              </p>
              <ul className="list-decimal list-inside text-base leading-relaxed pl-2">
                <li>Franchise Purchase</li>
                <li>Purchase of F&B Outlet</li>
                <li>Property For Rent</li>
                <li>F&B Outlet For Rent</li>
                <li>Management Takeover Opportunity</li>
                <li>Rebranding of F&B Outlet</li>
              </ul>
            </div>

            <div className="flex flex-col bg-[#F2ECDC] text-black p-4 rounded-lg">
              <p className="text-base leading-relaxed font-medium">
                For Sellers
              </p>
              <ul className="list-decimal list-inside text-base leading-relaxed pl-2">
                <li>Franchise Sales</li>
                <li>Sales of F&B Outlet</li>
                <li>Property Rentals</li>
                <li>F&B Outlet Rentals</li>
                <li>Management Takeovers</li>
                <li>Evaluation of F&B Outlet</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="for-buyers" className="flex flex-col gap-5 ">
          <p className="text-xl font-semibold">For Buyers :</p>

          <div id="franchise-purchase" className="flex flex-col gap-2 px-4">
            <p className="text-xl font-semibold">Franchise Purchase : </p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                Clients passionate about F&B industry without F&B knowledge can
                consider Franchise as best option to start with and can approach
                MANAGO.{" "}
              </li>
              <li>
                MANAGO will evaluate franchise profitability and showcase only
                stable & profitable franchise options.{" "}
              </li>
              <li>
                MANAGO team will provide details of Franchise options and
                meeting will be arranged with owners if client shows interest.{" "}
              </li>
              <li>
                Client is liable to pay Legal Fees for Agreement on successful
                closure of Deal. Buyer needs to bear all Legal fees .{" "}
              </li>
              <li>
                MANAGO will charge 5% or 50 Thousand whichever is higher on
                successful closure of Deal.
              </li>
            </ul>
          </div>

          <div
            id="purchase-of-f&b-outlet"
            className="flex flex-col gap-2 px-4 mt-4"
          >
            <p className="text-xl font-semibold">Purchase Of F&B Outlet : </p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                Clients interested in buying out Running or Shutdown F&B
                Businesses can contact MANAGO.{" "}
              </li>
              <li>
                MANAGO will do evaluation to find out market standard pricing.
                MANAGO team will also check reasons of failure and if place is
                suitable for business then only it will be showcased to clients.{" "}
              </li>
              <li>
                Clients will be shown only potential places, if they show
                interest final meeting will be arranged.{" "}
              </li>
              <li>NOC from building owner will be collected. </li>
              <li>
                On successful closure of Deal , Legal agreement will be
                executed.{" "}
              </li>
              <li>
                MANAGO will charge 5% of deal amount or 50 Thousand whichever is
                higher.
              </li>
            </ul>
          </div>

          <div id="property-for-rent" className="flex flex-col gap-2 px-4 mt-4">
            <p className="text-xl font-semibold">Property For Rent : </p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                MANAGO provide places suitable for Online Kitchen, Cafe &
                Restaurant.{" "}
              </li>
              <li>
                MANAGO team will evaluate place if it fits for Food business.{" "}
              </li>
              <li>
                Suitable Parking Space and NOC from neighbours will be taken.{" "}
              </li>
              <li>
                Power Backup & Proper Required Power for Food business will be
                checked . Power Requirement vary from 15KW to 30KW.{" "}
              </li>
              <li>
                MANAGO will charge 1 month of Rent as service fees on successful
                closure of deal.
              </li>
            </ul>
          </div>

          <div
            id="f&b-outlet-for-rent"
            className="flex flex-col gap-2 px-4 mt-4"
          >
            <p className="text-xl font-semibold">F&B Outlet For Rent : </p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                Clients looking to take Running or Shutdown F&B Businesses on
                rent can contact MANAGO.{" "}
              </li>
              <li>
                MANAGO will do evaluation to find out market standard pricing.
                MANAGO team will also check reasons of failure and if place is
                suitable for business then only it will be showcased to clients.{" "}
              </li>
              <li>
                Clients will be shown only potential places, if they show
                interest final meeting will be arranged.{" "}
              </li>
              <li>NOC from building owner will be collected. </li>
              <li>
                On successful closure of Deal , Legal agreement will be
                executed.
              </li>
              <li>MANAGO will charge 1 month of rent as service fees.</li>
            </ul>
          </div>

          <div
            id="management-takeover-opportunity"
            className="flex flex-col gap-2 px-4 mt-4"
          >
            <p className="text-xl font-semibold">
              Management Takeover Opportunity :{" "}
            </p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                Successful Restauranteurs looking to expand their business can
                look for Management Takeover opportunities . They can utilize
                their established brand to make the place successful and at same
                time can expand their market presence without much capital
                investment.
              </li>
              <li>
                MANAGO team will evaluate all necessary requirements and
                thoroughly analyze reasons of failure before showcasing
                property.
              </li>
              <li>
                NOC From Building Owner , Parking & Proper Power Requirements
                are important Requirements.
              </li>
              <li>MANAGO will charge one month rental as service fees.</li>
            </ul>
          </div>

          <div
            id="rebranding-of-f&b-outlet"
            className="flex flex-col gap-2 px-4 mt-4"
          >
            <p className="text-xl font-semibold">Rebranding of F&B Outlet :</p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                Clients after acquiring any Running or Shutdown properties can
                opt for Rebranding services.{" "}
              </li>
              <li>
                They can opt to change complete Branding , Interior & Menu of
                the place with help of MANAGO. MANAGO can help in Successful
                Re-Launch of Place with new Branding .{" "}
              </li>
              <li>
                MANAGO can also consult in Marketing activities including
                Blogger Marketing.{" "}
              </li>
              <li>
                MANAGO can help in Menu Designing, Food Costing & Staff Training
                also.
              </li>
            </ul>
          </div>
        </div>

        <div id="for-sellers" className="flex flex-col gap-5 ">
          <p className="text-xl font-semibold">For Sellers :</p>

          <div id="franchise-sale" className="flex flex-col gap-2 px-4">
            <p className="text-xl font-semibold">Franchise Sale : </p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                Profitable & Potential F&B Owners with existing franchises can
                approach MANAGO for expansion of franchise network in Bangalore.
              </li>
              <li>
                Profitability & All important factors for a successful franchise
                will be verified by MANAGO team in interest for safety of
                Buyers.{" "}
              </li>
              <li>
                Franchise Deals can be either closed by F&B Owner or MANAGO
                Team.{" "}
              </li>
              <li>
                F&B Owner needs to pay 10% of franchise fees to MANAGO in case
                deal is closed by their own team.
              </li>
              <li>
                F&B Owner needs to pay 30% of franchise fees to MANAGO in case
                deal is closed by MANAGO team.
              </li>
            </ul>
          </div>

          <div
            id="sales-of-f&b-outlet"
            className="flex flex-col gap-2 px-4 mt-4"
          >
            <p className="text-xl font-semibold">Sales Of F&B Outlet : </p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                Clients interested in selling F&B Business can contact MANAGO.{" "}
              </li>
              <li>
                MANAGO will do evaluation to find out market standard price and
                if both ends accept pricing, MANAGO will start look for serious
                buyers.
              </li>
              <li>
                All potential buyers will be shown place , if they show interest
                final meeting will be arranged.{" "}
              </li>
              <li>
                NOC from building owner will be required to proceed further.{" "}
              </li>
              <li>
                On successful closure of Deal , Legal agreement will be
                executed.{" "}
              </li>
              <li>
                MANAGO will charge 5% of of deal amount or 50 Thousand whichever
                is higher.
              </li>
            </ul>
          </div>

          <div id="property-rentals" className="flex flex-col gap-2 px-4 mt-4">
            <p className="text-xl font-semibold">Property Rentals : </p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                Clients looking to provide their vacant property for Food
                business can reach out to MANAGO to get best tenants.
              </li>
              <li>
                MANAGO team will evaluate team if it fits for Food business.
              </li>
              <li>Parking and NOC from neighbors is mandatory Requirement. </li>
              <li>
                Power Backup & Proper Required Power for Food business is
                preferred . Power Requirement vary from 15KW to 30KW.{" "}
              </li>
              <li>MANAGO will charge 1 month of Rent.</li>
            </ul>
          </div>

          <div
            id="f&b-outlet-rentals"
            className="flex flex-col gap-2 px-4 mt-4"
          >
            <p className="text-xl font-semibold">F&B Outlet Rentals : </p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                Clients interested in renting out F&B Business can contact
                MANAGO.{" "}
              </li>
              <li>
                MANAGO will do evaluation to find out market standard price and
                if both ends accept pricing, MANAGO will start look for serious
                buyers.{" "}
              </li>
              <li>
                All potential buyers will be shown place, if they show interest
                final meeting will be arranged.
              </li>
              <li>
                NOC from building owner will be required to proceed further.{" "}
              </li>
              <li>
                On successful closure of Deal , Legal agreement will be
                executed.{" "}
              </li>
              <li>
                MANAGO will charge 1 month rental on successful closure of deal.
              </li>
            </ul>
          </div>

          <div
            id="management-takeovers"
            className="flex flex-col gap-2 px-4 mt-4"
          >
            <p className="text-xl font-semibold">Management Takeovers :</p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                Clients not able to devote time on their Food Business can opt
                for Management Takeover by Successful Restauranteurs.{" "}
              </li>
              <li>
                Evaluation of Property will be done and if expected rentals
                match market standards , process will be initiated.{" "}
              </li>
              <li>
                NOC From Building Owner , Parking & Proper Power Requirements
                are important Requirements.{" "}
              </li>
              <li>MANAGO will charge one month rental as service fees.</li>
            </ul>
          </div>

          <div
            id="evaluation-of-f&b-outlet"
            className="flex flex-col gap-2 px-4 mt-4"
          >
            <p className="text-xl font-semibold">Evaluation of F&B Outlet :</p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li>
                Clients who are not able to decide future of their food business
                can go through Evaluation process to understand market value so
                they can decide whether to sell it or not.{" "}
              </li>
              <li>
                Clients who have done enough to grow business , still things are
                not working out can also opt for consulting. Team will evaluate
                potential reasons and give detailed report along with
                suggestions to improve.{" "}
              </li>
              <li>
                Clients who are looking for places themselves but need Expert
                opinion before finalizing a place can also opt for MANAGO
                services. MANAGO team will be helping out to take right decision
                by evaluation all important parameters required for Food Outlet.
                Client can opt for any service as per their requirements and
                10000+Gst will be charged as service fees.
              </li>
            </ul>
          </div>
        </div>

        <div id="service-policy" className="flex flex-col gap-2 ">
          <p className="text-xl font-semibold">Service Policy</p>
          <ul className="list-disc list-inside text-base leading-relaxed pl-2">
            <li>
              Newtown Ventures LLP (MANAGO) is a partnership firm. Physical
              Meeting at MANAGO Office & Legal Agreement is required to start
              process.
            </li>
            <li>
              MANAGO and Client both need to follow Agreement for smooth
              transaction.
            </li>
            <li>
              All Real-estate services take time so min 30 days can be
              considered as turn around time.
            </li>
            <li>
              10000+Gst will be taken as refundable deposit to start the
              process. Only Serious Buyers and Sellers will be entertained.
            </li>
            <li>
              All Financial transactions need to be done as per Agreement.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-col gap-8 md:flex hidden">
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
    title: "Licensing",
    link: "/our-services/licensing",
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
    title: "About Us",
    id: "#about",
  },
  {
    title: "What To Expect From MANAGO",
    id: "#expect",
  },
  {
    title: "Our Services",
    id: "#services",
  },
  {
    title: "For Buyers",
    id: "#for-buyers",
    subSections: [
      { title: "Franchise Purchase", id: "#franchise-purchase" },
      { title: "Purchase Of F&B Outlet", id: "#purchase-of-f&b-outlet" },
      { title: "Property For Rent", id: "#property-for-rent" },
      { title: "F&B Outlet For Rent", id: "#f&b-outlet-for-rent" },
      {
        title: "Management Takeover Opportunity",
        id: "#management-takeover-opportunity",
      },
      { title: "Rebranding of F&B Outlet", id: "#rebranding-of-f&b-outlet" },
    ],
  },
  {
    title: "For Sellers",
    id: "#for-sellers",
    subSections: [
      { title: "Franchise Sale", id: "#franchise-sale" },
      { title: "Sales Of F&B Outlet", id: "#sales-of-f&b-outlet" },
      { title: "Property Rentals", id: "#property-rentals" },
      { title: "F&B Outlet Rentals", id: "#f&b-outlet-rentals" },
      { title: "Management Takeovers", id: "#management-takeovers" },
      { title: "Evaluation of F&B Outlet", id: "#evaluation-of-f&b-outlet" },
    ],
  },
  {
    title: "Service Policy",
    id: "#service-policy",
  },
];
