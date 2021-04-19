import React,{useState} from 'react'
import './MainSection.css'
import CustomSelectSearch from "../../../select-search/CustomSelectSearch";
import InputQuantity from "../../../input-quantity/InputQuantity";


export default function MainSection(){

    return(
        <section className="main-screen">
            <div className="container">
                <h1 className="main-screen__title">В путь по-вашему</h1>
                <div className="main-screen__search">
                    <div className="main-screen__search-buttons">
                        <div className="main-screen__search-buttons main-screen__btn-left">
                            <div>
                                <CustomSelectSearch placeholder={'Откуда'} />
                            </div>
                            <div>
                                <CustomSelectSearch placeholder={'Куда'} />
                            </div>
                        </div>
                        <div className="main-screen__search-buttons main-screen__btn-right">
                                <input type={'date'} className={"search-input search-input-date"}/>
                                <InputQuantity/>
                        </div>
                    </div>
                    <button className="main-screen__search-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             className="kirk-icon sc-fjdhpX kbtLKY" width="24"
                             height="24" aria-hidden="true">
                            <g fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                               strokeMiterlimit="10">
                                <line x1="22" y1="22" x2="16.4" y2="16.4"></line>
                                <circle cx="10" cy="10" r="9"></circle>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
