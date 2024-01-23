import { Link } from 'react-router-dom';
import { linksMenu } from '../linksMenu';

import './Kit.css';

const Kit = () => {
    function routeToForm () {

    }
    return (
        <section className="kit">
            <div className="container">
                <h2 className="kit-title">набор 2023-2024</h2>
                <ul className="kit-item">
                    <li className="kit-list">
                        <b className="kit-list__title">Индивидуальное <br/>(5-11 класс)</b>
                        <p className='kit-list__text'>Повышение успеваемости, восполнение пробелов в знаниях, помощь с ДЗ, 
                            помощь с прохождением школьной программы.
                        </p>
                        <div className="kit-down_part">
                            <dl className="kit-list__price">
                                <dt className='kit-list__old-price'>1500р</dt>
                                <dd className='kit-list__sale'>1000р</dd>
                            </dl>
                            <Link className="kit-button" to={linksMenu[1].path}>Записаться</Link>
                        </div>
                    </li>
                    <li className="kit-list">
                        <b className="kit-list__title">Индивидуальное ЕГЭ/ОГЭ</b>
                        <p className='kit-list__text'>Комплексная авторская подготовка к государственному экзамену.
                            На занятиях разбираем каждое задание ЕГЭ/ОГЭ (теория + практика), оттачиваем необходимые навыки,
                            решаем варианты, проводим пробники.
                            Все материалы для подготовки предоставляются🎁
                            <br/>⚠️Подготовку к экзамену необходимо начинать не менее, чем за год до экзамена. 
                        </p>
                        <div className="kit-down_part">
                            <dl className="kit-list__price">
                                <dt className='kit-list__old-price'>1500р</dt>
                                <dd className='kit-list__sale'>1000р</dd>
                            </dl>
                            <Link className="kit-button" to={linksMenu[1].path}>Записаться</Link>
                        </div>
                    </li>
                    <li className="kit-list">
                        <b className="kit-list__title">Групповое ОГЭ</b>
                        <p className='kit-list__text'>Комплексная авторская подготовка к основному государственному экзамену в мини-группах(2-4 чел.).
                            На занятиях разбираем каждое задание экзаменов (теория + практика), оттачиваем необходимые навыки,
                            решаем варианты, проводим пробники.
                            Все материалы для подготовки предоставляются🎁
                            <br/>⚠️Подготовку к ОГЭ необходимо начинать не менее, чем за год до экзамена. 
                        </p>
                        <div className="kit-down_part">
                            <dl className="kit-list__price">
                                <dt className='kit-list__old-price'>1200р</dt>
                                <dd className='kit-list__sale'>800р</dd>
                            </dl>
                            <Link className="kit-button" to={linksMenu[1].path}>Записаться</Link>
                        </div>
                        
                    </li>
                    <li className="kit-list">
                        <b className="kit-list__title">Групповое ЕГЭ база</b>
                        <p className='kit-list__text'>Комплексная авторская подготовка к базовому единому государственному экзамену в мини-группах(2-4 чел.).
                            На занятиях разбираем каждое задание экзаменов (теория + практика), оттачиваем необходимые навыки,
                            решаем варианты, проводим пробники.
                            Все материалы для подготовки предоставляются🎁
                            <br/>⚠️Подготовку к ЕГЭ необходимо начинать не менее, чем за год до экзамена. 
                        </p>
                        <div className="kit-down_part">
                            <dl className="kit-list__price">
                                <dt className='kit-list__old-price'>1200р</dt>
                                <dd className='kit-list__sale'>800р</dd>
                            </dl>
                            <Link className="kit-button" to={linksMenu[1].path}>Записаться</Link>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Kit;