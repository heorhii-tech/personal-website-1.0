import { EXPERIENCE_CONFIG } from "@/share/common/common";
import Experience from "@/components/sections/experience/Experience";

const ExpierencePage = () => {
  return (
    <div className="experience-page">
      <div className="container mx-auto">
        <Experience config={EXPERIENCE_CONFIG} />
      </div>
    </div>
  );
};
export default ExpierencePage;
