import React from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Footer } from "../components/Footer/Footer";
import { About } from "../components/About/About";
import { Service } from "../components/Services/Service";
import { Achievements } from "../components/Achievements/Achievements";
import { Application } from "../components/Application/Application";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Application />
      <Achievements />
      <Footer />
    </>
  );
};
