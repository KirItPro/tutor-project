import {Link} from "react-router-dom";
import { linksMenu } from "../linksMenu";

import './Menu.css';

const Menu = ({open, setOpenMenu, setBurgerIcon, setIsMenuClicked}) => {
    return (
        <div className={open ? 'menu-block open' : 'menu-block'}>
            {linksMenu.map((link, i) => ( 
            <Link to={link.path} key={'burger' + i} className="link-burger" onClick={() => {
                setOpenMenu(false);
                setBurgerIcon('burger-solid unclicked');
                setIsMenuClicked(false)
                document.getElementById('body').style['overflow-y'] = 'auto';
            }}>
            {link.name}
            </Link>
            ))}
        </div>
    )
}

export default Menu;