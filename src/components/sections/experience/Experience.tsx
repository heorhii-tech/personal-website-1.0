import { ExperienceConfig } from "@/share/common/types";
import ExperienceBlock from "./ExperienceBlock";

interface ExperienceProps {
    config: ExperienceConfig[];
}

const Experience = ({ config }: ExperienceProps) => {
    return (
        <section className="experience">
            {config.map((experience, index) => (
                <ExperienceBlock key={index} config={experience} />
            ))}
        </section>
    );
};

export default Experience;
