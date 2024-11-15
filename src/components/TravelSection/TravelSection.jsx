import React from 'react';
import './TravelSection.css';

import './lake1.png';

const TravelSection = () => {
    return (
        <div className='bg'>
            <section className='travel-section'>
                <div className="overlapping">
                    <h1 className="title">TRAVEL</h1>
                    <p className="subtitle">
                        Turn your travel experience into itinerary,<span>travel package with VYB Store and share it</span>
                        with your true followers.
                    </p>
                </div>
            </section >
        </div>
    );
};

export default TravelSection;