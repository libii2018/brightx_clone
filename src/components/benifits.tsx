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

export default function Benifits() {
  const datas = [
    {
      title: "Professional Dentist",
      description:
        "Our dedicated team takes the time to understand your unique concerns. We tailor our doctors to suit your individual circumstances",
      image:
        "https://framerusercontent.com/images/k1b8iV5cYETTEDwaOrAnBPpySDo.svg",
    },
    {
      title: "Modern Technology",
      description:
        "We utilize the latest dental technology and techniques to provide effective, efficient, and comfortable treatments.",
      image:
        "https://framerusercontent.com/images/NcFt99ESoJIZCxGAgIenK1g4U.svg",
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "We offer a full range of dental treatments, from preventive care and routine check-ups to cosmetic procedures  services.",
      image:
        "https://framerusercontent.com/images/5NYrgv9Gc04tXWnfTHtgffbl4.svg",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:pt-[84px] lg:px-[30px] lg:pb-[86px] py-[60px] px-[20px] md:px-[80px] md:py-[30px] bg-[#f6f7f9]"
    >
      <div className="flex flex-wrap flex-1 items-center justify-center mx-auto w-full desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] md:gap-6 gap-[32px]">
        {datas.map((data, index) => (
          <div
            key={index}
            className="flex flex-col flex-none h-auto items-start justify-center gap-3 lg:w-[29%] md:w-[46%] w-full"
          >
            <div className="flex flex-col items-center justify-center w-full gap-6">
              <div className="w-[80px] h-[80px]">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="">
                <h5 className="text-[24px] text-[#221260] text-center font-semibold leading-[1.4em]">
                  {data.title}
                </h5>
              </div>
            </div>
            <div className="">
              <p className="text-base text-[#504968] text-center font-medium leading-[1.8em]">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
