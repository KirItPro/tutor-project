import './Home.css';

import JULIA from '../images/julia.png';

const Home = () => {
    return (
        <main className="main">
            <div className="container">
                <h1 className="promo-title">репетитор по математике</h1>
                <div className="promo">

                    <div className="promo-left">
                        <b className="promo-left__text">Здравствуйте, меня зовут Юлия - я репетитор по математике.
                            Если хотите зписаться на занятие, то ниже Вы можете выбрать подходящий для вас вариант и отправить заявку.
                        </b>
                    </div>
                
                    <div className="promo-right">
                        <img className="promo-right_img" src={JULIA} alt="promo-img" />
                    </div>
                
                </div>
            
            </div>
        </main>
    )
};

export default Home;