"use client";
import React from "react";
import image from "@/assets/services-page/blog-7.png";
import Link from "next/link";
import { SquareArrowOutUpRight, CalendarDays, UserRoundCheck, UsersRound } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CountUp from 'react-countup';

export default function blog() {
  return (
    <div className="bg-[#F1EEE766] w-full gap-10 grid grid-cols-1 md:grid-cols-[70%_30%] px-7 sm:px-14 md:px-28 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold marcellus">
            Manago Manpower and Training
          </h1>
          <img
            src={image.src}
            className="w-full h-72 object-cover"
            alt="Card Image"
          />
          <p className="text-base mt-3" id="introduction">
            Manago Manpower is a dedicated staffing solution provider
            specializing in the hospitality sector. With a keen understanding of
            the unique demands of hotels, restaurants, and event venues, we
            offer a comprehensive range of manpower services designed to enhance
            operational efficiency and guest satisfaction. Our workforce
            includes highly trained professionals, from front-of-house staff
            such as receptionists and waitstaff to behind-the-scenes experts in
            housekeeping, chefs, kitchen support, and event management. At
            Manago, we pride ourselves on our commitment to excellence, ensuring
            that each team member is equipped with the skills and dedication
            necessary to uphold the highest standards of service. Manago
            Manpower is your trusted partner in providing the right personnel to
            meet your specific needs, helping you deliver exceptional
            hospitality experiences.
          </p>
        </div>

        <div id="our-story" className="flex flex-col gap-2 ">
          <p className="text-xl font-semibold">Our Story :</p>
          <p className="text-base leading-relaxed">
            Manago Manpower was born out of a vision to transform the staffing
            landscape in Bangalore. From our humble beginnings, we have grown
            into a trusted partner for businesses looking to enhance their
            workforce. Our commitment to quality and customer satisfaction has
            driven us to refine our processes, ensuring that we not only meet
            but exceed the expectations of our clients.
          </p>
        </div>

        <div id="trusted-partner" className="flex flex-col gap-2 ">
          <p className="text-xl font-semibold">
            Your Trusted Partner in Hospitality Staffing :
          </p>
          <p className="text-base leading-relaxed">
            At Manago Manpower, we take pride in being a leading provider of
            staffing solutions for the hospitality sector in Bangalore. Since
            our inception in 2019, we have built a reputation for excellence,
            serving over 500 happy clients across hotels, restaurants, and event
            management companies. Our journey began in HSR Layout, where our
            founders recognized the need for reliable and skilled manpower
            tailored specifically for the vibrant hospitality industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-[#F2ECDC] p-4 ">
            <div className="flex flex-col justify-center items-center bg-white text-black p-5 rounded-lg">
              <CalendarDays className="w-10 h-10" />
              <p className="text-2xl leading-relaxed font-bold"><CountUp end={5} duration={5} />yrs+</p>
              <p className="text-sm leading-relaxed text-center">
                In Bangalore Hospitality
              </p>
            </div>

            <div className="flex flex-col justify-center items-center bg-white text-black p-5 rounded-lg">
              <UsersRound className="w-10 h-10" />
              <p className="text-2xl leading-relaxed font-bold"><CountUp end={500} duration={5} />+</p>
              <p className="text-sm leading-relaxed text-center">
              Happy Clients
              </p>
            </div>

            <div className="flex flex-col justify-center items-center bg-white text-black p-5 rounded-lg">
              <UserRoundCheck className="w-10 h-10" />
              <p className="text-2xl leading-relaxed font-bold"><CountUp end={5000} duration={5} />+</p>
              <p className="text-sm leading-relaxed text-center">
              Happy Candidates placed
              </p>
            </div>

          </div>
        </div>

        <div id="why-choose-manago-manpower" className="flex flex-col gap-2 ">
          <p className="text-xl font-semibold">Why Choose Manago Manpower? </p>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed">
              What sets us apart is our rigorous approach to candidate
              verification. We understand the importance of trust in the
              hospitality sector, which is why we conduct comprehensive
              background checks on all our candidates. This includes thorough
              criminal background checks and Aadhar card verification, providing
              our clients with peace of mind and a dependable workforce.
            </p>
            <p className="text-base leading-relaxed">
              With Manago Manpower, you can focus on delivering exceptional
              experiences to your guests, knowing that your staffing needs are
              in capable hands. Join the ranks of our satisfied clients and
              discover the difference that a dedicated manpower partner can make
              for your business.
            </p>
          </div>
        </div>

        <div id="in-house-hiring-team" className="flex flex-col gap-2 ">
          <p className="text-xl font-semibold">
            Working as Your In-House Hiring Team :{" "}
          </p>
          <p className="text-base leading-relaxed">
            At Manago Manpower, we go beyond traditional staffing solutions by
            functioning as an extension of your in-house hiring team. We take
            the time to thoroughly understand your property type, menu
            offerings, and the unique nuances of your operations. Whether you
            manage a luxury hotel, a fine dining restaurant, or a bustling event
            venue, our team ensures that every candidate we place aligns
            perfectly with your brand values and service standards. This
            personalized approach allows us to provide staff who not only
            possess the right skills but also embody the culture and experience
            you wish to deliver to your guests.
          </p>
        </div>

        <div
          id="handholding-and-replacement-guarantee"
          className="flex flex-col gap-2 "
        >
          <p className="text-xl font-semibold">
            Handholding and Replacement Guarantee :{" "}
          </p>
          <p className="text-base leading-relaxed">
            To further support your success, we offer a unique handholding and
            replacement guarantee for three months after placement. Our
            dedicated team is committed to providing ongoing support to ensure a
            seamless integration of new hires into your organization. If any
            candidate does not meet your expectations within this period, we
            will promptly provide a replacement at no additional cost. This
            guarantee reflects our confidence in the quality of our staffing
            solutions and our commitment to your satisfaction. With Manago
            Manpower, you can rest assured that you have a reliable partner
            dedicated to helping you build a strong and effective team, ensuring
            exceptional guest satisfaction from day one.
          </p>
        </div>

        <div id="background-verification" className="flex flex-col gap-2 ">
          <p className="text-xl font-semibold">Background Verification :</p>
          <p className="text-base leading-relaxed">
            At Manago Manpower, we prioritize the integrity and reliability of
            our candidates through a rigorous background verification process.
            Each individual undergoes comprehensive checks, including criminal
            background verification and Aadhar card validation, to ensure they
            meet the highest standards of trustworthiness and professionalism.
            This meticulous approach not only safeguards our clients from
            potential risks but also fosters a secure working environment. By
            providing businesses with verified personnel, we help eliminate
            concerns related to safety and accountability, enabling our clients
            to focus on their core operations with confidence. With Manago
            Manpower, you can be assured that every team member is a valuable
            asset to your organization.
          </p>
        </div>

        <div
          id="manpower-transforming-irregularities"
          className="flex flex-col gap-2 "
        >
          <p className="text-xl font-semibold">
            Manago Manpower Transforming Irregularities in the Unorganized
            Sector :{" "}
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed">
              The hospitality sector faces significant challenges, including
              high attrition rates and a heavy reliance on management for
              staffing solutions. These irregularities can lead to unnecessary
              operational problems, affecting service quality and guest
              satisfaction. At Manago Manpower, we recognize these pain points
              and are dedicated to providing a structured approach to staffing
              that alleviates these issues.
            </p>
            <p className="text-base leading-relaxed">
              Our comprehensive manpower solutions address the root causes of
              high turnover and dependency on managers. By thoroughly vetting
              candidates through our background verification processes,
              including criminal background checks and Aadhar card verification,
              we ensure that our clients receive qualified and reliable
              personnel. This minimizes the need for constant managerial
              oversight, allowing management teams to focus on strategic
              initiatives rather than day-to-day staffing crises.
            </p>
            <p className="text-base leading-relaxed">
              Through our tailored staffing solutions, we aim to stabilize the
              workforce in the hospitality sector, reducing attrition rates and
              streamlining operations. By partnering with Manago Manpower,
              businesses can transform irregularities into a well-organized
              staffing process, enhancing operational efficiency and delivering
              exceptional experiences to their guests. Let us help you build a
              more resilient and effective workforce today!
            </p>
          </div>
        </div>

        <div id="ready-to-get-started" className="flex flex-col gap-2 ">
          <p className="text-xl font-semibold">Ready to Get Started?</p>
          <p className="text-base leading-relaxed">
            Contact us today to learn more about our manpower services and how
            we can support your hospitality staffing needs. Together, let’s
            elevate your business to new heights!
          </p>
        </div>

        <Separator className="my-3 bg-black" />

        <div
          id="introduction-to-manago-hospitality-training"
          className="flex flex-col gap-4"
        >
          <p className="text-xl font-semibold">
            Introduction to Manago Hospitality Training :{" "}
          </p>

          <div id="overview" className="flex flex-col gap-2 ">
            <p className="text-xl font-semibold">Overview :</p>
            <p className="text-base leading-relaxed">
              In the dynamic and ever-evolving world of hospitality, delivering
              exceptional service and maintaining high standards is crucial for
              the success of any establishment. Manago Hospitality Training is
              dedicated to equipping staff with the skills, knowledge, and
              confidence needed to excel in the industry. Our comprehensive
              training programs are designed for restaurants, cafes, hotels,
              QSRs, breweries, and online kitchens, ensuring that every team
              member is prepared to meet and exceed guest expectations.
            </p>
          </div>

          <div id="our-mission" className="flex flex-col gap-2 ">
            <p className="text-xl font-semibold">Our Mission :</p>
            <p className="text-base leading-relaxed">
              At Manago, our mission is to enhance the quality of service in the
              hospitality sector by providing top-tier training solutions. We
              believe that a well-trained staff is the backbone of any
              successful hospitality business. Our goal is to empower employees
              with the necessary tools to create memorable guest experiences and
              foster a positive work environment.
            </p>
          </div>

          <div id="training-program-features" className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Training Program Features :</p>
            <ul className="list-decimal list-outside text-base leading-loose pl-8">
              <li className="my-2">
                <span className="font-medium">Comprehensive Curriculum :</span>{" "}
                Our training programs cover all aspects of hospitality,
                including but not limited to:
                <ul className="list-disc list-outside text-base leading-loose pl-8">
                  <li>
                    <span className="font-medium">
                      Customer Service Excellence:
                    </span>{" "}
                    Developing effective communication skills and understanding
                    guest needs.
                  </li>
                  <li>
                    <span className="font-medium">
                      Food Safety and Hygiene:
                    </span>{" "}
                    Ensuring compliance with health regulations and maintaining
                    cleanliness standards.
                  </li>
                  <li>
                    <span className="font-medium">Bartending Skills: </span>{" "}
                    Mastering mixology, cocktail preparation, and beverage
                    presentation.
                  </li>
                  <li>
                    <span className="font-medium">
                      Menu Engineering and Upselling Techniques:
                    </span>{" "}
                    Understanding menu design, pricing strategies, and
                    increasing average check size.
                  </li>
                  <li>
                    <span className="font-medium">Barista Training: </span>{" "}
                    Learning the art of coffee making, including espresso
                    extraction, milk frothing techniques, and coffee art such as
                    tulips, hearts, and swans.
                  </li>
                  <li>
                    <span className="font-medium">Sales Training: </span>{" "}
                    Equipping staff with effective selling techniques, product
                    knowledge, and strategies to enhance guest engagement and
                    drive sales.
                  </li>
                  <li>
                    <span className="font-medium">
                      Leadership and Team Management:
                    </span>{" "}
                    Training aspiring leaders on how to motivate and manage
                    their teams effectively.
                  </li>
                </ul>
              </li>
              <li className="my-2">
                <span className="font-medium"> Professional Trainers :</span>{" "}
                Our training sessions are conducted by industry experts with
                extensive experience in hospitality. They bring practical
                insights and real-world knowledge, ensuring that the training is
                relevant and applicable to the current market demands.
              </li>

              <li className="my-2">
                <span className="font-medium">Hands-On Training :</span> We
                believe in learning by doing. Our training programs incorporate
                practical sessions where participants can practice skills in a
                simulated environment. This approach enhances retention and
                prepares staff for real-life scenarios.
              </li>

              <li className="my-2">
                <span className="font-medium">Customized Programs :</span>{" "}
                Understanding that each establishment has unique needs, we offer
                tailored training solutions that align with specific
                organizational goals. Whether it’s for new hires or ongoing
                staff development, we create programs that suit your
                requirements.
              </li>

              <li className="my-2">
                <span className="font-medium">Ongoing Support :</span> Our
                commitment to your success doesn’t end with the training
                sessions. We offer ongoing support and resources to help staff
                implement what they’ve learned effectively. Regular follow-ups
                and refreshers ensure that skills remain sharp and up-to-date.
              </li>
            </ul>
          </div>

          <div
            id="nurture-your-employees-working-skill"
            className="flex flex-col gap-2 "
          >
            <p className="text-xl font-semibold">
              Nurture your Employees’ working skill with Manago :{" "}
            </p>
            <p className="text-base leading-relaxed">
              Investing in your staff’s development is an investment in your
              business's success. With Manago Hospitality Training, you can
              elevate your team’s performance and enhance the overall guest
              experience. We are passionate about shaping the future of
              hospitality through professional training, and we look forward to
              partnering with you to achieve excellence in your establishment.
            </p>
          </div>

          <div className="mt-4">
            <p className="text-base font-semibold leading-relaxed ">
              For more information or to schedule a training session, please
              contact us at 7727072790. Thank you for considering Manago
              Hospitality Training as your partner in excellence!
            </p>
          </div>
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
    title: "Restoestate",
    link: "/our-services/restoestate",
  },
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
    title: "Uniforms",
    link: "/our-services/uniforms",
  },
];

