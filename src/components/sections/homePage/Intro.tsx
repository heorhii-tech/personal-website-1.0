import React from "react";
import { IntroConfig } from "../../../share/common/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MatrixEffect from "../../animations/MatrixEffect";
interface IntroProps {
  config: IntroConfig;
}
const Intro = ({ config }: IntroProps) => {
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
        <img
          className="section-intro__image"
          src={config.image}
          alt=""
         
        />
      </div>
    </div>
  );
};
export default Intro;
