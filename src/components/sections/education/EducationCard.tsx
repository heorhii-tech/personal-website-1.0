import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EducationConfig } from "../../../share/common/types";
interface EducationCardProps {
    config: EducationConfig;
}
const EducationCard = ({config}: EducationCardProps) => {
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle className="text-lg text-white">{config.title}</CardTitle>
        <CardDescription className="text-white text-[16px]">{config.year}</CardDescription>
      </CardHeader>
      <CardContent className="mt-[20px]">
        <p className="text-text-main text-[16px] tracking-wide">{config.tech}</p>
      </CardContent>
      <CardFooter>
        <p className="text-text-main text-[16px] tracking-wide">{config.location}</p>
      </CardFooter>
    </Card>
  );
};
export default EducationCard;
