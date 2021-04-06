import React from 'react'
import './QuestionSection.css'
import Answer from "./answers/Answer";

export default function QuestionSection(){

    return(
        <section className="howItWorks">
            <div className="container">
                <div className="howItWorks__top">
                    <div className="howItWorks__title title">Как это работает</div>
                    <a href="#" className="howItWorks__more-details link">Подробнее</a>
                </div>
                <div className="howItWorks__inner">
                    <Answer
                        title={'Просто'}
                        description={'Среди миллионов попутчиков вы легко найдете тех, кто рядом и кому с вами по пути.'}
                    />
                    <Answer
                        title={'Быстро'}
                        description={'Введите точный адрес, чтобы увидеть свою идеальную поездку. Выбирайте сами, с кем хотите\n' +
                        '                            отправиться в\n' +
                        '                            дорогу. И бронируйте!'}
                    />
                    <Answer
                        title={'Без хлопот'}
                        description={'Добирайтесь до места назначения без пересадок. В поездках с попутчиками не надо беспокоиться\n' +
                        '                            об очередях и\n' +
                        '                            часах, проведенных в ожидании на станции.'}
                    />
                </div>
            </div>
        </section>
    )
}