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
                        <a className="header-nav__link" href={item.link}>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HeaderNav;