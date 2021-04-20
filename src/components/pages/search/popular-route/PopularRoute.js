import React from "react";
import './PopularRoute.css'
export default function PopularRoute({from, to}) {
    return (
        <a href="#" className="popular-destinations__item link">
            <div className="popular-destinations__item-wrapper">
                <div className="popular-destinations__item-text">{from}</div>
                <div className="popular-destinations__item-text">{to}</div>
            </div>
            <span className="popular-destinations__item-icon"><img src="images/icons/iconsvg.svg"
                                                                   alt="svg"/></span>
        </a>
    )
}
