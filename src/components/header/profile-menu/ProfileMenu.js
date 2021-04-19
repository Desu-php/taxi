import React from 'react'
import './ProfileMenu.css'

export default function ProfileMenu({active}){
    return(
        <nav className={`profile-box ${active?"active":''}`}>
            <ul className="profile-box__list">
                <li className="profile-box__line"><a href="#"><img src="images/icons/home.svg"
                                                                   alt="img"/><span>Управление</span></a>
                </li>
                <li className="profile-box__line"><a href="#"><img src="images/icons/vashi-poezdki.svg"
                                                                   alt="img"/><span>Ваши поездки</span></a>
                </li>
                <li className="profile-box__line"><a href="#"><img src="images/icons/vhodashie.svg"
                                                                   alt="img"/><span>Входящие</span></a></li>
                <li className="profile-box__line"><a href="#"><img src="images/icons/profile.svg"
                                                                   alt="img"/><span>Профиль</span></a>
                </li>
                <li className="profile-box__line"><a href="#"><img src="images/icons/pay.svg"
                                                                   alt="img"/><span>Оплата</span></a></li>
                <li className="profile-box__line"><a href="#"><img src="images/icons/exit.svg" alt="img"/><span>Выйти</span></a></li>
            </ul>
        </nav>
    )
}
