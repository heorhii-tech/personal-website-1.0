import { CONTACT_CONFIG } from "../../share/common/common";
import Contact from "@/components/sections/contact/Contact";
const ContactPage = () => {
  return (
    <div className="contact-page mx-auto">
      <div className="container mx-auto">
        <Contact config={CONTACT_CONFIG} />
      </div>
    </div>
  );
};

export default ContactPage;
