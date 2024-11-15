import React from 'react'
import './HowToList.css'

const HowToList = () => {
    return (
        <div className='bg-clr'>
            <div className='bg-how'>
                <div className='how-to-list'>
                    <h1>How to List</h1>
                    <div className='step-count'>
                        <div className='step'>
                            <div className='plane-icon'>✈️</div>
                            <div className='step-number'>01</div>
                            <div className='step-text'>Create Itinerary</div>
                        </div>
                        <div className='step'>
                            <div className='plane-icon'>✈️</div>
                            <div className='step-number'>02</div>
                            <div className='step-text'>Convert into Travel Package</div>
                        </div>
                        <div className='step'>
                            <div className='plane-icon'>✈️</div>
                            <div className='step-number'>03</div>
                            <div className='step-text'>Earn by sharing</div>
                        </div>
                    </div>
                    <p className='footer-text'>You Curate Experience, We Make It Happen</p>
                </div>
            </div>
        </div >
    )
}

export default HowToList