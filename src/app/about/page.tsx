"use client";
import AboutBenifits from "@/components/aboutBenifits";
import AboutHero from "@/components/aboutHero";
import AboutReviews from "@/components/aboutReviews";
import AboutTeam from "@/components/aboutTeam";
import Contact from "@/components/contact";
import CoreValue from "@/components/coreValue";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
import React from "react";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <CoreValue />
      <AboutBenifits />
      <AboutTeam />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
