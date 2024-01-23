import './Home.css';

import JULIA from '../images/julia.png';

const Home = () => {
    return (
        <main className="main">
            <div className="container">
                <h1 className="promo-title">репетитор по математике
                <br/><span className="promo-title_online">Online</span>
                </h1>
                <div className="promo">

                    <div className="promo-left">
                        {/* <b className="promo-left__text">
                        Привет! Меня зовут Юлия, и я помогу тебе с математикой!
                        <br/>🌸🌸🌸🌸
                        <br/>За моими плечами уже более 7ми лет успешной непрерывной работы репетитором! 
                        <br/>На своих занятиях я использую авторские методики и , конечно, индивидуальный подход.
                        </b> */}
                    </div>
                
                    <div className="promo-right">
                        <img className="promo-right_img" src={JULIA} alt="promo-img" />
                    </div>
                
                </div>
                <div className="about">
                    <div className="about-prev">
                            <br/>Привет! Меня зовут Юлия, и я помогу тебе с математикой!
                            <br/>🌸🌸🌸🌸
                            <br/>За моими плечами уже более 7-ми лет успешной непрерывной работы репетитором! 
                            <br/>На своих занятиях я использую авторские методики и , конечно, индивидуальный подход❤️ 
                    </div>
                    <ul>НЕСКОЛЬКО ФАКТОВ ОБО МНЕ:
                        <li>✅ Являюсь магистром математических наук;</li> 
                        <li>✅ Окончила Кубанский государственный университет (факультет матем и комп наук)</li>
                        <li>✅ Преподаю математические дисциплины с 2016 года</li>
                        <li>✅ На своих занятиях применяю индивидуальный подход</li>
                        <li>✅ Ежегодно провожу более 1000 онлайн-занятий</li>
                        <li>✅ Готовлю к ОГЭ/ЕГЭ, помогаю повысить успеваемость и восполнить пробелы, создавая дружелюбную комфортную атмосферу на уроках</li>
                        <li>✅ Не мыслю своей жизни без математики.</li>
                    </ul>
                </div>
            </div>
        </main>
    )
};

export default Home;