import React,{useState} from 'react'
import './Header.css'
import ProfileMenu from "./profile-menu/ProfileMenu";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="header">
            <div className="header-content">
                <a href="#" className="header__logo">
                    <img src="/images/header-logo.svg" alt="logo"/>
                </a>
                <a href="#" className="header__item link">с попутчиками</a>
                <a href="#" className="header__item link">на автобусе</a>
                <div className="header__profile header__profile--mobile">
                    <div className="header__profile-wrapper">
                        <div className="header__profile-username">Махмуд</div>
                        <div className="header__profile-img">
                            <img src="images/passenger-m-02.svg" alt="img"/>
                        </div>
                        <div className="header__profile-arrow" onClick={() => setShowMenu(!showMenu)}><img src="images/icons/arrow-down.svg" alt="img"/></div>
                    </div>
                    <ProfileMenu active={showMenu} />
                </div>
            </div>
            <div className="header__logo--mobile">
                <svg viewBox="0 0 1199.96 1014.39" width="33">
                    <path fill="#054752"
                          d="M1195.16 619.8c-31.2-184-205.8-308-390-276.8l54.4-308.3L662.96 0c-17 37-91 206-127 397 73.3 50 127 128.5 143 223 17.2 100.7-12.3 198.5-72.6 271.7 14.8 18 31.7 34.7 51 49.7 77 60.3 170.2 83.8 261 68.4 184-31.3 308-206 276.8-390z">
                    </path>
                    <path fill="#2dbeff"
                          d="M531.96 418l4-21c-69.8-47.6-157.2-69.3-247-54l54.4-308.4L146.66 0c-17.5 38.4-96.5 218.6-130.7 418-27.5 159.8-26.2 332 58.5 453 18.2 26 40.2 49.7 66.7 70.4 77 60.3 170.2 83.8 261 68.4 83.4-14 154.4-57.7 204.3-118.2-5.5-6.7-10.8-13.6-15.7-20.7-85-121.2-86-293.3-58.7-453z">
                    </path>
                    <path fill="#9ef769"
                          d="M678.96 619.8c-16-94.4-69.7-173-143-223l-4 21c-27.4 160-26 332 58.6 453 5 7.2 10.2 14 15.7 20.8 60.3-73.2 89.8-171 72.7-271.8z">
                    </path>
                </svg>
            </div>
            <div className="header-content">
                <a href="#" className="header__btn link">
                    <span><img src="images/icons/search.svg" alt="img"/></span>
                    <span className="header__btn-text">Найти</span>
                </a>
                <a href="#" className="header__btn link">
                    <span><img src="images/icons/plus.svg" alt="plus"/></span>
                    <span className="header__btn-text">Предложить поездку</span>
                </a>
                <div className="header__profile">
                    <div className="header__profile-wrapper" >
                        <div className="header__profile-username">Махмуд</div>
                        <div className="header__profile-img">
                            <img src="images/passenger-m-02.svg" alt="img"/>
                        </div>
                        <div className="header__profile-arrow" onClick={() => setShowMenu(!showMenu)}><img src="images/icons/arrow-down.svg" alt="img"/></div>
                    </div>
                    <ProfileMenu active={showMenu} />
                </div>
            </div>
        </header>
    )
}
