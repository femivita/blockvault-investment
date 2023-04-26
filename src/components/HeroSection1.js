import React from 'react'
import { Button } from './Button'
// import { Link } from 'react-router-dom'
import './HeroSection.css'
import { Image , Container ,Row ,Col } from "react-bootstrap";
import RowContainer from "./RowContainer";
// import './RowContainer.css'
import CryptoInfo from './CryptoInfo';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel,
    img, alt, imgStart
}) {
    return (
        <>
        <div className={ lightBg ? 'home__hero-section' : 'home__hero-section darkBg' }>
        {/* <RowContainer>
      <div className='containerOne'>
        <CryptoInfo></CryptoInfo>
      </div>
      <div className='containerTwo'>Component 2</div>
      <div className='containerThree'>Component 3</div>
      <div className='containerFour'>Component 3</div>
    </RowContainer> */}
    {/* <div class="container">
  <h2 class="heading">Starter Pack</h2>
  <hr class="divider"></hr>
  <p class="content">Investment amount: $100 (minimum) to $999 (maximum)</p>
  <p class="content">Investment duration: 5 days</p>
  <p class="content">Daily profit rate: 1.8%</p>
  <p class="content">Referral commission rate: 10%</p>
</div> */}
            <div className="container">
                <div className="row home__hero-row" 
                style={{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className='col'>
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection