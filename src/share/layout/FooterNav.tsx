import Link from "next/link";
interface HeaderNavigation {
  id: number;
  link: string;
  text: string;
}
const FooterNav = ({ navigation }: { navigation: HeaderNavigation[] }) => {
  return (
    <div className="footer-nav">
      {navigation.map((item) => (
        <Link className="footer-nav__link" key={item.id} href={item.link}>
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default FooterNav;
