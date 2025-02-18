import { Education } from "@/components/sections/education/Education";
import { EDUCATION_CONFIG } from "@/share/common/common";

const EducationPage = () => {
  return (
    <div className="education-page">
      <div className="container mx-auto">
        <Education config={EDUCATION_CONFIG} />
      </div>
    </div>
  );
};
export default EducationPage;
