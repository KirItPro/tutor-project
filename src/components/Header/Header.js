import { Link } from 'react-router-dom';
import { linksMenu } from '../linksMenu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './Header.css';

const Header = ({active, setActive}) => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="nav">
                    <BurgerMenu/> 
                    <ul className="nav-items">
                        {
                            linksMenu.map((link, i) => (
                                <Link to={link.path} className='nav-link' key={i}>{link.name}</Link>
                            ))
                        }
                    </ul>
                    <div className="nav-contacts">
                        <Link className="nav-link" onClick={() => setActive(true)}>
                            Контакты
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;