import React from "react";
import {
  INTRO_FIRST_SECTION,
  ABOUT_ME_CONFIG,
  QUOTES_CONFIG,
} from "@share/common/common";
import Intro from "@/components/sections/homePage/Intro";
import AboutMe from "@/components/sections/homePage/AboutMe";
import QuoteComponent from "@/components/sections/homePage/QuoteSlider";

const Home = () => {
  return (
    <div className="home-page mx-auto">
      <div className="container mx-auto">
        <Intro config={INTRO_FIRST_SECTION} />
        <QuoteComponent config={QUOTES_CONFIG} />
        <AboutMe config={ABOUT_ME_CONFIG} />
      </div>
    </div>
  );
};
export default Home;
