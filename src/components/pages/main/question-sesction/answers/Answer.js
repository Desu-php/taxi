import React from 'react'
import './Answer.css'
export default function  Answer({title, description}){
    return(
        <div className="howItWorks__item">
            <div className="howItWorks__item-title titleS">{title}</div>
            <div className="howItWorks__item-text">
                {description}
            </div>
        </div>
    )
}