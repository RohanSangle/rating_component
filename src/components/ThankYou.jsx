import React from 'react'
import Card from './Card'
import './ThankYou.css'
import thankyouimg from '../images/illustration-thank-you.svg'

function ThankYou({rating}) {
  return (
    <Card>
        <div className="thankyou_img_container">
            <img src= {thankyouimg} alt= ""/>
        </div>

        <div className="selected">
            <p>You selected {rating} out of 5</p>
        </div>

        <h2 className='title'>Thank you!</h2>
        <p className='text'>We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch! </p>
    </Card>
  )
}

export default ThankYou