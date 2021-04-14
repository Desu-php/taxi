import React from 'react'
import './RouteCard.css'

export default function RouteCard({first_text, second_text, price}){
    return(
        <a href="#" className="plan-item">
            <div className="plan-item__content">
                <div className="plan-item__content-text">
                    {first_text}
                    <span className="plan-item__centent-arr"><img src="images/icons/arrow-right.svg"/></span>
                </div>
                <div className="plan-item__content-text">{second_text}</div>
            </div>
            <div className="plan-item__price">
                <span>{price} p.</span>
                <span><img src="images/icons/iconsvg.svg" alt="img"/></span>
            </div>
        </a>
    )
}