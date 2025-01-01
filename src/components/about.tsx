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

export default function About() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:pt-[102px] lg:px-[30px] lg:pb-[130px] py-[60px] px-[20px] md:px-[80px] md:py-[30px] bg-[#3f2a8c]"
    >
      <div className="flex flex-col flex-1 items-center justify-center mx-auto w-full lg:max-w-[1280px] md:max-w-[768px] max-w-[390px] lg:gap-[80px] md:gap-6 gap-[32px]">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center lg:gap-4 gap-4">
          <h2 className="text-[36px] lg:text-[48px] lg:text-left text-center text-white font-medium leading-[1.24em] lg:w-[40%]">
            Bright have expert Doctors and providing best Dental solution
          </h2>
          <div className="flex flex-col lg:mt-auto justify-center lg:items-start items-center gap-6 lg:w-[39%]">
            <p className="text-base text-white lg:text-left text-center font-normal leading-[1.8em]">
              We are more than just a dental practice oral health care for
              patients our mission is to comfortable where you can feel
              confident.
            </p>
            <div className="w-full flex flex-col items-center lg:items-start justify-center">
              <a
                href="#"
                className="flex flex-col w-fit items-center justify-center overflow-hidden py-[18px] px-6 bg-[#74f4bb] rounded-[16px] hover:opacity-70"
              >
                <p className="text-base text-[#221260] text-center font-medium leading-[1.1em]">
                  Learn About Us
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col flex-none lg:flex-row items-center justify-center gap-6">
            <div className="flex flex-col lg:items-start items-center justify-center bg-[#ffead9] lg:w-[41%] lg:pt-[40px] lg:pr-[73px] lg:pb-[40px] lg:pl-[40px] pt-[20px] pr-[30px] pb-[20px] pl-[20px] lg:gap-[95px] md:gap-[53px] gap-[32px] rounded-[20px]">
              <h4 className="text-[28px] text-[#3f2a8c] font-semibold leading-[1.4em] lg:w-[70%]">
                Top-notch Quality Dental Team
              </h4>
              <p className="text-base text-[#504968] font-medium leading-[1.8em]">
                Our dentists and hygienists stay updated on the latest
                advancements in dentistry to ensure you receive the best
                possible treatment.
              </p>
            </div>
            <div className="w-full lg:w-[57%] lg:h-[343px] h-auto aspect-[2.1253644314868803/1] rounded-[20px] overflow-hidden">
              <img
                src="https://framerusercontent.com/images/qnuRUmPVC3kfksX43x2Z8KXTac.png"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center bg-[#cbffe8] lg:w-[28%] lg:pt-[40px] lg:pr-[42px] lg:pb-[38px] lg:pl-[40px] pt-[20px] pr-[30px] pb-[20px] pl-[20px] lg:gap-[70px] md:gap-[35px] gap-[32px] rounded-[20px]">
              <h4 className="text-[28px] text-[#3f2a8c] font-semibold leading-[1.4em]">
                State of the Art Dental Services
              </h4>
              <p className="text-base text-[#504968] font-medium leading-[1.8em]">
                Our comprehensive services are designed to meet your unique
                needs, from routine check-ups to advanced cosmetic solutions.
              </p>
            </div>
            <div className="w-full lg:w-[35%] lg:h-[342px] h-auto aspect-[1.3099415204678362/1] rounded-[20px] overflow-hidden">
              <img
                src="https://framerusercontent.com/images/AypstLT6VjcsSzh9gm71gone4To.png"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col items-start justify-center bg-[#ecffce] lg:w-[33%] lg:pt-[40px] lg:pr-[50px] lg:pb-[40px] lg:pl-[40px] pt-[20px] pr-[30px] pb-[20px] pl-[20px] lg:gap-[70px] md:gap-[35px] gap-[32px] rounded-[20px]">
              <h4 className="text-[28px] text-[#3f2a8c] font-semibold leading-[1.4em] w-[78%]">
                Discount on All Dental Services
              </h4>
              <p className="text-base text-[#504968] font-medium leading-[1.8em]">
                Whether it’s a routine check-up, teeth cleaning, or a cosmetic
                consultation, take advantage of this exclusive 20% discount on
                your first appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
