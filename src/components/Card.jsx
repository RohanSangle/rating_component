import React,{useState} from 'react'
import Rating from './Rating'
import ThankYou from './ThankYou'
import "../styles/Card.css"


const Card = (props) => {

  const[showThankYouPage, setShowThankYouPage]=useState(false);
  const[rating, setRating] =useState(null);

  return (
    <>
      <div className="card">{props.children}</div>
      {showThankYouPage ? (
        <ThankYou rating={rating} />
      ) : (
        <Rating
        rating={rating}
        setRating={setRating}
        setShowThankYouPage={setShowThankYouPage}
        />
      )}
    </>
  );
};

export default Card