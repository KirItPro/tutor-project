import './Reviews.css';
import LEFT_VECTOR from '../images/left.svg';
import RIGHT_VECTOR from '../images/right.svg';
import FACE from '../images/face.png';
import { Link } from 'react-router-dom';

const Reviews = () => {
    return (
        <section className="reviews">
        <div className="container">
            <h2 className="reviews-title">отзывы</h2>
            <div className="reviews-list">
                <Link className="reviews-vector"><img className="reviews-vector_img" src={LEFT_VECTOR} alt="photo_client" /></Link>
                <div className="reviews-block">
                    <img className="reviews-block__photo" src={FACE} alt="photo_client" />
                    <dl className="reviews-block__coment">
                        <dt className="reviews-block__name">Юлия</dt>
                        <dd className="reviews-block__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, qui?</dd>
                    </dl>
                </div>
                <Link className="reviews-vector"><img className="reviews-vector_img" src={RIGHT_VECTOR} alt="photo_client" /></Link>
            </div>
        </div>
    </section>
    )
}

export default Reviews;