const pageHeaders = [
  {
    title: "Our Story",
    id: "#our-story",
  },
  {
    title: "Your Trusted Partner in Hospitality Staffing ",
    id: "#trusted-partner",
  },
  {
    title: "Why Choose Manago Manpower?",
    id: "#why-choose-manago-manpower",
  },
  {
    title: "Working as Your In-House Hiring Team",
    id: "#in-house-hiring-team",
  },
  {
    title: "Handholding and Replacement Guarantee",
    id: "#handholding-and-replacement-guarantee",
  },
  {
    title: "Background Verification",
    id: "#background-verification",
  },
  {
    title:
      "Manago Manpower Transforming Irregularities in the Unorganized Sector",
    id: "#manpower-transforming-irregularities",
  },
  {
    title: "Ready to Get Started?",
    id: "#ready-to-get-started",
  },
  {
    title: "Introduction to Manago Hospitality Training",
    id: "#introduction-to-manago-hospitality-training",
    subSections: [
      {
        title: "Overview",
        id: "#overview",
      },
      {
        title: "Our Mission",
        id: "#our-mission",
      },
      {
        title: "Training Program Features",
        id: "#training-program-features",
      },
      {
        title: "Nurture your Employees’ working skill with Manago",
        id: "#nurture-your-employees-working-skill",
      },
    ],
  },
];
