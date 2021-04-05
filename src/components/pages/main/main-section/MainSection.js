import React from 'react'

export default function MainSection(){
    return(
        <section className="main-screen">
            <div className="container">
                <div className="main-screen__title">В путь по-вашему</div>
                <div className="main-screen__search">
                    <div className="main-screen__search-buttons">
                        <div className="main-screen__search-buttons main-screen__btn-left">
                            <div style={{position:"relative"}}>
                                <button className="main-screen__btn main-screen__btn-from">
                                    <span className="button-circle"></span>
                                    <span className="button-text">Откуда</span>
                                </button>
                                <div>

                                </div>
                            </div>


                            <button className="main-screen__btn main-screen__btn-where">
                                <span className="button-circle"></span>
                                <span className="button-text">Куда</span>
                            </button>
                        </div>
                        <div className="main-screen__search-buttons main-screen__btn-right">
                            <button className="main-screen__btn main-screen__btn-when">
              <span className="button-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-fjdhpX hvLyfg"
                     width="24" height="24" aria-hidden="true">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M18.087 4.174h3.478v17.391H2.435V4.174h3.478m1.74 0h8.695" stroke="#708C91"
                          stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                        d="M5.913 2.435h1.74v3.478h-1.74V2.435zm10.435 0h1.739v3.478h-1.74V2.435zM2.435 9.39h19.13-19.13zM5.913 12.87h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm-5.217 4.347h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm5.218-4.347h1.739v.87h-1.74v-.87z"
                        stroke="#708C91" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                        d="M5.913 12.87h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm-5.217 4.347h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm5.218-4.347h1.739v.87h-1.74v-.87z"
                        fill="#708C91" fill-rule="nonzero"></path>
                  </g>
                </svg>
              </span>
                                <span className="button-text">Сегодня</span>
                            </button>
                            <button className="main-screen__btn main-screen__btn-quantity">
              <span className="button-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-fjdhpX hvLyfg"
                     width="24" height="24" aria-hidden="true">
                  <path
                      d="M8.526 3.037l-1.504.361a1.34 1.34 0 00-.994 1.578l.95 14.887c.034.191.076.308.133.417.217.417.669.683 1.132.716l2.401.004h6.026c.736 0 1.33-.601 1.33-1.34v-2.686l-.006-.13a1.334 1.334 0 00-1.324-1.21H11.06l.076-1.12c.153-2.395.16-3.656.082-5.558-.09-2.19-.449-3.793-1.208-5.242a1.327 1.327 0 00-1.485-.677zm.234.972a.327.327 0 01.366.17c.637 1.215.964 2.571 1.074 4.416l.02.403c.078 1.894.07 3.132-.088 5.566l-.145 2.07h6.683c.181 0 .33.15.33.34v2.686c0 .189-.149.34-.33.34H8.398c-.188.004-.348-.08-.4-.181a.346.346 0 01-.032-.09L7.017 4.843c-.047-.252.064-.43.238-.472L8.76 4.01z"
                      fill="#708C91" fill-rule="nonzero"></path>
                </svg>
              </span>
                                <span className="button-text">1 пассажир</span>
                            </button>
                        </div>
                    </div>
                    <button className="main-screen__search-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             className="kirk-icon sc-fjdhpX kbtLKY" width="24"
                             height="24" aria-hidden="true">
                            <g fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                               stroke-miterlimit="10">
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
