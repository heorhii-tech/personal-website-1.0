import React from "react";
import { INTRO_FIRST_SECTION, ABOUT_ME_CONFIG } from "@share/common/common";
import Intro from "@/components/sections/Intro";
import AboutMe from "@/components/sections/AboutMe";
const Home = () => {
    return (
        <div className="home-page mx-auto">
           <div className="container mx-auto">
           <Intro config={INTRO_FIRST_SECTION} />
            <AboutMe config={ABOUT_ME_CONFIG} />
           </div>
        </div>
    );
};
export default Home; 