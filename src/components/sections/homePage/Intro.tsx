"use client";
import React, { useState, useEffect } from "react";
import { IntroConfig } from "../../../share/common/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MatrixEffect from "../../animations/MatrixEffect";
import MainImage from "@/components/skeletons/MainImage";

interface IntroProps {
  config: IntroConfig;
}
const Intro = ({ config }: IntroProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = config.image;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, [config.image]);
  return (
    <div className="section-intro__wrapper">
      <div className="section-intro__content relative">
        <h1 className="section-intro__title">{config.title}</h1>
        <MatrixEffect />
        <div className="section-intro__buttons">
          <Button className="w-full">
            {config.primaryButtonLink && (
              <Link className="" href={config.primaryButtonLink}>
                {config.primaryButtonTitle}
              </Link>
            )}
          </Button>
          <Button className="w-full " variant="secondary">
            {config.secondaryButtonLink && (
              <Link className="" href={config.secondaryButtonLink}>
                {config.secondaryButtonTitle}
              </Link>
            )}
          </Button>
        </div>
      </div>
      <div className="section-intro__media">
        {!isImageLoaded ? (
          <MainImage />
        ) : (
          <img
            className={`section-intro__image transition-opacity duration-500 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={config.image}
            alt="Intro Image"
            
          />
        )}
      </div>
    </div>
  );
};
export default Intro;
