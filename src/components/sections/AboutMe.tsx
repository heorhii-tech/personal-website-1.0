import React from "react";
import { AboutMeConfig } from "../../share/common/types";
import CodeComponent from "../extra/CodeComponent";

interface AboutMeProps {
  config: AboutMeConfig;
}

const AboutMe: React.FC<AboutMeProps> = ({ config }) => {
  return (
    // <section className="about-me">
    //   {/* <h2 className="about-me__title">{config.title}</h2> */}
    //   <div className="about-me__media">

    //     <CodeComponent/>
    //   </div>
    //   <div className="about-me__content">

    //  <div className="about-me__description-wrapper">
    //  {config.description.map((paragraph, index) => (
    //       <p key={index} className="about-me__description">
    //         {paragraph}

    //       </p>
    //     ))}
    //  </div>
    //   </div>
    // </section>
    <section className="about-me">
      <h2 className="about-me__title">{config.title}</h2>
      <div className="about-me__container">
        <div className="about-me__content">
          <div className="about-me__description-wrapper">
            {config.description.map((paragraph, index) => (
              <p key={index} className="about-me__description">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="about-me__media">
          <CodeComponent />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
