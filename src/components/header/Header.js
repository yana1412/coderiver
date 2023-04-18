import React, { useState } from 'react'

import logo from '../../images/logo.svg'
import menuBtn from '../../images/menu-btn.png'

import './style.css'

function Header() {
    let [isShowMenu, setIsShowMenu] = useState(false)
    return (
        <div className="header">
            <div className='container'>
                <div className="header__wrapper">
                    <a className="logo" href="#">
                        <img className="logo" src={logo} alt="logo" />
                    </a>
                    <div className="menu__wrapper">
                        <ul className={`nav-list ${isShowMenu ? 'active' : ''}`}>
                            <li className="nav-list__item">
                                <a className="nav-list__link" href="#">Clothes</a>
                            </li>
                            <li className="nav-list__item">
                                <a className="nav-list__link" href="#">Sneakers</a>
                            </li>
                            <li className="nav-list__item">
                                <a className="nav-list__link" href="#">Bags</a>
                            </li>
                            <li className="nav-list__item">
                                <a className="nav-list__link" href="#">Accessorize</a>
                            </li>
                        </ul>
                        <button className="menu__btn" onClick={() => { setIsShowMenu(isShowMenu = !isShowMenu) }}>
                            <img className="menu__btn-img" src={menuBtn} />
                        </button>
                        <button className="buy-btn" type="button">
                            BUY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header
