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

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:px-[30px] lg:py-[120px] py-[60px] px-[20px] md:px-[80px] md:py-[30px] bg-[#3f2a8c]"
    >
      <div className="flex flex-col flex-1  items-center justify-center mx-auto w-full desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] desktop:gap-[120px] tablet:gap-[56px] md:gap-6 gap-[32px]">
        <div className="flex flex-col desktop:flex-row desktop:items-start flex-1 items-center justify-center desktop:gap-[96px] tablet:gap-[56px] md:gap-6 gap-[32px]">
          <div className="flex flex-col items-start justify-center gap-5 desktop:w-[34%] tablet:w-[50%] desktop:mr-auto tablet:mr-auto w-full">
            <div className="w-[160px] h-[44px]">
              <img
                src="https://framerusercontent.com/images/q3Opme4SQlG2cxCKpOLVwCFCc.svg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <p className="text-[#f6f7f9] text-base font-medium leading-[1.8em]">
              Whether you’re a new patient or a long-time member of our dental
              family, our team is ready to assist you.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-start w-full gap-6 desktop:w-[48%]">
            <div className="flex flex-col items-start justify-start gap-6 desktop:w-[30%] tablet:w-[30%] w-[43%]">
              <p className="text-[20px] text-white font-semibold leading-[1.8em]">
                Menu
              </p>
              <div className="flex flex-col items-start justify-start gap-3">
                <a
                  href="#"
                  className="block text-base text-white font-medium leading-[1.8em]"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block text-base text-white font-medium leading-[1.8em]"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block text-base text-white font-medium leading-[1.8em]"
                >
                  Appointment
                </a>
                <a
                  href="#"
                  className="block text-base text-white font-medium leading-[1.8em]"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-6 desktop:w-[30%] tablet:w-[30%] w-[43%]">
              <p className="text-[20px] text-white font-semibold leading-[1.8em]">
                Services
              </p>
              <div className="flex flex-col items-start justify-start gap-3">
                <a
                  href="#"
                  className="block text-base text-white font-medium leading-[1.8em]"
                >
                  Our Team
                </a>
                <a
                  href="#"
                  className="block text-base text-white font-medium leading-[1.8em]"
                >
                  Service
                </a>
                <a
                  href="#"
                  className="block text-base text-white font-medium leading-[1.8em]"
                >
                  Service Details
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-6 w-full desktop:w-[30%] tablet:w-[30%]">
              <p className="text-[20px] text-white font-semibold leading-[1.8em]">
                Hours
              </p>
              <div className="flex flex-col items-start justify-start gap-3">
                <p className="block text-base text-white font-medium leading-[1.8em]">
                  Sun: CLOSED
                </p>
                <p className="block text-base text-white font-medium leading-[1.8em]">
                  Mon to Sun: 9 AM-7PM
                </p>
                <p className="block text-base text-white font-medium leading-[1.8em]">
                  Sat to Fri: 10AM-7PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col desktop:flex-row tablet:flex-row desktop:justify-between tablet:justify-between items-center justify-center border-t-[1px]  border-[#ffffff1a] pt-6 gap-4 w-full">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center w-6 h-6">
              <img
                src="https://framerusercontent.com/images/0FeZW0GYmW6zE9lSYRKqPVWRVk.svg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-6 h-6">
              <img
                src="https://framerusercontent.com/images/3aZRJTaEMwNO5DPVXW9LqIULPMk.svg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-6 h-6">
              <img
                src="https://framerusercontent.com/images/SGjjXZ8Vdow4ffKfNKmujhrBxH4.svg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-6 h-6">
              <img
                src="https://framerusercontent.com/images/WI00vq4sY5SITvP2OeYH4j7wcmg.svg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <p className="text-sm text-white text-center font-medium leading-[1.8em]">
            © Copyright 2024. All Rights Reserved by FramerBite
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
