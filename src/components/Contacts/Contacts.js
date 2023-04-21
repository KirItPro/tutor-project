import { Link } from 'react-router-dom';

import INST from '../images/inst.svg';
import TELEGA from '../images/telega.svg';
import WHATSAPP from '../images/whatsapp.png';

import './Contacts.css';

const Contacts = ({active, setActive}) => {
    return (
        <div className={active ? "contacts-modal active" : "contacts-modal"} onClick={() => setActive(false)}>
            <div className={active ? "conacts-modal_info-box active" : "conacts-modal_info-box"} onClick={e => e.stopPropagation()}>
                <h2>Вы можете связаться:</h2>
                <div className="conacts-modal_info-box_icons">
                    <Link to='https://www.instagram.com/tutor.julia/'>
                        <img src={INST} alt="inst" className="conacts-modal_link"/>
                    </Link>
                    <Link to='https://t.me/tutor_Julia'>
                        <img src={TELEGA} alt="telega" className="conacts-modal_link"/>
                    </Link>
                    <Link to='https://wa.me/message/OMT533SW66DIO1'>
                        <img src={WHATSAPP} alt="whatsapp" className="conacts-modal_link"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Contacts;