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

export default function ServicesSixItems() {
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
    {
      title: "Oral Surgery",
      description:
        "Providing pain relief and whitening solutions for infected and affected teeth.",
      image:
        "https://framerusercontent.com/images/HDtVQhZdd84rKsnKmS6Eg7zyZw.png",
    },
    {
      title: "Cavity Protection",
      description:
        "Effective tooth whitening, pain relief, and preservation of teeth affected by infection.",
      image:
        "https://framerusercontent.com/images/YetgHpg3FCKL7reHn6IBWfc4Tk.png",
    },
    {
      title: "Plaque Removal",
      description:
        "Providing pain relief and preserving teeth while whitening infection-affected.",
      image:
        "https://framerusercontent.com/images/ijXepniWqRaqSyxmfuzWwgiP7w.png",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full pt-[100px] py-[60px] px-[20px] desktop:py-[100px] desktop:px-[30px] bg-[#f6f7f9]"
    >
      <div className="flex flex-col flex-1 items-center justify-center mx-auto w-full desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] lg:gap-[80px] md:gap-6 gap-[32px]">
        <h2 className="text-[36px] lg:text-[48px] text-[#221260] font-semibold text-center leading-[1.24em] desktop:w-[50%] tablet:w-[76%]">
          Elevating Oral Health With Personalized Services
        </h2>
        <div className="flex flex-wrap flex-1 items-center tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:grid-rows-3 tablet:items-stretch desktop:grid desktop:grid-cols-3 desktop:grid-rows-2 desktop:items-stretch justify-center mx-auto w-full desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] gap-6 tablet:gap-5 desktop:gap-5">
          {datas.map((data, index) => (
            <div
              key={index}
              className="flex flex-col tablet:w-full items-center justify-center w-full bg-white rounded-[20px] p-10 gap-[20px]"
            >
              <div className="flex flex-col items-center justify-center w-full gap-2">
                <h4 className="text-[28px] text-[#221260] text-center font-semibold leading-[1.4em]">
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
            className="flex flex-col w-fit items-center justify-center overflow-hidden border-[1px] py-[18px] px-6 bg-white rounded-[16px]"
          >
            <p className="text-base text-[#221260] text-center font-medium leading-[1.1em]">
              View All Services
            </p>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
