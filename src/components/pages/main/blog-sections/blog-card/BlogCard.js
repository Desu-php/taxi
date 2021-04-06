import React from 'react'
import './BlogCard.css'

export default function BlogCard(){
    return(
        <div className="news__item">
            <div className="news__item-img">
                <img src="images/image-1.png" alt="img" />
            </div>
            <div className="news__item-title titleS">
                Новогодние праздники. BlaBlaCar подвел результаты
            </div>
            <div className="news__item-text">
                BlaBlaCar проанализировал, как изменились привычки любителей поездок с попутчиками, и
                сравнил показатели с
                прошлогодними.
            </div>
            <a href="#" className="news__item-link link">Читать дальше...</a>
        </div>
    )
}