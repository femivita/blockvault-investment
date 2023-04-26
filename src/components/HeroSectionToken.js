import React from 'react'
import { Button } from './Button'
// import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel,
    img, alt, imgStart
}) {
    return (
        <>
        <div className={ lightBg ? 'home__hero-section' : 'home__hero-section darkBg' }>
            <div style={{textAlign:'center'}}>
                 
                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                    <h1 style={{textAlign: 'center', color:'#ffd051'}}>Marrying Crypto Liquidity with High Returns On Investment (ROI)</h1>
                    <div className='light'>
                    <h3 style={{textAlign: 'center', color:'#111'}}>
                    Turn on Round-up Rules and start saving up effortlessly. Whenever you make a purchase, 
                    Goals make it easy to save for the things you want or want to do. 
                    There’s no need for spreadsheets or extra apps to budget and track your money. </h3>
                    <h3 style={{textAlign: 'center', color:'#111'}}>
                    DODGE and USDT tokens can benefit from 
                    cryptocurrency features, while maintaining the potential for price appreciation from both markets.
                    </h3>
                    <h3 style={{textAlign: 'center', color:'#111'}}>
                    The company has pledged to back the tokens 100% by reserves, with its own mining projects across the world.
                    </h3>
                    </div>

                 {/* </div> */}

                   {/* <div className="row home__hero-row"  */}
                {/* // style={{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}> */}
                    {/* <div className='col'>
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <h3>Email :  goldendeercapital@gmail.com </h3>‎   ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  */}
                        {/* </div> */}
                    {/* </div> */}

                    {/* <div className='col'>
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" /> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
        </>
    )
}

export default HeroSection