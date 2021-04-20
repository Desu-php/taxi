import React, {useEffect, useState} from 'react'
import useComponentVisible from "../../../hooks/useComponentVisible";
import ProfileMenuList from "./profile-menu-list/ProfileMenuList";

export default function ProfileMenu({mobile = ''}){

    const [showMenu, setShowMenu] = useState(false)
    const { ref, isComponentVisible } = useComponentVisible(true);

    useEffect(() => {
        if (!isComponentVisible){
            setShowMenu(false)
        }
    }, [isComponentVisible])

    const showMenuDropDown = () => {
        if (isComponentVisible){
            setShowMenu(!showMenu)
        }else {
            setShowMenu(false)
        }
    }

    return(
        <div className={`header__profile ${mobile}`}>
            <div className="header__profile-wrapper" ref={ref}  onClick={showMenuDropDown}>
                <div className="header__profile-username">Махмуд</div>
                <div className="header__profile-img">
                    <img src="images/passenger-m-02.svg" alt="img"/>
                </div>
                <div className="header__profile-arrow" ><img src="images/icons/arrow-down.svg" alt="img"/></div>
            </div>
            <ProfileMenuList active={showMenu}/>
        </div>
    )
}
