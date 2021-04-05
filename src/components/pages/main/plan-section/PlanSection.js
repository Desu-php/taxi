import React from "react";

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
                        <a href="#" className="plan-item">
                            <div className="plan-item__content">
                                <div className="plan-item__content-text">Москва</div>
                                <div className="plan-item__content-text">С.-Петербург</div>
                            </div>
                            <div className="plan-item__price">
                                <span>600 р.</span>
                                <span><img src="images/icons/iconsvg.svg" alt="img"/></span>
                            </div>
                        </a>
                        <a href="#" className="plan-item">
                            <div className="plan-item__content">
                                <div className="plan-item__content-text">Москва</div>
                                <div className="plan-item__content-text">С.-Петербург</div>
                            </div>
                            <div className="plan-item__price">
                                <span>600 р.</span>
                                <span><img src="images/icons/iconsvg.svg" alt="img"/></span>
                            </div>
                        </a>
                        <a href="#" className="plan-item">
                            <div className="plan-item__content">
                                <div className="plan-item__content-text">Москва</div>
                                <div className="plan-item__content-text">С.-Петербург</div>
                            </div>
                            <div className="plan-item__price">
                                <span>600 р.</span>
                                <span><img src="images/icons/iconsvg.svg" alt="img"/></span>
                            </div>
                        </a>
                    </div>
                    <div className="plan__bottom-populars link">
                        <a href="#">Популярные маршруты</a>
                    </div>
                </div>
            </div>
        </section>
    )
}