import React, { useState } from "react";
import Menu from "../Menu/Menu";

import './BurgerMenu.css';

const BurgerMenu = () => {
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [burgerIcon, setBurgerIcon] = useState('burger-solid unclicked');
    const [menuOpen, setOpenMenu] = useState(false);

    const changeMenu = () => {
        if (isMenuClicked) {
            setBurgerIcon('burger-solid unclicked');
            setOpenMenu(false);
            document.getElementById('body').style['overflow-y'] = 'auto';
        } else {
            setBurgerIcon('burger-solid clicked');
            setOpenMenu(true);
            document.getElementById('body').style['overflow-y'] = 'hidden';
        }
        setIsMenuClicked(!isMenuClicked);
    };

    return (
    <>
        <div className= 'burger-icon' onClick = {changeMenu}>
            <div className={burgerIcon}></div>
            <div className={burgerIcon}></div>
            <div className={burgerIcon}></div>
        </div>
        <Menu 
        open={menuOpen} 
        setOpenMenu={setOpenMenu} 
        setBurgerIcon={setBurgerIcon} 
        setIsMenuClicked={setIsMenuClicked}
        />
    </>

    )
}
export default BurgerMenu;