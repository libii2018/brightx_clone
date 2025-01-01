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

export default function Team() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:px-[30px] lg:py-[120px] py-[60px] px-[20px] md:px-[80px] md:py-[30px] bg-[#3f2a8c]"
    >
      <div className="flex flex-col desktop:flex-row flex-1 items-center justify-center mx-auto w-full desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] desktop:gap-[96px] md:gap-6 gap-[32px]">
        <div className="flex flex-col items-center desktop:items-start justify-center mb-auto gap-4 desktop:w-[39%]">
          <h2 className="text-[36px] lg:text-[48px] lg:text-left text-center text-white font-medium leading-[1.24em]">
            Meet Our Expertise Team Members{" "}
          </h2>
          <div className="flex flex-col lg:mt-auto justify-center lg:items-start items-center desktop:gap-10 tablet:gap-10 gap-6">
            <p className="text-base text-[#f6f7f9] lg:text-left text-center font-normal leading-[1.8em]">
              Our team is dedicated to providing exceptional care and making
              every visit a positive experience. Each member brings unique
              expertise and a passion for helping our patients.
            </p>
            <div className="w-full flex flex-col items-center lg:items-start justify-center">
              <a
                href="#"
                className="flex flex-col w-fit items-center justify-center overflow-hidden py-[18px] px-6 bg-[#74f4bb] rounded-[16px]"
              >
                <p className="text-base text-[#221260] text-center font-medium leading-[1.1em]">
                  View All Doctors{" "}
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center desktop:w-[50%]">
          <div className="flex flex-col tablet:grid tablet:grid-cols-2 tablet:grid-rows-2 desktop:grid desktop:grid-cols-2 desktop:grid-rows-2 items-center justify-center gap-6">
            <div className="flex flex-col items-start justify-center gap-4">
              <div className="w-full h-auto aspect-[.8801089918256131/1] rounded-[20px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/tZxozfhP6q6Vc3YJzaOT3RiKQ.png?scale-down-to=512"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <h5 className="text-[24px] text-white font-semibold leading-[1.4em]">
                  Dr. Jane Smith, DDS
                </h5>
                <p className="text-base text-[#f6f7f9b3] font-medium leading-[1.8em]">
                  Lead Dentist
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <div className="w-full h-auto aspect-[.8801089918256131/1] rounded-[20px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/7jGDOs4H1LTm8Qttb3KOmGec0E.png"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <h5 className="text-[24px] text-white font-semibold leading-[1.4em]">
                  Dr. Mark Johnson
                </h5>
                <p className="text-base text-[#f6f7f9b3] font-medium leading-[1.8em]">
                  Cosmetic Dentist
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <div className="w-full h-auto aspect-[.8801089918256131/1] rounded-[20px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/qlGEUyaQ1MaRMXNUxKOoUFmVl08.png"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <h5 className="text-[24px] text-white font-semibold leading-[1.4em]">
                  Sarah Thompson, RDH
                </h5>
                <p className="text-base text-[#f6f7f9b3] font-medium leading-[1.8em]">
                  Dental Hygienist
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <div className="w-full h-auto aspect-[.8801089918256131/1] rounded-[20px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/fGQ850DUlBKOD8dgzZ4mjiABU.png"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <h5 className="text-[24px] text-white font-semibold leading-[1.4em]">
                  Emily Rivera
                </h5>
                <p className="text-base text-[#f6f7f9b3] font-medium leading-[1.8em]">
                  Administrative Coordinator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
