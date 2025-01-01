"use client";
import Faq from "@/components/faq";
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

export default function Contact() {
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
        <div className="flex flex-col flex-1 desktop:items-start desktop:justify-start items-center justify-center mx-auto w-full desktop:max-w-[1140px] tablet:max-w-[768px] max-w-[390px] desktop:gap-[64px] tablet:gap-[64px] gap-[32px]">
          <div className="flex flex-col items-center justify-center w-full gap-4 tablet:gap-6">
            <h1 className="text-4xl tablet:text-[56px] desktop:text-[68px] text-[#221260] text-center font-semibold leading-[1.14em] w-full">
              Contact us
            </h1>
            <p className="text-base text-[#504968] text-center font-normal leading-[1.8em] tablet:w-[76%] desktop:w-[45%] w-full">
              Each member brings a wealth of experience and expertise to ensure
              you feel comfortable and confident during your visits.
            </p>
          </div>
          <div className="flex flex-col tablet:flex-row desktop:flex-row items-stretch justify-stretch w-full gap-6 tablet:gap-3 desktop:gap-3">
            <div className="flex flex-col tablet:w-[40%] desktop:w-[30%] items-start justify-start gap-6 p-6 bg-white rounded-3xl w-full">
              <div className="flex flex-col items-start justify-start gap-4 w-full">
                <p className="text-base text-[#504968] text-center font-normal leading-[1.8em] w-full">
                  Location
                </p>
                <h5 className="text-2xl text-[#221260] text-center font-semibold leading-[1.4em] w-full">
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </h5>
              </div>
              <div className="flex flex-col items-start justify-start gap-4 w-full">
                <p className="text-base text-[#504968] text-center font-normal leading-[1.8em] w-full">
                  Contact
                </p>
                <div className="flex flex-col items-start justify-center w-full gap-3">
                  <h5 className="text-2xl text-[#221260] text-center font-semibold leading-[1.4em] w-full">
                    <a href="#">(201) 555-0124</a>
                  </h5>
                  <h5 className="text-2xl text-[#221260] text-center font-semibold leading-[1.4em] w-full">
                    <a href="#">hello@bright.com</a>
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-4 w-full">
                <p className="text-base text-[#504968] text-center font-normal leading-[1.8em] w-full">
                  Social Media
                </p>
                <div className="flex flex-row items-center justify-center w-full gap-3">
                  <div className="size-8">
                    <img
                      src="https://framerusercontent.com/images/uB0sZpr3fCFQzvfjKPMbGbErrBg.png"
                      alt=""
                      className="size-full object-center object-cover"
                    />
                  </div>
                  <div className="size-8">
                    <img
                      src="https://framerusercontent.com/images/8GPsOXF0yxwLJlemFww6Lby7RU8.png"
                      alt=""
                      className="size-full object-center object-cover"
                    />
                  </div>
                  <div className="size-8">
                    <img
                      src="https://framerusercontent.com/images/FcQVW1ulTmXHRBIanbKhfOpSDc.png"
                      alt=""
                      className="size-full object-center object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col tablet:w-[60%] desktop:w-[70%] items-center justify-center w-full p-12 bg-white rounded-3xl">
              <form
                action=""
                className="w-full flex flex-col items-center gap-4 desktop:gap-5"
              >
                <div className="flex flex-col desktop:flex-row w-full gap-4">
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
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="rounded-[8px] py-4 px-4 border-[1px] border-[#00000029] w-full placeholder-[#221260]"
                    placeholder="Subject"
                  />
                </div>
                <div className="w-full">
                  <textarea
                    name=""
                    id=""
                    className="rounded-[8px] pt-4 px-4 pb-[60px] border-[1px] border-[#00000029] w-full placeholder-[#221260]"
                    placeholder="Subject"
                  ></textarea>
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
        </div>
      </motion.section>
      <Faq />
      <Footer />
    </>
  );
}
