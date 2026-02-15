import React from "react";
import Hero from "../components/hero/HeroSection";
import About from "../components/about/AboutSection";
import Hours from "../components/hours/OpeningHours";
import Styling from "../components/styling/StylingShowcase";
import Service from "../components/service-section/ServiceSection";
import Team from "../components/team-member/TeamSection";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Hours />
      <Styling />
      <Service />
      <Team />
    </>
  );
};

export default Home;
