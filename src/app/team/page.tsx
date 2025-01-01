"use client";
import Contact from "@/components/contact";
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

export default function Team() {
  const datas = [
    {
      name: "Dr. Jane Smith, DDS",
      poste: "Lead Dentist",
      image:
        "https://framerusercontent.com/images/tZxozfhP6q6Vc3YJzaOT3RiKQ.png?scale-down-to=512",
    },
    {
      name: "Dr. Mark Johnson",
      poste: "Cosmetic Dentist",
      image:
        "https://framerusercontent.com/images/xyqdtRZtuYfUe90EU151mIOoU.png",
    },
    {
      name: "Sarah Thompson, RDH",
      poste: "Cosmetic Dentist",
      image:
        "https://framerusercontent.com/images/a7NwsCQ756JiTgZtZkKnOX55Jpk.png",
    },
    {
      name: "Emily Rivera",
      poste: "Lead Dentist",
      image:
        "https://framerusercontent.com/images/bf7zdpIj4o89PlQkk5jLsF0Zyk.png",
    },
    {
      name: "Dr. Mark Johnson",
      poste: "Lead Dentist",
      image:
        "https://framerusercontent.com/images/3toLalgGsxNksG6nDEmN1W50qeQ.png",
    },
    {
      name: "Nataliya cushion",
      poste: "Lead Dentist",
      image:
        "https://framerusercontent.com/images/W9x5dhJVeC4joLexnO8SQz8mEW4.png",
    },
  ];
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
              Meet the doctors
            </h1>
            <p className="text-base text-[#504968] text-center font-normal leading-[1.8em] tablet:w-[76%] desktop:w-[45%] w-full">
              Each member brings a wealth of experience and expertise to ensure
              you feel comfortable and confident during your visits.
            </p>
          </div>
          <div className="flex flex-col tablet:grid tablet:grid-cols-2 desktop:grid desktop:grid-cols-3 items-center justify-center w-full gap-[22px]">
            {datas.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-full rounded-[20px] overflow-hidden bg-white gap-4 pb-4"
              >
                <div className="flex flex-col items-center justify-center aspect-[0.880109/1] w-full">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-4">
                  <h1 className="text-2xl text-[#221260] text-center font-semibold leading-[1.14em] w-full">
                    {data.name}
                  </h1>
                  <p className="text-base text-[#504968] text-center font-normal leading-[1.8em] w-full">
                    {data.poste}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <Contact />
      <Footer />
    </>
  );
}
