"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

export default function Faq() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="w-full lg:pt-[120px] lg:px-[30px] lg:pb-[130px] py-[60px] px-[20px] desktop:py-[100px] desktop:px-[30px] bg-[#f6f7f9]"
    >
      <div className="flex flex-col flex-1 items-center justify-center mx-auto w-full desktop:max-w-[1280px] tablet:max-w-[768px] max-w-[390px] lg:gap-[80px] md:gap-6 gap-[32px]">
        <h2 className="text-[33px] lg:text-[46px] text-[#221260] font-medium text-center leading-[1.24em]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-wrap items-center justify-center w-full">
          <Accordion type="single" collapsible className="w-full">
            <div className="flex flex-col desktop:flex-row desktop:items-start desktop:justify-start items-center justify-center w-full gap-6">
              <div className="flex flex-col items-center justify-center desktop:items-start desktop:justify-start desktop:w-[48%] w-full gap-6">
                <AccordionItem
                  value="item-1"
                  className="p-6 bg-white rounded-[20px] [&[data-state=open]]:bg-[#74f4bb] w-full"
                >
                  <AccordionTrigger>
                    <h5 className="text-[22px] text-[#221260] font-semibold leading-[1.4em]">
                      Are your treatments safe for children?
                    </h5>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                      During your first visit, we will conduct a comprehensive
                      examination, including X-rays if needed. You’ll also
                      discuss your dental history and any concerns with our
                      team. Our goal is to create plan that suits your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="p-6 bg-white rounded-[20px] [&[data-state=open]]:bg-[#74f4bb] w-full"
                >
                  <AccordionTrigger>
                    <h5 className="text-[22px] text-[#221260] font-semibold leading-[1.4em]">
                      Do you offer emergency dental services?
                    </h5>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                      Your first visit will include a detailed examination, with
                      X-rays if required, and a conversation about your dental
                      history to develop a customized treatment plan.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="p-6 bg-white rounded-[20px] [&[data-state=open]]:bg-[#74f4bb] w-full"
                >
                  <AccordionTrigger>
                    <h5 className="text-[22px] text-[#221260] font-semibold leading-[1.4em]">
                      What should I expect during my first visit?{" "}
                    </h5>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                      At your first appointment, we’ll perform a full
                      examination, including X-rays if necessary, and address
                      your dental history to design a plan that fits your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="p-6 bg-white rounded-[20px] [&[data-state=open]]:bg-[#74f4bb] w-full"
                >
                  <AccordionTrigger>
                    <h5 className="text-[22px] text-[#221260] font-semibold leading-[1.4em]">
                      What is the best teeth whitening option?{" "}
                    </h5>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                      Your initial visit will involve a comprehensive exam, with
                      X-rays if needed, followed by a discussion of your dental
                      history to create a plan tailored to your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div className="flex flex-col items-center justify-center desktop:items-start desktop:justify-start desktop:w-[48%] w-full gap-6">
                <AccordionItem
                  value="item-5"
                  className="p-6 bg-white rounded-[20px] [&[data-state=open]]:bg-[#74f4bb] w-full"
                >
                  <AccordionTrigger>
                    <h5 className="text-[22px] text-[#221260] font-semibold leading-[1.4em]">
                      Do you offer emergency dental services?{" "}
                    </h5>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                      On your first visit, we will carry out a full examination,
                      including X-rays if required, and review your dental
                      history to develop a treatment plan that meets your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-6"
                  className="p-6 bg-white rounded-[20px] [&[data-state=open]]:bg-[#74f4bb] w-full"
                >
                  <AccordionTrigger>
                    <h5 className="text-[22px] text-[#221260] font-semibold leading-[1.4em]">
                      How long does a typical dental procedure take?{" "}
                    </h5>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                      On your first visit, we will carry out a full examination,
                      including X-rays if required, and review your dental
                      history to develop a treatment plan that meets your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="p-6 bg-white rounded-[20px] [&[data-state=open]]:bg-[#74f4bb] w-full"
                >
                  <AccordionTrigger>
                    <h5 className="text-[22px] text-[#221260] font-semibold leading-[1.4em]">
                      What are the signs that I need to see a dentist?{" "}
                    </h5>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-[#221260] font-medium leading-[1.8em]">
                      On your first appointment, we’ll complete a comprehensive
                      examination, including X-rays if needed, and discuss your
                      dental history to develop a personalized care plan.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
}
