import React from "react";
import Image from "next/image";
import { IntroConfig } from "../../share/common/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface IntroProps {
  config: IntroConfig;
}
const Intro = ({ config }: IntroProps) => {
  return (
    <div className="section-intro__wrapper">
      <div className="section-intro__content">
        <h1 className="section-intro__title">{config.title}</h1>
        <p className="section-intro__description">{config.description}</p>
        <div className="section-intro__buttons">
          <Button style={{ width: "150px" }}>
            {config.primaryButtonLink && (
              <Link className="" href={config.primaryButtonLink}>
                {config.primaryButtonTitle}
              </Link>
            )}
          </Button>
          <Button style={{ width: "150px" }} variant="secondary">
            {config.secondaryButtonLink && (
              <Link className="" href={config.secondaryButtonLink}>
                {config.secondaryButtonTitle}
              </Link>
            )}
          </Button>
        </div>
      </div>
      <div className="section-intro__media">
        <Image
          className="section-intro__image"
          src={config.image}
          alt=""
         
        />
      </div>
    </div>
  );
};
export default Intro;
