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

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:pt-[100px] lg:px-[30px] lg:pb-[130px] pt-[100px] px-[20px] pb-[60px] md:px-[80px] md:py-[30px]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto w-full lg:max-w-[1280px] md:max-w-[768px] max-w-[390px] lg:gap-[64px] gap-[32px]">
        <div className="flex flex-col flex-1 items-center justify-center gap-6 lg:gap-[80px]">
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <div className=" flex flex-col items-center justify-center md:justify-start w-full gap-2">
              <div className="w-full">
                <p className="text-[20px] w-full  text-[#3f2a8c] md:text-left text-center font-medium leading-[1.8em]">
                  #1 Dental Clinic in West London
                </p>
              </div>
              <div className="w-full">
                <h1 className="text-[36px] lg:text-[88px] md:text-[64px] w-full text-[#221260] md:text-left text-center font-medium leading-[1.1em]">
                  Smile the way you love most.
                </h1>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center md:justify-start md:items-start">
              <a
                href="#"
                className="flex flex-col w-fit items-center justify-center overflow-hidden py-[13px] px-6 bg-[#74f4bb] rounded-[16px]"
              >
                <p className="text-base text-[#221260] text-center font-medium leading-[1.1em]">
                  Book An Appointment
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full desktop:gap-10 gap-6">
            <div className="w-full aspect-[1.3870967741935485/1] rounded-[24px] h-auto overflow-hidden">
              <img
                src="https://framerusercontent.com/images/80y9kH7YLizIAhLjtMe1gJOthQY.png"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-row items-center justify-center md:justify-start w-full">
                <div className="text-[88px] md:text-[72px] text-[#3f2a8c] text-center font-medium leading-[1.1em]">
                  12
                </div>
                <h1 className="block text-[72px] text-[#3f2a8c] text-center font-medium leading-[1.1em]">
                  +
                </h1>
              </div>
              <div className="">
                <p className="text-base text-[#504968] md:text-left text-center font-medium leading-[1.8em]">
                  We have 10 years of experience with our doctors in providing
                  dental services for our patients
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[43%] lg:h-[658px] md:h-[586px] aspect-[.8282674772036475/1] rounded-[24px] h-auto overflow-hidden">
          <img
            src="https://framerusercontent.com/images/Fy58dh5VeDGy95NdKdwVpbQpRc.png"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}
