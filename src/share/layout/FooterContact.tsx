import { FooterContactConfig } from "@/share/common/types";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";

const iconMap = {
  tel: Phone,
  linkedin: Linkedin,
  email: Mail,
  github: Github,
  whatsapp: MessageCircle,
} as const;

const FooterContact = ({ config }: { config: FooterContactConfig }) => {
  return (
    <div className="footer-contact">
      <div className="footer-contact__info">
        <p>{config.prof}</p>
        <p>{config.adress}</p>
        <a href={`tel:${config.phone}`}>{config.phone}</a>
        <a href={`mailto:${config.email}`}>{config.email}</a>
      </div>
      <div className="footer-contact__social">
        {config.socialMedia.map((item) => {
          const Icon = iconMap[item.id as keyof typeof iconMap]; // Явное указание типа
          return (
            <a
              href={item.link || "#"}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact__social-item"
            >
              {Icon && <Icon size={24} />}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterContact;
