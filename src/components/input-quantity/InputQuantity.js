import React, {useState} from "react";
import './InputQuantity.css'
import useComponentVisible from "../../hooks/useComponentVisible";
export default function InputQuantity({color}) {
    const [value, setValue] = useState(1)
    const [show, setShow] = useState(false)
    const { ref, isComponentVisible,setIsComponentVisible } = useComponentVisible(true);
    const onMinus = () => {
        if (value > 1) {
            setValue(value - 1)
        }
        return false
    }
    const onPlus = () => {
        setValue(value + 1)
    }
    function getNoun(number, one, two, five) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
            return five;
        }
        n %= 10;
        if (n === 1) {
            return one;
        }
        if (n >= 2 && n <= 4) {
            return two;
        }
        return five;
    }
    return (
        <div ref={ref}  className={"quantity-container"}>
            <button className="main-screen__btn main-screen__btn-quantity" onClick={() => {
                setShow(true)
                setIsComponentVisible(true)
            }}>
              <span className="button-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-fjdhpX hvLyfg"
                     width="24" height="24" aria-hidden="true">
                  <path
                      d="M8.526 3.037l-1.504.361a1.34 1.34 0 00-.994 1.578l.95 14.887c.034.191.076.308.133.417.217.417.669.683 1.132.716l2.401.004h6.026c.736 0 1.33-.601 1.33-1.34v-2.686l-.006-.13a1.334 1.334 0 00-1.324-1.21H11.06l.076-1.12c.153-2.395.16-3.656.082-5.558-.09-2.19-.449-3.793-1.208-5.242a1.327 1.327 0 00-1.485-.677zm.234.972a.327.327 0 01.366.17c.637 1.215.964 2.571 1.074 4.416l.02.403c.078 1.894.07 3.132-.088 5.566l-.145 2.07h6.683c.181 0 .33.15.33.34v2.686c0 .189-.149.34-.33.34H8.398c-.188.004-.348-.08-.4-.181a.346.346 0 01-.032-.09L7.017 4.843c-.047-.252.064-.43.238-.472L8.76 4.01z"
                      fill={color} fillRule="nonzero"></path>
                </svg>
              </span>
                <span className="button-text" style={{color:color}}>{value} {getNoun(value,'пассажир', 'пассажиров', 'пассажира')}</span>
            </button>
            {(show & isComponentVisible) ? <div ref={ref}  className={"quantity-popup-wrapper"}>
                <div className={"quantity-popup-header"}>
                    {value} {getNoun(value,'пассажир', 'пассажиров', 'пассажира')}
                </div>
                <hr className={"quantity-hr"}/>
                <div className={"quantity-body"}>
                    <img src="/images/icons/minus.svg" onClick={onMinus} alt="Svg" width={"50px"}/>
                    <span>{value}</span>
                    <img src="/images/icons/plus.svg" onClick={onPlus} alt="Svg" width={"40px"}/>
                </div>
                <div className={"quantity-footer"}>
                    <button onClick={() => setShow(false)}>Apply</button>
                </div>
            </div>:''}
        </div>
    )
}
