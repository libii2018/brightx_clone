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

export default function Offer() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:pt-[130px] lg:px-[30px] lg:pb-[130px] py-[60px] px-[20px] md:px-[80px] md:py-[30px] bg-white"
    >
      <div className="flex flex-col desktop:flex-row flex-1 items-center justify-center mx-auto w-full lg:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] lg:gap-[80px] md:gap-6 gap-[32px]">
        <div className="flex flex-col items-start justify-start gap-[48px] desktop:w-[45%] tablet:w-[85%]">
          <h2 className="text-[40px] lg:text-[48px] text-[#221260] font-medium text-left leading-[1.24em] desktop:w-full md:w-[76%]">
            Unlock Your Best Smile With Our Special Offers
          </h2>
          <div className="flex flex-col items-start justify-center gap-4">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="flex flex-col items-center justify-center flex-none h-6 w-6">
                <img
                  src="https://framerusercontent.com/images/gXadJ0mBNbHT1VXNUANmZYaK94.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                Stay connected with our online doctors
              </p>
            </div>

            <div className="flex flex-row items-center justify-center gap-2">
              <div className="flex flex-col items-center justify-center flex-none h-6 w-6">
                <img
                  src="https://framerusercontent.com/images/gXadJ0mBNbHT1VXNUANmZYaK94.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                Help you achieve optimal oral health
              </p>
            </div>

            <div className="flex flex-row items-center justify-center gap-2">
              <div className="flex flex-col items-center justify-center flex-none h-6 w-6">
                <img
                  src="https://framerusercontent.com/images/gXadJ0mBNbHT1VXNUANmZYaK94.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                We offer a comprehensive range of services
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center">
            <a
              href="#"
              className="flex flex-col w-fit items-center justify-center overflow-hidden py-[18px] px-6 bg-[#74f4bb] rounded-[16px]"
            >
              <p className="text-base text-[#221260] text-center font-medium leading-[1.1em]">
                Book An Appointment
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-[20px] aspect-[1.2076923076923076/1] desktop:w-[49%] tablet:w-[85%] w-full h-auto">
          <img
            src="https://framerusercontent.com/images/txPO8EELcuIl5AM62SII8m0xo.png"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}
