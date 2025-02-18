import FooterContact from "./FooterContact";
import FooterNav from "./FooterNav";
import { FOOTER_CONFIG } from "../common/common";
export default function Footer() {
  const { contact, navigation } = FOOTER_CONFIG;
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="footer-wrapper">
          <FooterContact config={contact} />
          <FooterNav navigation={navigation} />
        </div>
      </div>
    </footer>
  );
}
