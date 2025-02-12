import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ProjectConfig } from "@/share/common/types";

interface ProjectCardProps {
  project: ProjectConfig;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="hover:border-white transition-all duration-300 cursor-pointer">
      <CardHeader>
        <img
          src={project.image}
          alt={project.project}
          className="w-full h-48 object-cover "
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold text-white mt-[10px]">{project.project}</h3>
        {project.warning ? <p className="text-red-500">{project.warning}</p>:<p className="h-[24px]"></p>}
        <h4 className="text-text-main text-[14px] mt-[10px]">{project.subtitle}</h4>
        <Accordion type="single" collapsible>
          <AccordionItem  style={{ color: "white",borderColor: "#27272a" }} value="item-1">
            <AccordionTrigger>More info</AccordionTrigger>
            {project.description.map((paragraph, index) => (
             <AccordionContent key={index}>
                <p>{paragraph}</p>
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
        {/* <div className="mt-2 flex flex-wrap gap-2 text-text-main">Tech</div> */}
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        
          <Link className="w-[50%] text-center py-2 bg-zinc-100 opacity-90 text-zinc-900 shadow-sm hover:bg-zinc-50/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80" href={project.gitLink} target="_blank">
            GitHub
          </Link>
        
          <Link className="w-[50%] text-center py-2 bg-zinc-700 opacity-90 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90" href={project.demoLink} target="_blank">
            Demo
          </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
