import React from 'react'
import './App.css'

export const ContactForm = () => {
    return (
        <div className="form-at">
            <div className="validate-input-at w-50" data-validate="Обязательное поле">
                <input className="input-at" type="text" name="name-at" placeholder="Ваше имя"/>
                <span className="focus-input-at"> </span>
            </div>
            <div className="validate-input-at w-50" data-validate="Обязательное поле">
                <input className="input-at" type="text" name="email-at" placeholder="Ваш телефон или email"/>
                <span className="focus-input-at"> </span>
            </div>
            <div className="validate-input-at" data-validate="Обязательное поле">
                <textarea className="input-at" name="message-at" placeholder="Ваше сообщение"> </textarea>
                <span className="focus-input-at"> </span>
            </div>
            <button id="submit-at" className="form-at-btn">Отправить</button>
        </div>
    )
}