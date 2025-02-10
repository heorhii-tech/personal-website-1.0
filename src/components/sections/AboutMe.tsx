import React from "react";
import { AboutMeConfig } from "../../share/common/types";


interface AboutMeProps {
  config: AboutMeConfig;
}

const AboutMe: React.FC<AboutMeProps> = ({ config }) => {
  return (
    <section className="about-me">
      <div className="about-me__media">
        <img className="about-me__image" src={config.image} alt="About Me" />
      </div>
      <div className="about-me__content">
        <h2 className="about-me__title">{config.title}</h2>
     <div className="about-me__description-wrapper">
     {config.description.map((paragraph, index) => (
          <p key={index} className="about-me__description">
            {paragraph}
            

          </p>
        ))}
     </div>
      </div>
    </section>
  );
};

export default AboutMe;
