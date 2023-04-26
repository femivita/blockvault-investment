import React from 'react'
import { Button } from './Button'
// import { Link } from 'react-router-dom'
import './HeroSection.css'
import { homeObjSeven } from './pages/HomePage/Data';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel,
    img, alt, imgStart
}) {
    return (
        <>
        <div className={ lightBg ? 'home__hero-section' : 'home__hero-section darkBg' }>
            <div style={{textAlign:'center'}}>
                 
                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                    <h1 style={{textAlign: 'center', color:'#ffd051'}}>Few Reasons We Standout</h1>
                    <div className='light'>
                    <h3 style={{textAlign: 'center',color:'#111'}}>
                    We have a group of qualified experts, 
                    traders and analysts who are specialized in Bitcoin, Forex, Stock, Bond, Futures, Currencies, USDT and Dodge trading
                    <h4 style={{textAlign: 'center', color:'#ffd051'}}>Registered and Regulated</h4>
                    Blockvault is Registered under UK Companies House and Duns & Bradstreet (USA). We are also regulated by Security Exchange Commission(SEC) & CFTC.
                    <h4 style={{textAlign: 'center', color:'#ffd051'}}>Insured and Secured</h4>
                    Your investment is fully insured and secured. Your funds are protected by industry-leading security protocols and are FDIC Insured
                    <h4 style={{textAlign: 'center', color:'#ffd051'}}>24/7 Supports</h4>
                    We provide 24/7 customer support through e-mail and telegram. Our support representatives are periodically available to elucidate any difficulties.</h3>
                        <h3 style={{textAlign: 'center', color:'#111'}}>
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