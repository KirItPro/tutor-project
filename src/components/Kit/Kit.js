import './Kit.css';

const Kit = () => {
    return (
        <section className="kit">
            <div className="container">
                <h2 className="kit-title">набор 2023-2024</h2>
                <ul className="kit-item">
                    <li className="kit-list">
                        <b className="kit-list__title">Индивидуальное ОГЭ</b>
                        <p>Закрепление пройденного материала, восполнение пробелов в знаниях, 
                            помощь в решении школьного Д/З. Решение тестов и билетов ОГЭ. Индивидуальный
                            подход к ученику.

                            </p>
                        <button className="kit-button">Записаться</button>
                    </li>
                    <li className="kit-list">
                        <b className="kit-list__title">Индивидуальное егэ</b>
                        <p>Закрепление пройденного материала, восполнение пробелов в знаниях, 
                            помощь в решении школьного Д/З. Решение тестов и билетов ЕГЭ. Индивидуальный
                            подход к ученику.
                        </p>
                        <button className="kit-button">Записаться</button>
                    </li>
                    <li className="kit-list">
                        <b className="kit-list__title">Групповое ОГЭ</b>
                        <p>Закрепление пройденного материала, восполнение пробелов в знаниях, 
                            помощь в решении школьного Д/З. Решение тестов и билетов ОГЭ. Занятие проводится в паре с другим учеником.
                            Ученики в парах подбираются по схожему уроню знаний.
                        </p>
                        <button className="kit-button">Записаться</button>
                    </li>
                    <li className="kit-list">
                        <b className="kit-list__title">Групповое ЕГЭ</b>
                        <p>Закрепление пройденного материала, восполнение пробелов в знаниях, 
                            помощь в решении школьного Д/З. Решение тестов и билетов ЕГЭ. Занятие проводится в паре с другим учеником.
                            Ученики в парах подбираются по схожему уроню знаний.
                        </p>
                        <button className="kit-button">Записаться</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Kit;