import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

import './SingUp.css';

const SingUp = () => {
    const TOKEN = '6266909021:AAEfSlazTXvzaY3dLcN2yBDpQALxc8_H6b4',
        CHAT_ID = '-1001987297565',
        URI_IP =`https://api.telegram.org/bot${TOKEN}/sendMessage`;

    return (
        <Formik
            initialValues = {{
                name: '',
                phone: ''
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                    .min(2, 'Минимум 2 символа!')
                    .max(20, 'Максимум 20 символов')
                    .required('Обязательное поле!'),
                phone: Yup.string()
                    .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                    'Не корректно введён номер')
                    .required('Обязательное поле!')
            })}
            onSubmit = {values => axios.post(URI_IP, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: `Новая заявка с сайта :\n
                    Имя : ${values.name}\n
                    Телефон : ${values.phone}`
                })
                .then(response => console.log(response))
                .catch(err => console.error(err))
                .finally(() => {
                    console.log('конец процесса отправки');
                    return (
                    values.name = '',
                    values.phone = ''
                    )
                })
            }
        >
            <Form className="form">
                <div className="wrapperForm">
                <h2>Введите ваши данные</h2>
                
                    <label htmlFor="name">Ваше имя</label>
                    <Field className='textInput'
                        id='name'
                        name='name'
                        type='text'
                    />
                    <ErrorMessage className="error" name='name' component='div'/>

                    <label htmlFor="phone">Ваше номер телефона</label>
                    <Field className='textInput'
                        id='phone'
                        name='phone'
                        type='text'
                    />
                    <ErrorMessage className="error" name='phone' component='div'/>

                <button type="submit" className="kit-button" >Отправить</button>
                </div>
            </Form>
        </Formik>
        
    );
};

export default SingUp;