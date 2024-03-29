import React from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Footer } from "../components/Footer/Footer";
import { About } from "../components/About/About";
import { Service } from "../components/Services/Service";
import { Achievements } from "../components/Achievements/Achievements";
import Application from "../components/Application/Application";
import { Accordian, AccordianItem } from "../components/Accordian/Accordian";
import { FAQ } from "../components/Accordian/FAQ";
import VisaSelector from "../components/Files/Visit";
import VisaSelectorII from "../components/Files/Visa";
import AccreditedAgents from "../components/Agents/AccreditedAgents";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Application />
      <Achievements />
      <FAQ />
      <Footer />
      <AccreditedAgents/>
    </>
  );
};
