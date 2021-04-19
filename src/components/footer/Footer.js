import React from 'react'
import './Footer.css'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__content">
                <div className="container">
                    <div className="footer__content-inner">
                        <ul className="footer__list">
                            <li className="footer__line"><a href="#">Как работает BlaBlaCar</a></li>
                            <li className="footer__line"><a href="#">На автобусе с BlaBlaCar</a></li>
                            <li className="footer__line"><a href="#">Все автобусные маршруты</a></li>
                            <li className="footer__line"><a href="#">О нас</a></li>
                            <li className="footer__line"><a href="#">Часто задаваемые вопросы</a></li>
                            <li className="footer__line"><a href="#">Связаться с нами</a></li>
                            <li className="footer__line"><a href="#">Условия использования</a></li>
                            <li className="footer__line"><a href="#">Пресса</a></li>
                            <li className="footer__line"><a href="#">Ищем сотрудников</a></li>
                        </ul>
                        <div className="footer__item">
                            <div className="footer__language">
                                <span>Язык</span>
                                <select>
                                    <option>Русский</option>
                                    <option>Русский</option>
                                    <option>Русский</option>
                                    <option>Русский</option>
                                    <option>Русский</option>
                                    <option>Русский</option>
                                </select>
                            </div>
                            <ul className="footer__social">
                                <li className="footer__social-item"><a href="#">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                         className="kirk-icon sc-fjdhpX eqLvCq"
                                         width="36" height="36" aria-hidden="false">
                                        <title>facebook</title>
                                        <path fillRule="evenodd" clipRule="evenodd" fill="#00AFF5"
                                              d="M12 0C5.37 0 0 5.4 0 12.07 0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07 24 5.41 18.63 0 12 0z">
                                        </path>
                                    </svg>
                                </a></li>
                                <li className="footer__social-item"><a href="#">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                         className="kirk-icon sc-fjdhpX eqLvCq"
                                         width="36" height="36" aria-hidden="false">
                                        <title>twitter</title>
                                        <path fill="#00AFF5"
                                              d="M22 6.167c-.75.333-1.5.583-2.333.666.833-.5 1.5-1.333 1.833-2.25-.833.5-1.667.834-2.583 1a4.034 4.034 0 0 0-3-1.333 4.09 4.09 0 0 0-4.084 4.083c0 .334 0 .667.084.917-3.5-.167-6.5-1.833-8.5-4.333C3 5.583 2.833 6.25 2.833 7c0 1.417.75 2.667 1.834 3.417-.667 0-1.334-.167-1.834-.5V10c0 2 1.417 3.667 3.25 4-.333.083-.666.167-1.083.167-.25 0-.5 0-.75-.084.5 1.667 2 2.834 3.833 2.834C6.667 18 4.917 18.667 3 18.667c-.333 0-.667 0-1-.084 1.833 1.167 4 1.834 6.25 1.834 7.583 0 11.667-6.25 11.667-11.667v-.5c.833-.583 1.5-1.333 2.083-2.083z">
                                        </path>
                                    </svg>
                                </a></li>
                                <li className="footer__social-item"><a href="#">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                         className="kirk-icon sc-fjdhpX eqLvCq"
                                         width="36" height="36" aria-hidden="false">
                                        <title>youtube</title>
                                        <path fill="#00AFF5"
                                              d="M21.833 8S21.667 6.583 21 6c-.75-.833-1.583-.833-2-.833C16.167 5 12 5 12 5s-4.167 0-7 .167C4.583 5.25 3.75 5.25 3 6c-.583.583-.833 2-.833 2S2 9.583 2 11.25v1.5c0 1.583.167 3.25.167 3.25s.166 1.417.833 2c.75.833 1.75.75 2.167.833C6.75 19 12 19 12 19s4.167 0 7-.25c.417-.083 1.25-.083 2-.833.583-.584.833-2 .833-2s.167-1.584.167-3.25v-1.5C22 9.583 21.833 8 21.833 8zM9.917 14.583V9l5.416 2.833-5.416 2.75z">
                                        </path>
                                    </svg>
                                </a></li>
                                <li className="footer__social-item"><a href="#">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                         className="kirk-icon sc-fjdhpX eqLvCq"
                                         width="36" height="36" aria-hidden="false">
                                        <title>odnoklassniki</title>
                                        <path
                                            d="M3 0h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm7.97 3.283c-2.176 0-3.94 1.774-3.94 3.962s1.764 3.963 3.94 3.963 3.943-1.775 3.943-3.963-1.765-3.962-3.942-3.962zm1.393 11.077c1.578-.323 2.523-1.074 2.573-1.114.462-.373.536-1.05.166-1.515a1.068 1.068 0 0 0-1.507-.166c-.01.008-1.018.785-2.678.786-1.66 0-2.689-.778-2.699-.786a1.068 1.068 0 0 0-1.506.166 1.081 1.081 0 0 0 .165 1.515c.05.04 1.036.811 2.658 1.127l-2.261 2.375c-.411.428-.399 1.11.028 1.523a1.065 1.065 0 0 0 1.515-.028l2.1-2.249 2.313 2.264c.42.42 1.098.42 1.516-.001a1.081 1.081 0 0 0-.001-1.524l-2.382-2.373zM10.97 8.883c-.9 0-1.63-.733-1.63-1.638 0-.904.73-1.638 1.63-1.638s1.63.734 1.63 1.638c0 .905-.73 1.638-1.63 1.638z"
                                            fillRule="evenodd" fill="#00AFF5"></path>
                                    </svg>
                                </a></li>
                                <li className="footer__social-item"><a href="#">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                         className="kirk-icon sc-fjdhpX eqLvCq"
                                         width="36" height="36" aria-hidden="false">
                                        <title>instagram</title>
                                        <g fillRule="nonzero">
                                            <path fill="#00AFF5"
                                                  d="M12 3.802c2.67 0 2.987.01 4.042.058 1.137.052 2.193.28 3.005 1.092.813.813 1.042 1.869 1.092 3.008.05 1.053.059 1.37.059 4.04s-.009 2.987-.059 4.042c-.05 1.137-.279 2.193-1.091 3.005s-1.869 1.042-3.007 1.092c-1.055.05-1.372.059-4.042.059s-2.987-.009-4.042-.059c-1.137-.05-2.193-.279-3.005-1.091S3.91 17.178 3.86 16.04c-.05-1.055-.058-1.372-.058-4.042s.008-2.987.058-4.042c.05-1.137.28-2.193 1.092-3.005S6.82 3.91 7.958 3.86C9.013 3.81 9.33 3.802 12 3.802zM12 2c-2.717 0-3.057.012-4.123.06-1.625.075-3.052.473-4.199 1.618C2.533 4.825 2.133 6.252 2.06 7.877 2.012 8.943 2 9.285 2 12c0 2.717.012 3.057.06 4.123.075 1.625.472 3.053 1.618 4.199 1.146 1.146 2.574 1.544 4.199 1.618 1.066.048 1.408.06 4.123.06s3.057-.012 4.123-.06c1.625-.075 3.053-.472 4.199-1.618 1.146-1.146 1.544-2.574 1.618-4.199.048-1.066.06-1.408.06-4.123s-.012-3.057-.06-4.123c-.075-1.625-.472-3.053-1.618-4.199-1.147-1.145-2.574-1.545-4.199-1.618C15.057 2.012 14.715 2 12 2z">
                                            </path>
                                            <path fill="#00AFF5"
                                                  d="M12 6.865a5.136 5.136 0 1 0 .001 10.271A5.136 5.136 0 0 0 12 6.865zm0 8.468a3.332 3.332 0 1 1 0-6.666 3.332 3.332 0 1 1 0 6.666z">
                                            </path>
                                            <circle fill="#00AFF5" fillRule="nonzero" cx="17.338" cy="6.662"
                                                    r="1.2"></circle>
                                        </g>
                                    </svg>
                                </a></li>
                                <li className="footer__social-item"><a href="#">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                         className="kirk-icon sc-fjdhpX eqLvCq"
                                         width="36" height="36" aria-hidden="false">
                                        <title>vkontakte</title>
                                        <path fillRule="evenodd" clipRule="evenodd" fill="#00AFF5"
                                              d="M20.302 0H3.698C1.656 0 0 1.656 0 3.698v16.604C0 22.344 1.656 24 3.698 24h16.604C22.344 24 24 22.344 24 20.302V3.698C24 1.656 22.344 0 20.302 0zm-.6 16.897h-2.018c-.66 0-.742-.48-1.95-1.634-1.02-1.006-1.456-1.085-1.703-1.085-.22 0-.37.165-.37.55v1.537c0 .453-.26.632-1.332.632-1.758 0-3.708-1.085-5.19-3.09-2.212-2.98-2.775-5.205-2.775-5.686 0-.26.192-.438.453-.438h1.8c.466 0 .644.137.81.632.823 2.417 2.293 4.546 2.91 4.546.234 0 .262-.192.262-.687v-2.46c0-1.19-.673-1.29-.673-1.73 0-.174.137-.302.357-.302h2.884c.385 0 .44.138.44.605v3.337c0 .38.077.522.246.522.21 0 .403-.127.783-.55 1.184-1.305 2.156-3.378 2.156-3.378.125-.26.276-.44.688-.44h1.8c.356 0 .507.192.44.536-.207.96-2.28 3.887-2.28 3.887-.193.3-.276.466 0 .754.19.247.796.783 1.166 1.277.906.962 1.497 1.773 1.497 2.226 0 .345-.19.44-.397.44z">
                                        </path>
                                    </svg>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__copy">BlaBlaCar, 2021 ©</div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
        <span className="footer__bottom-text">BlaBlaCar – крупнейший сервис поиска попутчиков. Мы объединяем людей, которым по пути. Отправиться в путь
          можно из пригорода или небольшого населенного пункта.</span>
                </div>
            </div>
        </footer>
    )
}
