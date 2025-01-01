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

export default function Reviews() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:pt-[124px] lg:px-[30px] lg:pb-[130px] py-[60px] px-[20px] desktop:py-[100px] desktop:px-[30px] bg-white"
    >
      <div className="flex flex-col flex-1 items-center justify-center mx-auto w-full desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] lg:gap-[80px] md:gap-6 gap-[32px]">
        <h2 className="text-[36px] lg:text-[48px] text-[#221260] font-medium text-center leading-[1.24em]">
          Trusted by 7500+ Happy Customers
        </h2>
        <div className="flex flex-wrap items-center justify-center w-full desktop:gap-[18px] tablet:gap-[18px] gap-3">
          <div className="flex flex-col items-start justify-center w-full p-6 bg-[#f6f7f9] rounded-[20px] gap-6 desktop:w-[350px] tablet:w-[350px]">
            <div className="flex flex-row items-center justify-center gap-[10px]">
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/ZsEzLdDCweHMSOLRNQYpa7Y2fI.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-between">
                <p className="text-base text-[#221260] font-semibold leading-[1.8em]">
                  Michael R.
                </p>
                <p className="text-base text-[#504968] font-medium leading-[1.8em]">
                  Louis Vuitton
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-6">
              <p className="text-base text-[#221260] font-normal leading-[1.8em]">
                "I had a fantastic experience at Bright ! Dr. Smith was
                attentive and explained everything in detail. The staff was
                friendly and made me feel at home.
              </p>
              <div className="flex flex-row items-start justify-center gap-2">
                <div className="w-[24px] h-[24px]">
                  <img
                    src="https://framerusercontent.com/images/jTgoDJz8CRmnjDbBVq6NdCE6EY.svg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                  4.8/5.0
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-full p-6 bg-[#f6f7f9] rounded-[20px] gap-6 desktop:w-[350px] tablet:w-[350px]">
            <div className="flex flex-row items-center justify-center gap-[10px]">
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/JpSDXb06QpH8e0SCQCiAODJuMGc.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-between">
                <p className="text-base text-[#221260] font-semibold leading-[1.8em]">
                  Darlene Robertson
                </p>
                <p className="text-base text-[#504968] font-medium leading-[1.8em]">
                  Louis Vuitton
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-6">
              <p className="text-base text-[#221260] font-normal leading-[1.8em]">
                "I was nervous about my first visit, but everyone was so
                welcoming and kind. They took great care of me everything
                clearly. I’m so glad I found.
              </p>
              <div className="flex flex-row items-start justify-center gap-2">
                <div className="w-[24px] h-[24px]">
                  <img
                    src="https://framerusercontent.com/images/jTgoDJz8CRmnjDbBVq6NdCE6EY.svg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                  4.7 /5.0
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-full p-6 bg-[#f6f7f9] rounded-[20px] gap-6 desktop:w-[350px] tablet:w-[350px]">
            <div className="flex flex-row items-center justify-center gap-[10px]">
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/UC3RyyIdNZjbHXT7YQKaR2UrA.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-between">
                <p className="text-base text-[#221260] font-semibold leading-[1.8em]">
                  Marvin Franck
                </p>
                <p className="text-base text-[#504968] font-medium leading-[1.8em]">
                  Louis Vuitton
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-6">
              <p className="text-base text-[#221260] font-normal leading-[1.8em]">
                "From the moment I walked in, I felt valued as a patient. Emily
                at the front desk was so helpful, and my cleaning with Sarah was
                excellent
              </p>
              <div className="flex flex-row items-start justify-center gap-2">
                <div className="w-[24px] h-[24px]">
                  <img
                    src="https://framerusercontent.com/images/jTgoDJz8CRmnjDbBVq6NdCE6EY.svg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                  4.6/5.0
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-full p-6 bg-[#f6f7f9] rounded-[20px] gap-6 desktop:w-[350px] tablet:w-[350px]">
            <div className="flex flex-row items-center justify-center gap-[10px]">
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/Fvy1RWts6SQSBBZK0L8ViYIuA08.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-between">
                <p className="text-base text-[#221260] font-semibold leading-[1.8em]">
                  Joan Chalon
                </p>
                <p className="text-base text-[#504968] font-medium leading-[1.8em]">
                  Louis Vuitton
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-6">
              <p className="text-base text-[#221260] font-normal leading-[1.8em]">
                "This one fantastic experience at Bright ! Dr. Smith was
                attentive and explained everything in detail. The staff was
                friendly and made me feell.
              </p>
              <div className="flex flex-row items-start justify-center gap-2">
                <div className="w-[24px] h-[24px]">
                  <img
                    src="https://framerusercontent.com/images/jTgoDJz8CRmnjDbBVq6NdCE6EY.svg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                  4.4/5.0
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-full p-6 bg-[#f6f7f9] rounded-[20px] gap-6 desktop:w-[350px] tablet:w-[350px]">
            <div className="flex flex-row items-center justify-center gap-[10px]">
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/yogivhxrlkq12pyvSQa2OqKZ930.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-between">
                <p className="text-base text-[#221260] font-semibold leading-[1.8em]">
                  Devon Lobern
                </p>
                <p className="text-base text-[#504968] font-medium leading-[1.8em]">
                  Louis Vuitton
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-6">
              <p className="text-base text-[#221260] font-normal leading-[1.8em]">
                "Their team is not only highly skilled but also incredibly
                professional and reliable for my problem solving experience and
                explained.
              </p>
              <div className="flex flex-row items-start justify-center gap-2">
                <div className="w-[24px] h-[24px]">
                  <img
                    src="https://framerusercontent.com/images/jTgoDJz8CRmnjDbBVq6NdCE6EY.svg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                  4.6/5.0
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-full p-6 bg-[#f6f7f9] rounded-[20px] gap-6 desktop:w-[350px] tablet:w-[350px]">
            <div className="flex flex-row items-center justify-center gap-[10px]">
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/QC2NuglF5vCCqp4zWaDdgq33SjM.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-between">
                <p className="text-base text-[#221260] font-semibold leading-[1.8em]">
                  Pk Smith
                </p>
                <p className="text-base text-[#504968] font-medium leading-[1.8em]">
                  Louis Vuitton
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-6">
              <p className="text-base text-[#221260] font-normal leading-[1.8em]">
                "Everyone was so welcoming and kind. They took great care of me
                everything clearly. I’m so glad I found this place with Sarah
                was excellent.
              </p>
              <div className="flex flex-row items-start justify-center gap-2">
                <div className="w-[24px] h-[24px]">
                  <img
                    src="https://framerusercontent.com/images/jTgoDJz8CRmnjDbBVq6NdCE6EY.svg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                  5.0/5.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
