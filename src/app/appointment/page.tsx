"use client";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
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

export default function Appointment() {
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
        <div className="flex flex-col desktop:flex-row flex-1 desktop:items-start desktop:justify-between items-center justify-center mx-auto w-full desktop:max-w-[1140px] tablet:max-w-[768px] max-w-[390px] desktop:gap-[64px] tablet:gap-[64px] gap-[32px]">
          <div className="flex flex-col desktop:w-[38%] tablet:items-start tablet:justify-start desktop:items-start desktop:justify-start items-center justify-center w-full gap-4 tablet:gap-6">
            <h1 className="text-4xl tablet:text-[56px] desktop:text-[68px] text-[#221260] desktop:text-left text-center font-semibold leading-[1.14em] w-full">
              Book your appointment
            </h1>
            <p className="text-base text-[#504968] tablet:w-[62%] tablet:mx-auto desktop:text-left text-center font-normal leading-[1.8em] w-full">
              We’re here to help you achieve your best smile! At bright, we
              welcome your questions, feedback
            </p>
          </div>
          <div className="flex flex-col desktop:w-[45%] items-center justify-center w-full p-12 bg-white rounded-3xl">
            <form
              action=""
              className="w-full flex flex-col items-center gap-4 desktop:gap-5"
            >
              <div className="w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  className="rounded-[8px] py-4 px-4 border-[1px] border-[#00000029] w-full placeholder-[#221260]"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  className="rounded-[8px] py-4 px-4 border-[1px] border-[#00000029] w-full placeholder-[#221260]"
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-full rounded-[8px] py-4 px-8 border-[1px] border-[#00000029] p">
                <select name="" id="" className="w-full">
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
              <div className="flex flex-col tablet:flex-row desktop:flex-row w-full gap-4">
                <div className="w-full tablet:w-[50%]">
                  <input
                    type="date"
                    name=""
                    id=""
                    className="rounded-[8px] py-4 px-8 border-[1px] border-[#00000029] w-full"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full tablet:w-[50%]">
                  <input
                    type="time"
                    name=""
                    id=""
                    className="rounded-[8px] py-4 px-8 border-[1px] border-[#00000029] w-full"
                    placeholder="First Name"
                  />
                </div>
              </div>
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
            </form>
          </div>
        </div>
      </motion.section>
      <Reviews />
      <Faq />
      <Footer />
    </>
  );
}
