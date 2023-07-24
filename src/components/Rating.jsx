import React from 'react'
import Card from "../components/Card"
import './Rating.css'
import starImg from '../images/icon-star.svg'
import { useState } from 'react'

const Rating=({rating, setRating, setShowThankYouPage} )=> {
    const[activeRatings,setActiveRatings] =useState({
        rating1:false,
        rating2:false,
        rating3:false,
        rating4:false,
        rating5:false,

    });

    const handlesubmit=()=>{
        if(!rating) return;

        setShowThankYouPage(true);
    }


  return (
    <Card>
        <div className="star_img_container">
            <img src= {starImg} alt= ""/>
        </div>
        <h2 className='title'>How did we do?</h2>
        <p className="text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
        <div className="rating">
            <div className= {
                activeRatings.rating1
                 ? "rating_container:active" 
                 : "rating_container"
                }
                onClick={()=>{
                    setActiveRatings({
                        rating1:true,
                        rating2:false,
                        rating3:false,
                        rating4:false,
                        rating5:false,
                    });
                    setRating(1)
                }}
            >
                1
            </div>
            <div className= {
                activeRatings.rating2
                 ? "rating_container:active"
                 : "rating_container"
                }
                onClick={()=>{
                    setActiveRatings({
                        rating1:false,
                        rating2:true,
                        rating3:false,
                        rating4:false,
                        rating5:false,
                    });
                    setRating(2)
                }}
            >
                2
            </div>
            <div className= {
                activeRatings.rating3
                 ? "rating_container:active" 
                 : "rating_container"
                }
                onClick={()=>{
                    setActiveRatings({
                        rating1:false,
                        rating2:false,
                        rating3:true,
                        rating4:false,
                        rating5:false,
                    });
                    setRating(3)
                }}
            >
                3
            </div>
            <div className= {
                activeRatings.rating4
                 ? "rating_container:active" 
                 : "rating_container"
                }
                onClick={()=>{
                    setActiveRatings({
                        rating1:false,
                        rating2:false,
                        rating3:false,
                        rating4:true,
                        rating5:false,
                    });
                    setRating(4)
                }}
            >
                4
            </div>
            <div className= {
                activeRatings.rating5
                 ? "rating_container:active" 
                 : "rating_container"
                }
                onClick={()=>{
                    setActiveRatings({
                        rating1:false,
                        rating2:false,
                        rating3:false,
                        rating4:false,
                        rating5:true,
                    });
                    setRating(5)
                }}
            >
                5
            </div>
        </div>
        <div className="submit_btn" onClick={handlesubmit}>Submit</div>
    </Card>
    
  )
}

export default Rating