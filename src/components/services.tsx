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

export default function Services() {
  const datas = [
    {
      title: "Root Canal",
      description:
        "Pain relief and preservation of teeth effective whitening affected by infection.",
      image:
        "https://framerusercontent.com/images/OFvRknkXUSEApCp9C9j9KBZY.jpg",
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Relieving pain and preserving teeth with effective whitening for infected areas.",
      image:
        "https://framerusercontent.com/images/zw24m9Eb5bE8QA4tgBbsPC6NSKU.jpg",
    },
    {
      title: "Dental Implants",
      description:
        "Whitening for infected teeth, alongside pain relief and tooth preservation.",
      image:
        "https://framerusercontent.com/images/XOnM4aWxSIOBdvOD3jJjphubOQ.jpg",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:pt-[112px] lg:px-[30px] lg:pb-[120px] py-[60px] px-[20px] desktop:py-[100px] desktop:px-[30px] bg-[#f6f7f9]"
    >
      <div className="flex flex-col flex-1 items-center justify-center mx-auto w-full desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] lg:gap-[80px] md:gap-6 gap-[32px]">
        <h2 className="text-[36px] lg:text-[48px] text-[#221260] font-medium text-center leading-[1.24em] desktop:w-[50%] tablet:w-[76%]">
          Elevating Oral Health With Personalized Services
        </h2>
        <div className="flex flex-wrap flex-1 items-center justify-center mx-auto w-full desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] gap-6">
          {datas.map((data, index) => (
            <div
              key={index}
              className="flex flex-col desktop:w-[400px] tablet:w-[400px] items-center justify-center w-full bg-white rounded-[20px] p-10 gap-[20px]"
            >
              <div className="flex flex-col items-center justify-center w-full gap-2">
                <h4 className="text-[28px] text-[#221260] text-center font-medium leading-[1.4em]">
                  {data.title}
                </h4>
                <p className="text-base text-[#504968] text-center font-medium leading-[1.8em]">
                  {data.description}
                </p>
              </div>
              <div className="w-full h-auto rounded-[20px] overflow-hidden">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <a
            href="#"
            className="flex flex-col w-fit text-[#221260] items-center justify-center overflow-hidden border-[1px] py-[18px] px-6 bg-transparent rounded-[16px] hover:text-[#74f4bb] hover:opacity-70"
          >
            <p className="text-base  text-center font-medium leading-[1.1em]">
              View All Services
            </p>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
