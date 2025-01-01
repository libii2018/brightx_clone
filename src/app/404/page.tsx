"use client";
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

export default function page() {
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
        <div className="flex flex-col flex-1 items-center justify-center mx-auto w-full desktop:max-w-[1140px] tablet:max-w-[768px] max-w-[390px] desktop:gap-[64px] tablet:gap-[64px] gap-[32px]">
          <div className="flex flex-col items-center justify-center aspect-[2.23666/1]  w-[75%]">
            <img
              src="https://framerusercontent.com/images/w6EOVZqyVrLjRLassZ7w5sh0kVo.png"
              alt=""
              className="size-full object-center object-cover"
            />
          </div>
          <div className="flex flex-col w-fit items-center lg:items-start justify-center">
            <a
              href="#"
              className="flex flex-col w-full items-center justify-center overflow-hidden py-[18px] px-6 bg-[#74f4bb] rounded-2xl"
            >
              <p className="text-base text-[#221260] text-center font-medium leading-[1.1em]">
                Back To Homepage
              </p>
            </a>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
