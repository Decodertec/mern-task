import React from 'react'
import './Features.css';
import imga from './a.png'
import imgb from './b.png'
import imgc from './c.png'
import imgd from './d.png'


const Features = () => {
    return (
        <div className='main-background'>
            <div className='card-back'>

                <div className='left-section'>
                    <p className='features-text'>From Creation to <br />Monetaization: Vyb Store<br></br> Has It All</p>
                </div>
                <div className='right-section'>

                    <div className='features-box1'>
                        <div>
                            <h1>Trusted By Influencers</h1>

                            <p>A Trusted Platform for Influencers to grow and learn</p>
                        </div>
                        <div><img src={imgd} alt="" className='image-a' /></div>
                    </div>

                    <div className='features-box2'>
                        <div className='text-box'>
                            <h1>Secured Data</h1>
                            <p>Advanced security measures to protect your valuable data</p>
                        </div>
                        <div><img src={imgc} alt="" className='image-a' /></div>

                    </div>

                    <div className='features-box3'>
                        <div>
                            <h1>Authentic Payment Partner</h1>
                            <p>Reliable,fast,and secure payments you can trust</p>
                        </div>

                        <div><img src={imga} alt="" className='image-a' /></div>

                    </div>


                    <div className='features-box4'>
                        <div className=''>
                            <h1>Monetize Your Influence</h1>
                            <p>Seamlessly turn your influence into consistent revenue</p>
                        </div>
                        <div><img src={imgb} alt="" className='image-a' />
                        </div>
                    </div>

                </div>


            </div>

        </div>


    )

}

export default Features