"use client";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function rootCanal() {
  return (
    <>
      <Navbar />
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
        className="w-full pt-[100px] py-[60px] px-[20px] desktop:pt-[100px] desktop:py-[30px] desktop:pb-[91px] bg-[#f6f7f9]"
      >
        <div className="flex flex-col desktop:flex-row flex-1 desktop:items-start desktop:justify-start items-center justify-center mx-auto w-full desktop:max-w-[1140px] tablet:max-w-[768px] max-w-[390px] desktop:gap-[64px] tablet:gap-[64px] gap-[32px]">
          <div className="flex flex-col items-center justify-center w-full desktop:w-[29%] gap-10">
            <div className="flex flex-col justify-center items-center p-6 bg-white rounded-2xl w-full">
              <a
                href="#"
                className="w-full pt-[11px] pr-0 pb-[11px] pl-8 text-xl font-semibold text-[#221260] leading-[1.8em] rounded-[8px] hover:bg-[#f6f7f9] hover:text-[#221260] transition-all duration-300 ease-in-out"
              >
                Root Canal
              </a>
              <a
                href="#"
                className="w-full pt-[11px] pr-0 pb-[11px] pl-8 text-xl font-semibold text-[#221260] leading-[1.8em] rounded-[8px] hover:bg-[#f6f7f9] hover:text-[#221260] transition-all duration-300 ease-in-out"
              >
                Cosmetic Dentistry
              </a>
              <a
                href="#"
                className="w-full pt-[11px] pr-0 pb-[11px] pl-8 text-xl font-semibold text-[#221260] leading-[1.8em] rounded-[8px] hover:bg-[#f6f7f9] hover:text-[#221260] transition-all duration-300 ease-in-out"
              >
                Dental Implants
              </a>
              <a
                href="#"
                className="w-full pt-[11px] pr-0 pb-[11px] pl-8 text-xl font-semibold text-[#221260] leading-[1.8em] rounded-[8px] hover:bg-[#f6f7f9] hover:text-[#221260] transition-all duration-300 ease-in-out"
              >
                Oral Surgery
              </a>
              <a
                href="#"
                className="w-full pt-[11px] pr-0 pb-[11px] pl-8 text-xl font-semibold text-[#221260] leading-[1.8em] rounded-[8px] hover:bg-[#f6f7f9] hover:text-[#221260] transition-all duration-300 ease-in-out"
              >
                Cavity Protection
              </a>
              <a
                href="#"
                className="w-full pt-[11px] pr-0 pb-[11px] pl-8 text-xl font-semibold text-[#221260] leading-[1.8em] rounded-[8px] hover:bg-[#f6f7f9] hover:text-[#221260] transition-all duration-300 ease-in-out"
              >
                Plaque Removal
              </a>
            </div>
            <div className="flex flex-row justify-start items-center p-6 bg-[#3f2a8c] rounded-2xl w-full gap-4 pt-9 pr-[54px] pb-9 pl-10">
              <div className="size-10 desktop:size-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#74f4bb"
                  className="w-full h-full"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>{" "}
                </svg>
              </div>
              <div className="flex flex-col items-start justify-center gap-[6px]">
                <p className="text-xl desktop:text-2xl text-white text-left font-semibold leading-[1.8em]">
                  Call us for emergency
                </p>
                <h5 className="text-xl desktop:text-2xl text-white text-left font-semibold leading-[1.8em]">
                  <a href="tel:+4733378901">1800-2677-890</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[10px] desktop:w-[66%] w-full">
            <h1 className="text-[56px] text-[#221260] font-semibold leading-[1.14em] w-full">
              Root Canal
            </h1>
            <div className="flex flex-col items-center justify-center w-full">
              <p className="text-base text-[#666666] font-medium leading-[1.8em]">
                A root canal is a dental procedure used to treat infection or
                damage to the pulp—the innermost part of a tooth. This treatment
                helps save the tooth and prevents the need for extraction.
              </p>
              <br />
              <p className="text-base text-[#666666] font-medium leading-[1.8em]">
                Root canal treatment is a dental procedure designed to address
                issues affecting the pulp, the innermost tissue of the tooth
                that contains nerves and blood vessels. This treatment is vital
                for saving a tooth that has become infected or severely damaged,
                thereby preventing the need for extraction.
              </p>
              <br />
              <div className="w-full h-auto rounded-[10px] aspect-[2535/1596]">
                <img
                  src="https://framerusercontent.com/images/UrqTq1xCCLdJycVQpdlE3EM4et0.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <br />
              <h3 className="text-4xl text-black font-semibold leading-[1.8em]">
                Why is a Root Canal Needed?
              </h3>
              <br />
              <p className="text-base text-[#666666] font-medium leading-[1.8em]">
                The pulp can become compromised due to various factors,
                including deep decay, repeated dental procedures on the tooth,
                cracks or chips, or trauma to the tooth. When the pulp is
                infected or inflamed. Early intervention is crucial, as
                untreated infections can spread to significant health issues.
              </p>
              <br />
              <ol className="w-full list-decimal text-base text-[#666666] font-medium leading-[1.8em]">
                <li>Severe toothache or sensitivity</li>
                <li>Swelling and tenderness in the surrounding gum</li>
                <li>Darkening of the tooth</li>
                <li>Persistent discomfort when chewing or biting</li>
              </ol>
              <br />
              <div className="w-full h-auto rounded-[10px] aspect-[2535/1596]">
                <img
                  src="https://framerusercontent.com/images/QXrauw76JYm3ROJ3FOw1PhTuVY.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="text-4xl text-black font-semibold leading-[1.8em]">
                Benefits of Choosing Root Canal Treatment
              </h3>
              <br />
              <ul className="w-full">
                <li className="text-base text-[#666666] font-medium leading-[1.8em]">
                  <strong>Preservation of Natural Teeth: </strong> Saving your
                  natural tooth helps maintain your bite and overall dental
                  structure.
                </li>
                <br />
                <li className="text-base text-[#666666] font-medium leading-[1.8em]">
                  <strong>Pain Relief: </strong> The procedure alleviates the
                  pain associated with infection or damage.
                </li>
                <br />
                <li className="text-base text-[#666666] font-medium leading-[1.8em]">
                  <strong>Preventing Further Issues: </strong> Addressing the
                  infection promptly reduces the risk of it spreading to
                  neighboring teeth or surrounding gums.
                </li>
                <br />
                <li className="text-base text-[#666666] font-medium leading-[1.8em]">
                  <strong>Cost-Effectiveness: </strong> While a root canal may
                  initially seem costly, it is generally more affordable than
                  extracting a tooth and later replacing it with an implant or
                  bridge.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      <Contact />
      <Footer />
    </>
  );
}
