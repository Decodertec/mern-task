import React from 'react'
import './TravelPlace.css'
import Img from './p1.png'
import Img2 from './p2.png'
import Img3 from './p3.png'

const TravelPlace = () => {
    return (
        <div className='bg-travel-place'>
            <div className='back'>
                <h1 className='text'>Explore Our Curated Travel Itineraries</h1>
                <div className='img-styl'>
                    <img className='img' src={Img} alt="" />
                    <img className='img' src={Img2} alt="" />
                    <img className='img' src={Img3} alt="" />
                    <img className='img' src={Img} alt="" />
                </div>
            </div>

        </div>
    )
}
export default TravelPlace