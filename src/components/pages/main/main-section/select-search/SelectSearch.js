import React,{useState} from "react";
import './SelectSearch.css'

export default function SelectSearch ({placeholder,onInput, value}){

    const [loader, setLoader] = useState(false)
    const [focus, setFocus] = useState(false)

    const inputHandler = (e) => {
        const target = e.target
        if (target.value.trim().length > 1){
            setLoader(true)
        }else {
            setLoader(false)
        }
        onInput(target.value)
    }


    return(
        <div className={"select-wrapper"}>
            <button className="main-screen__btn main-screen__btn-from">
                <div>
                    <span className="button-circle"></span>
                </div>
                <label className="button-text" htmlFor={"from"}>
                    <input id={"from"}
                           className={"search-input"}
                           onFocus={() => setFocus(true)}
                           onBlur={() => setFocus(false)}
                           onInput={inputHandler}
                           value={value}
                           placeholder={placeholder}/>
                </label>
                {loader &&
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                }

            </button>
            <div className={`select-card-wrapper ${!focus?"display-none":''}`}>
               <ul>
                   <li>Таджикистан, Худжанд</li>
                   <li>Таджикистан, Душанбе</li>
                   <li>Россия, Москва</li>
               </ul>
            </div>
        </div>
    )
}