import React from "react";
import { INTRO_FIRST_SECTION } from "@share/common/common";
import Intro from "@/components/sections/Intro";
const Home = () => {
    return (
        <div className="home-page mx-auto">
           <div className="container mx-auto">
           <Intro config={INTRO_FIRST_SECTION} />
           </div>
        </div>
    );
};
export default Home; 