import ProjectCard from "./ProjectCard";
import { Separator } from "@/components/ui/separator";
import { ProjectsConfig } from "@/share/common/types";

interface ProjectsProps {
  config: ProjectsConfig;
}

export const Projects = ({ config }: ProjectsProps) => {
  const { fullStack, responsive, javaScript } = config;
  return (
    <section className="projects">
      <div className="projects__type">
          <h2 className="projects__type-title">RESPONSIVE DESIGN PROJECTS</h2>
          <Separator />
          <div className="projects__type-wrapper">
            {responsive.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      <div className="projects__wrapper">
        <div className="projects__type">
          <h2 className="projects__type-title">FULL STACK PROJECTS</h2>
          <Separator />
          <div className="projects__type-wrapper">
            {fullStack.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
        
        <div className="projects__type">
          <h2 className="projects__type-title">PURE JAVA SCRIPT PROJECTS</h2>
          <Separator />
          <div className="projects__type-wrapper">
            {javaScript.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
