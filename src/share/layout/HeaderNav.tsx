import Link from "next/link";
import { HeaderNavigation } from "../common/types";

interface HeaderNavProps {
    navigation: HeaderNavigation[];
}

const HeaderNav: React.FC<HeaderNavProps> = ({ navigation }) => {
    return (
        <nav className="header-nav">
            <ul className="header-nav__list">
                {navigation.map((item) => (
                    <li key={item.id} className="header-nav__item">
                        <Link className="header-nav__link" href={item.link}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HeaderNav;