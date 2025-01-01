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

export default function AboutHero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full pt-[100px] py-[60px] px-[20px] md:px-[30px] md:py-[30px] bg-white"
    >
      <div className="flex flex-col flex-1 items-center justify-center mx-auto w-full desktop:flex-row desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] desktop::gap-[60px] md:gap-6 gap-[32px]">
        <div className="flex flex-col desktop:items-start desktop:flex-1 desktop:justify-start items-center justify-center w-full gap-6">
          <h2 className="text-[36px] tablet:text-[64px] desktop:text-[88px] desktop:text-left tablet:text-left w-full text-center text-[#221260] font-semibold leading-[1.24em]">
            About us
          </h2>
          <div className="flex flex-col lg:mt-auto justify-center desktop:items-start tablet:items-start items-center gap-6">
            <p className="text-base text-[#504968] desktop:text-left tablet:text-left desktop:w-[83%] tablet:w-[83%] text-center font-normal leading-[1.8em]">
              Our dental team has years of experience and is dedicated to
              providing dental care. Our practice offers a variety of payment
              plans and works with many insurance care you deserve without
              financial stress.
            </p>
            <div className="w-full flex flex-col desktop:w-full tablet:w-full desktop:items-start tablet:items-start items-center lg:items-start justify-center">
              <a
                href="#"
                className="flex flex-col w-fit items-center justify-center overflow-hidden py-[18px] px-6 bg-[#74f4bb] rounded-[16px]"
              >
                <p className="text-base text-[#221260] text-center font-semibold leading-[1.1em]">
                  Book An Appointment
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col desktop:flex-row tablet:flex-row desktop:w-[62%] desktop:items-stretch tablet:items-stretch items-center justify-center w-full gap-6">
          <div className="flex flex-col items-center justify-center desktop:w-full tablet:w-[58%] tablet:aspect-[0.838776/1] w-full h-auto aspect-[1.02449/1] rounded-[20px] overflow-hidden">
            <img
              src="https://framerusercontent.com/images/S6NitRrbx2u5pqZWZdF64ed0.png"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="flex flex-col tablet:items-stretch desktop:w-[62%] tablet:w-[40%] w-[350px] items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center desktop::w-full desktop:h-[50%] tablet:w-full tablet:h-[50%] h-[233px] w-full aspect-[1.19313/1] rounded-[20px] overflow-hidden">
              <img
                src="https://framerusercontent.com/images/C4N7y1nCK5qIFmaCpakyCZPkAY.png"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center desktop:w-full desktop:h-[50%] tablet:w-full tablet:h-[50%] h-[233px] w-full p-[61px] bg-[#ffead9] rounded-[20px] overflow-hidden">
              <h2 className="text-[36px] desktop:text-[68px] tablet:text-[68px] text-[#221260] text-center w-full font-semibold leading-[1.24em]">
                1998
              </h2>
              <p className="text-base text-[#221260] text-center w-full font-normal leading-[1.8em]">
                Year founded
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
