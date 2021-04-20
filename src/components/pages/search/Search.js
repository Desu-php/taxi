import React from "react";
import './Search.css'
import CustomSelectSearch from "../../select-search/CustomSelectSearch";
import PopularRoute from "./popular-route/PopularRoute";
import InputQuantity from "../../input-quantity/InputQuantity";
export default function Search(){
    return(
        <div className="content">
            <section className="your-way">
                <div className="container">
                    <div className="your-way__title title">
                        Куда вы хотите поехать?
                    </div>
                    <div className="your-way__content">
                        <CustomSelectSearch placeholder={"Откуда"}/>
                        <CustomSelectSearch placeholder={"Куда"}/>
                        <div className="your-way__wrapper">
                            <input type={'date'} className={"search-input search-input-date"}/>
                            <InputQuantity color={"#00aff5"}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="recommendation">
                <div className="container">
                    <div className="recommendation__title title">
                        Платите меньше за поездки по этим популярным маршрутам
                    </div>
                    <div className="recommendation__inner">
                        <PopularRoute from={'Душанбе'} to={'Худжанд'} />
                        <PopularRoute from={'Таджикистан/Худжанд'} to={'Узбекистан/Ташкент'} />
                        <PopularRoute from={'Таджикистан/Душанбе'} to={'Узбекистан/Самарканд'} />
                    </div>
                </div>
            </section>
        </div>
    )
}
