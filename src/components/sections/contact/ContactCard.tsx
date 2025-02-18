"use client";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

interface ContactCardProps {
  config: {
    id: string;
    title: string;
    link?: string;
  };
}

const ContactCard = ({ config }: ContactCardProps) => {
  let Icon = null;
  let href = "";

  switch (config.id) {
    case "tel":
      Icon = Phone;
      href = `tel:${config.link}`; // Используем протокол tel
      break;
    case "email":
      Icon = Mail;
      href = `mailto:${config.link}`; // Используем протокол mailto
      break;
    case "linkedin":
      Icon = Linkedin;
      href = config.link || ""; // Обычная ссылка для LinkedIn
      break;
    case "github":
      Icon = Github;
      href = config.link || ""; // Обычная ссылка для GitHub
      break;
    default:
      Icon = null;
      href = "";
  }

  return (
    <div className="contact-card" style={{ width: "100%" }}>
      <a
        className="contact-card__link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Icon ? <Icon size={20} /> : null}
        {config.title}
      </a>
    </div>
  );
};

export default ContactCard;
