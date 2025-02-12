import { ExperienceConfig } from "@/share/common/types";
import { Separator } from "@/components/ui/separator";

interface ExperienceProps {
  config: ExperienceConfig;
}

const ExperienceBlock = ({ config }: ExperienceProps) => {
  const { title, description } = config;

  return (
    <div className="experience-block">
      <h3 className="experience-block__title">{title}</h3>

      <div className="experience-block__content">
        <div className="experience-block__description">
          <h4 className="experience-block__description-title">
            {description[0].title}
          </h4>
          <Separator className="experience-block__separator mb-[20px] mt-[5px]" />
          <ul className="experience-block__skills">
            {description[0].skills.map((skill, index) => (
              <li  key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBlock;
