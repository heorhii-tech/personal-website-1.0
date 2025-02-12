import React from "react";
import { Card } from "@/components/ui/card";

const CodeComponent = () => {
  return (
    <Card className="hidden lg:max-w-[34rem] lg:block mx-auto shadow-lg xl:max-h-[1125px] 2xl:max-h-[1037px] overflow-y-hidden bg-black text-white border-none">
    
        <pre className="bg-black overflow-x-auto ">
          <code className="text-green-400">
{`import React from "react";
import { AboutMeConfig } from "../../share/common/types";

interface AboutMeProps {
  config: AboutMeConfig;
}

const AboutMe: React.FC<AboutMeProps> = ({ config }) => {
  return (
    <section className="about-me">
      <div className="about-me__media">
        <img className="about-me__image" src={config.image}/>
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

.about-me{
    @apply py-[60px]  gap-[30px];
    @apply lg:flex-row lg:py-[60px];
}
.about-me__container{
    @apply flex items-center justify-between;
    @applymt-[20px] lg:mt-[40px];
}
.about-me__media{
    @apply flex items-center;
}
.about-me__content{
    @apply flex flex-col gap-[30px];
    @apply lg:max-w-[42%] lg:justify-between;
}
.about-me__title{
    @apply bg-zinc-100 text-zinc-900 w-fit px-[16px];
    
}
.about-me__image{
    @apply sm:max-h-[400px] mx-auto w-full;
}
.about-me__description-wrapper{
    @apply flex flex-col gap-[16px];
}
.about-me__description {
    @apply border border-[#27272a] p-[16px];
    @apply text-text-main bg-transparent text-lg;
}

`}
          </code>
        </pre>
     
    </Card>
  );
};

export default CodeComponent;
