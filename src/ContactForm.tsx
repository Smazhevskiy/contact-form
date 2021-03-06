import React from 'react'
import './App.css'
import {useFormik} from 'formik'
import axios from 'axios'


export const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            contacts: '',
            message: ''
        },

        onSubmit: values => {
            axios.post('https://smtp-nodemailer.herokuapp.com/sendMessage', {
                    name: values.name,
                    contacts: values.contacts,
                    message: values.message
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin': 'https://smazhevskiy.github.io/contact-form/',
                        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control',

                    }
                })
            formik.resetForm()
        },
    })

    return (
        <div className="form-at">
            <form onSubmit={formik.handleSubmit} action="">

                <div className="validate-input-at w-50">
                    <input {...formik.getFieldProps('name')}
                           className="input-at" type="text"
                           placeholder="Ваше имя"
                    />
                    <span className="focus-input-at"> </span>
                </div>

                <div className="validate-input-at w-50">
                    <input {...formik.getFieldProps('contacts')}
                           className="input-at" type="text"
                           placeholder="Ваш телефон или email"
                    />
                    <span className="focus-input-at"> </span>
                </div>

                <div className="validate-input-at">
                    <textarea {...formik.getFieldProps('message')}
                              className="input-at"
                              placeholder="Ваше сообщение"
                    > </textarea>
                    <span className="focus-input-at"> </span>
                </div>

                <button type={'submit'} className="form-at-btn">Отправить</button>

            </form>
        </div>
    )
}