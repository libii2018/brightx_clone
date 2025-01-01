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

export default function AboutTeam() {
  return (
    <motion.section
    initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:pt-[100px] py-[60px] px-[20px] md:px-[30px] md:py-[30px] bg-white"
    >
      <div className="flex relative flex-wrap  flex-1 desktop:min-h-[558px] tablet:min-h-[558px] mx-auto items-center justify-center w-full desktop:max-w-[1140px] tablet:max-w-[768px] max-w-[390px]">
        <div className="flex flex-col items-center justify-center w-[325px] h-[325px] tablet:w-[307px] tablet:h-[307px] desktop:absolute desktop:left-[2px] desktop:top-1/2 desktop:-translate-y-1/2 desktop:size-[318px] rounded-[100%] bg-[#3f2a8c] tablet:transform tablet:translate-x-12 z-10">
          <div className="flex flex-row items-center justify-center">
            <div className="text-4xl tablet:text-[56px] desktop:text-[68px] text-[#74f4bb] font-medium tablet:font-semibold desktop:font-semibold leading-[1.4em] w-full text-center">
              123
            </div>
            <p className="text-4xl tablet:text-[56px] desktop:text-[68px] text-[#74f4bb] font-medium tablet:font-semibold desktop:font-semibold leading-[1.4em] w-full text-center">
              k
            </p>
          </div>
          <p className="text-base text-white font-medium leading-[1.4em] w-full text-center">
            Happy Clients
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-[325px] h-[325px] tablet:w-[307px] tablet:h-[307px] desktop:absolute desktop:size-[318px] rounded-[100%] bg-[#74f4bb] desktop:transform desktop:left-[262px] desktop:top-1/2 desktop:-translate-y-1/2">
          <div className="flex flex-row items-center justify-center">
            <div className="text-4xl tablet:text-[56px] desktop:text-[68px] text-[#3f2a8c] font-medium tablet:font-semibold desktop:font-semibold leading-[1.4em] w-full text-center">
              27
            </div>
            <p className="text-4xl tablet:text-[56px] desktop:text-[68px] text-[#3f2a8c] font-medium tablet:font-semibold desktop:font-semibold leading-[1.4em] w-full text-center">
              +
            </p>
          </div>
          <p className="text-base text-[#504968] font-medium leading-[1.4em] w-full text-center">
            Dedicated Dentist
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-[325px] h-[325px] tablet:w-[307px] tablet:h-[307px] desktop:absolute desktop:size-[318px] rounded-[100%] bg-[#74f4bb] tablet:transform tablet:translate-x-12 tablet:-translate-y-12 desktop:right-0 desktop:top-1/2 desktop:-translate-y-1/2">
          <div className="flex flex-row items-center justify-center">
            <div className="text-4xl tablet:text-[56px] desktop:text-[68px] text-[#3f2a8c] font-medium tablet:font-semibold desktop:font-semibold leading-[1.4em] w-full text-center">
              36
            </div>
            <p className="text-4xl tablet:text-[56px] desktop:text-[68px] text-[#3f2a8c] font-medium tablet:font-semibold desktop:font-semibold leading-[1.4em] w-full text-center">
              +
            </p>
          </div>
          <p className="text-base text-[#504968] font-medium leading-[1.4em] w-full text-center">
            Online Support
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-[325px] h-[325px] tablet:w-[307px] tablet:h-[307px] desktop:absolute desktop:size-[318px] rounded-[100%] bg-[#3f2a8c] tablet:transform tablet:-translate-y-12 desktop:left-[539px] desktop:top-1/2 desktop:-translate-y-1/2">
          <div className="flex flex-row items-center justify-center">
            <div className="text-4xl tablet:text-[56px] desktop:text-[68px] text-[#74f4bb] font-medium tablet:font-semibold desktop:font-semibold leading-[1.4em] w-full text-center">
              57
            </div>
            <p className="text-4xl tablet:text-[56px] desktop:text-[68px] text-[#74f4bb] font-medium tablet:font-semibold desktop:font-semibold leading-[1.4em] w-full text-center">
              +
            </p>
          </div>
          <p className="text-base text-white font-medium leading-[1.4em] w-full text-center">
            Clinic Rooms
          </p>
        </div>
      </div>
    </motion.section>
  );
}
