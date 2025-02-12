import { ContactConfig } from "../../../share/common/types";
import {Separator} from "@/components/ui/separator";
import  ContactCard  from "./ContactCard";
interface ContactProps {
    config: ContactConfig;
}
const  Contact = ({config}: ContactProps) => {
    const {cards_info} = config;
    return (
        <section className="contact">
            <h2 className="contact__title">{config.title}</h2>
            <p className="contact__description">{config.description}</p>
            <Separator className="mt-[20px]" />
          <div className="contact__cards">
            {cards_info.map((card, index) => (
              <ContactCard key={index} config={card} />
            ))}
          </div>
           
        </section>
    );
};
export default Contact;