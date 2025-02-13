import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EducationConfig } from "../../../share/common/types";
interface EducationCarouselProps {
  config: EducationConfig[];
}
const EducationCarousel = ({ config }: EducationCarouselProps) => {
  
  return (
    <Carousel className=" md:max-w-[650px] lg:block w-full lg:max-w-[900px] xl:max-w-[95%] mx-auto md:block">
      <CarouselContent className="-ml-1 ">
        {config.map((education, key) => (
          <CarouselItem key={key} className="pl-1 md:basis-1/2 lg:basis-1/3">
        
              <Card className="min-w-full min-h-[332px] grid">
                <CardHeader className="justify-between h-[142px]">
                  <CardTitle className="text-lg text-white">
                    {education.title}
                  </CardTitle>
                  <CardDescription className="text-white text-[16px]">
                    {education.year}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-[20px] self-start">
                  <p className="text-white text-[16px]">
                    {education.tech}
                  </p>

                </CardContent>
                <CardFooter className="self-end">
                  <p className="text-text-main text-[16px] tracking-wide">
                    {education.location}
                  </p>
                </CardFooter>
              </Card>
              
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default EducationCarousel;
