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

export default function CoreValue() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:pt-[100px] py-[60px] px-[20px] md:px-[30px] md:py-[30px] bg-[#f6f7f9]"
    >
      <div className="flex flex-col flex-1 items-center justify-center mx-auto w-full  desktop:max-w-[1065px] tablet:max-w-[768px] max-w-[390px] desktop:gap-[64px] tablet:gap-[64px] gap-[32px]">
        <h2 className="text-[48px] text-[#221260] font-medium leading-[1.24em] w-full text-center tablet:w-[58%] desktop:w-[58%]">
          The core values that drive everything what we do
        </h2>
        <div className="flex flex-col items-center justify-center tablet:grid tablet:grid-cols-2 tablet:grid-rows-2 desktop:grid desktop:grid-cols-2 desktop:grid-rows-2 gap-6 w-full">
          <div className="flex flex-col items-start justify-start bg-white pt-[24px] px-[28px] pb-[28px] rounded-xl w-full gap-4">
            <h4 className="text-[28px] text-[#221260] font-medium leading-[1.24em] w-full text-left">
              Care & Service
            </h4>
            <p className="text-base text-[#504968] font-medium leading-[1.8em] w-full text-left">
              We prioritize our patients' needs and comfort above all. Every
              decision we make is focused on ensuring a positive and
              personalized experience for each individual.
            </p>
          </div>

          <div className="flex flex-col items-start justify-start bg-white pt-[24px] px-[28px] pb-[28px] rounded-xl w-full gap-4">
            <h4 className="text-[28px] text-[#221260] font-medium leading-[1.24em] w-full text-left">
              Care & Service
            </h4>
            <p className="text-base text-[#504968] font-medium leading-[1.8em] w-full text-left">
              We prioritize our patients' needs and comfort above all. Every
              decision we make is focused on ensuring a positive and
              personalized experience for each individual.
            </p>
          </div>

          <div className="flex flex-col items-start justify-start bg-white pt-[24px] px-[28px] pb-[28px] rounded-xl w-full gap-4">
            <h4 className="text-[28px] text-[#221260] font-medium leading-[1.24em] w-full text-left">
              Care & Service
            </h4>
            <p className="text-base text-[#504968] font-medium leading-[1.8em] w-full text-left">
              We prioritize our patients' needs and comfort above all. Every
              decision we make is focused on ensuring a positive and
              personalized experience for each individual.
            </p>
          </div>

          <div className="flex flex-col items-start justify-start bg-white pt-[24px] px-[28px] pb-[28px] rounded-xl w-full gap-4">
            <h4 className="text-[28px] text-[#221260] font-medium leading-[1.24em] w-full text-left">
              Care & Service
            </h4>
            <p className="text-base text-[#504968] font-medium leading-[1.8em] w-full text-left">
              We prioritize our patients' needs and comfort above all. Every
              decision we make is focused on ensuring a positive and
              personalized experience for each individual.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
