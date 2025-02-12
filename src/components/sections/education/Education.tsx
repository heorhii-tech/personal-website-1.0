"use client";
import { useState, useEffect } from "react";
import { EducationConfig } from "../../../share/common/types";
import EducationCarousel from "./EducarionCarousel";
import EducationCard from "./EducationCard";
interface EducationProps {
    config: EducationConfig[];
}
export const Education = ({ config }: EducationProps) => {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLaptop(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsLaptop(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return (
    <section className="education">
      {isLaptop ? (
        <EducationCarousel config={config} />
      ) : (
        <div className="mt-[40px] education-list__wrapper flex flex-col gap-[20px] mx-auto justify-center items-center max-w-full px-[20px]">
        {config.map((education, index) => (
          <EducationCard key={index} config={education} />
        ))}
        </div>
      )}
    </section>
  );
};
