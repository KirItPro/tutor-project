import './Reviews.css';
import LEFT_VECTOR from '../images/left.svg';
import RIGHT_VECTOR from '../images/right.svg';
import { Link } from 'react-router-dom';
import { data } from '../dataReviews';
import { useEffect, useState } from 'react';

const Reviews = () => {
    const people = data;
    const [peopleIndex, setPeopleIndex] = useState(0);
    const [expandedReviews, setExpandedReviews] = useState([]);

    useEffect(() => {
        let lastPerson = people.length - 1;

        if (peopleIndex < 0) {
            setPeopleIndex(lastPerson)
        } else if (peopleIndex > lastPerson) {
                setPeopleIndex(0)
            }
    }, [peopleIndex, people]);

    useEffect(() => {
        let slider = setInterval( () => setPeopleIndex(prevState => prevState + 1), 10000 );
        return () => {
            clearInterval(slider)
        }
    }, [peopleIndex]);

    let position = 'reviews-block';
    return (
        <section className="reviews">
        <div className="container">
            <h2 className="reviews-title">отзывы</h2>
            <div className="reviews-list">
                <Link className="reviews-vector"  onClick={ () => setPeopleIndex(prevState => prevState - 1)}>
                    <img className="reviews-vector_img" src={LEFT_VECTOR} alt="photo_client" />
                </Link>
                    {
                        people.map((person, index) => {
                            const {id, name, text, img} = person;
                            if (index === peopleIndex ) {
                                position = 'reviews-block';
                            } else {
                                position = 'reviews-block visib';
                            }
                            function sliceText() {
                                let present = text.slice(0,100);
                                
                                if (present.length < text.length && !expandedReviews[index]) {
                                    return (
                                        <>
                                            <span>{present}</span>
                                            <span onClick={() => setExpandedReviews(val => {
                                                const newVal = [...val];
                                                newVal[index] = true;
                                                return newVal;

                                            })} className='semicolon'> ...</span>
                                        </>
                                    );
                                } else {
                                    return text;
                                }
                            }   
                            return (
                                <div className={position} key={id}>
                                    <img className="reviews-block__photo" src={img} alt="photo_client" />
                                    <dl className="reviews-block__coment">
                                        <dt className="reviews-block__name">{name}</dt>
                                        <dd className="reviews-block__text">{sliceText()}</dd>
                                    </dl>
                                </div>
                            )
                        })
                    }
                <Link className="reviews-vector" onClick={ () => setPeopleIndex(prevState => prevState + 1)}>
                    <img className="reviews-vector_img" src={RIGHT_VECTOR} alt="photo_client" />
                </Link>
            </div>
        </div>
    </section>
    )
}

export default Reviews;