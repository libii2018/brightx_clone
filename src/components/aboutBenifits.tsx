"use client";
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

export default function AboutBenifits() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:pt-[100px] py-[60px] px-[20px] md:px-[30px] md:py-[30px] bg-white"
    >
      <div className="flex flex-col desktop:flex-row flex-1 items-center justify-center mx-auto w-full desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] desktop::gap-[60px] md:gap-6 gap-[32px]">
        <div className="flex flex-col items-center justify-center desktop:w-[48%] w-full h-auto aspect-[1.4272727272727272/1] rounded-[20px] overflow-hidden tablet:w-[85%]">
          <img
            src="https://framerusercontent.com/images/V3bcE8TMBZ6vE53dVHM94lrhj28.png"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center desktop:w-[48%] tablet:justify-start w-full gap-4 desktop:gap-20 tablet:w-[85%]">
          <div className="flex flex-col items-center justify-center tablet:justify-start tablet:items-start gap-4 tablet:gap-5 desktop:gap-5 w-full">
            <h2 className="text-4xl desktop:text-[48px] tablet:text-[48px] text-[#221260] font-medium leading-[1.24em] w-full text-left">
              Benefits of choosing us
            </h2>
            <p className="text-base text-[#504968] font-medium leading-[1.8em] w-full text-left tablet:w-[91%] desktop:w-full">
              We believe that exceptional dental care goes beyond just treating
              teeth. Here are some of the key benefits you’ll experience when
              you choose us for your dental needs
            </p>
          </div>
          <div className="flex flex-col tablet:grid tablet:grid-cols-2 tablet:grid-rows-3 desktop:grid desktop:grid-cols-2 desktop:grid-rows-3 items-start justify-center w-full gap-4">
            <div className="flex flex-row items-start justify-start gap-3">
              <div className="flex flex-col w-6 h-6 items-center justify-center aspect-[1.4272727272727272/1] rounded-[20px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/DR2rfGIMu8xCsytKqSYClUZZAM.svg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="text-base text-[#221260] font-medium text-left">
                Comprehensive Care
              </p>
            </div>

            <div className="flex flex-row items-start w-full justify-start gap-3">
              <div className="flex flex-col w-6 h-6 items-center justify-center aspect-[1.4272727272727272/1] rounded-[20px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/DR2rfGIMu8xCsytKqSYClUZZAM.svg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="text-base text-[#221260] font-medium text-left">
                State-of-the-Art Technology
              </p>
            </div>

            <div className="flex flex-row items-start w-full justify-start gap-3">
              <div className="flex flex-col w-6 h-6 items-center justify-center aspect-[1.4272727272727272/1] rounded-[20px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/DR2rfGIMu8xCsytKqSYClUZZAM.svg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="text-base text-[#221260] font-medium text-left">
                Comfort and Convenience
              </p>
            </div>

            <div className="flex flex-row items-start w-full justify-start gap-3">
              <div className="flex flex-col w-6 h-6 items-center justify-center aspect-[1.4272727272727272/1] rounded-[20px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/DR2rfGIMu8xCsytKqSYClUZZAM.svg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="text-base text-[#221260] font-medium text-left">
                Affordable Options
              </p>
            </div>

            <div className="flex flex-row items-start w-full justify-start gap-3">
              <div className="flex flex-col w-6 h-6 items-center justify-center aspect-[1.4272727272727272/1] rounded-[20px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/DR2rfGIMu8xCsytKqSYClUZZAM.svg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="text-base text-[#221260] font-medium text-left">
                Preventive Focus
              </p>
            </div>

            <div className="flex flex-row items-start w-full justify-start gap-3">
              <div className="flex flex-col w-6 h-6 items-center justify-center aspect-[1.4272727272727272/1] rounded-[20px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/DR2rfGIMu8xCsytKqSYClUZZAM.svg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="text-base text-[#221260] font-medium text-left">
                Personalized Treatment Plans
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
