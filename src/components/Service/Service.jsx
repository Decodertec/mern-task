import React from 'react'
import { useState } from 'react'
import './Service.css'

const Service = () => {
    const [activeService, setActiveService] = useState('Travel')
    return (
        <div className='service'>
            {['Travel', 'Digital', 'Brand', 'Merch'].map((service) => (
                <div
                    key={tab} className={`tab ${activeService === tab ? 'active' : ''}`} onClick={() => setActiveService(tab)}
                >
                    {tab}{activeService === tab && <div className='underline'>
                    </div>}</div>
            ))}
        </div>

    )
}

export default Service