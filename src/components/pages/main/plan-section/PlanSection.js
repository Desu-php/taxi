import React from "react";
import RouteCard from "./route-card/RouteCard";

export default function  PlanSection(){
    return(
        <section className="plan">
            <div className="plan__top">
                <div className="container">
                    <div className="plan__top-inner">
                        <div className="plan__top-img">
                            <img src="images/driver.jpg" alt="img" />
                        </div>
                        <div className="plan__content">
                            <div className="plan__top-title title">Куда вы планируете поехать?</div>
                            <div className="plan__top-text">Пусть эта поездка станет самой бюджетной в вашей жизни!
                            </div>
                            <a href="#" className="plan__top-button">Предложить</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="plan__bottom">
                <div className="container">
                    <div className="plan__bottom-title">Куда вы хотите поехать?</div>
                    <div className="plan__bottom-items">
                       <RouteCard first_text={"Таджикистан/Худжанд"} second_text={"Узбекистан/Ташкент"} price={"600"}/>
                       <RouteCard first_text={"Москва"} second_text={"С.-Петербург"} price={"600"}/>
                       <RouteCard first_text={"Москва"} second_text={"С.-Петербург"} price={"600"}/>
                    </div>
                    <div className="plan__bottom-populars link">
                        <a href="#">Популярные маршруты</a>
                    </div>
                </div>
            </div>
        </section>
    )
}