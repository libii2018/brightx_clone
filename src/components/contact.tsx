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

export default function Contact() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:px-[30px] lg:py-[130px] py-[60px] px-[20px] md:px-[80px] md:py-[30px] bg-white"
    >
      <div className="flex flex-col flex-1 items-center justify-center mx-auto w-full desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] desktop:gap-[96px] md:gap-6 gap-[32px]">
        <div className="flex flex-col desktop:flex-row items-center desktop:justify-between justify-center tablet:w-[85%] gap-8 w-full">
          <div className="flex flex-col items-center justify-center gap-4 desktop:gap-5 w-full desktop:w-[41%]">
            <div className="flex flex-col items-center desktop:items-start justify-center w-full mb-auto gap-4">
              <h2 className="text-[36px] lg:text-[46px] lg:text-left text-center text-[#221260] font-medium leading-[1.24em]">
                Book An Appointment
              </h2>
              <div className="flex flex-col lg:mt-auto justify-center lg:items-start items-center desktop:gap-10 tablet:gap-10 gap-6">
                <p className="text-base text-[#504968] desktop:text-left text-center font-normal leading-[1.8em]">
                  We’re here to help you achieve your best smile! At bright, we
                  welcome your questions, feedback, and appointment requests.
                </p>
              </div>
            </div>
            <form
              action=""
              className="w-full flex flex-col items-center gap-4 desktop:gap-5"
            >
              <div className="w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  className="rounded-[60px] py-4 px-8 border-[1px] border-[#00000029] w-full placeholder-[#221260]"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full">
                <input
                  type="tel"
                  name=""
                  id=""
                  className="rounded-[60px] py-4 px-8 border-[1px] border-[#00000029] w-full placeholder-[#221260]"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full rounded-[60px] py-4 px-8 border-[1px] border-[#00000029] ">
                <select name="" id="" className="w-full text-[#221260]">
                  <option disabled selected>
                    Select Service
                  </option>
                  <option value="Root Canal">Root Canal</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Oral Surgery">Oral Surgery</option>
                  <option value="Cavity Protection">Cavity Protection</option>
                  <option value="Plaque Removal">Plaque Removal</option>
                </select>
              </div>
              <div className="flex flex-col desktop:flex-row tablet:flex-row items-center justify-center gap-4 w-full">
                <div className="w-full tablet:w-[50%] text-[#221260]">
                  <input
                    type="date"
                    name=""
                    id=""
                    className="rounded-[60px] py-4 px-8 border-[1px] border-[#00000029] w-full placeholder-[#221260]"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full tablet:w-[50%] text-[#221260]">
                  <input
                    type="time"
                    name=""
                    id=""
                    className="rounded-[60px] py-4 px-8 border-[1px] border-[#00000029] w-full placeholder-[#221260]"
                    placeholder="First Name"
                  />
                </div>
              </div>
            </form>
            <div className="w-full flex flex-col items-center lg:items-start justify-center">
              <a
                href="#"
                className="flex flex-col w-full items-center justify-center overflow-hidden py-[18px] px-6 bg-[#74f4bb] rounded-[60px]"
              >
                <p className="text-base text-[#221260] text-center font-medium leading-[1.1em]">
                  Book Now
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-[24px] overflow-hidden w-full aspect-[.9781931464174455/1] desktop:h-[642px] tablet:h-[572px] desktop:w-[49%]">
            <iframe
              src="https://maps.google.com/maps?q=52.37588,4.891295&z=15&output=embed"
              className="w-full h-full object-center object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
