import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="homepage">
            <header className="navbar">
                <div className="logo">VYB STORE</div>
                <input type="text" placeholder='Search Creators/Products' className='serach-bar' />
                <nav className='nav-links'>
                    <ul className='flex item-center gap-6' onClick={() => window.scrollTo(0, 0)}>
                        <li>Fav Creators</li>
                        <li>Merchandise</li>
                        <li>Brand</li>
                        <li>Digital</li>
                    </ul>

                </nav>

            </header>
            <div className='content'>
                <div className='text-section'>
                    <h1><span>One Stop</span> <span>Marketplace</span> <span>For</span> <span className='highlight'>Influencers</span></h1>
                    <p>"Unless Your Influence: Sell Intineraries, Build Your Brands, Create Merch, and Share Content - All in One Hub."</p>
                    <div className='buttons'>
                        <button className='demo-store'>Demo Store</button>
                        <button className='join-waitlist'>Join Waitlist</button>
                    </div>
                </div>
                <div className='image-grid'>
                </div>
            </div>
        </div >
    )
}

export default Navbar