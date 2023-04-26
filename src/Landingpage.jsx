import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import image from "./components/images/37DA375F-4A3B-4E68-A35E-FF29384BBB26_4_5005_c.jpeg"
import secondimage from "./components/images/CFFD95C9-81A4-4E7B-8EFC-54764108EF4A_4_5005_c.jpeg"

function LandingPage() {

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };

    return (
      <div className="landing-page-containers">
      <div className="landing-page-container">
        <header className="landing-page-header">
          {/* <div className="landing-page-header-content">
            <h1>Blockvault Investment</h1>
            <p>A secure and easy way to invest in digital assets.</p>
          </div> */}
          <Slider {...settings}>
      <div className="carousel-image">
        <img src={image} alt="Image 1" />
      </div>
      <div className="carousel-image">
        <img src={secondimage} alt="Image 2" />
      </div>
    </Slider>
        </header>
        <main className="landing-page-main">
          <div className="landing-page-intro">
            <h2>What is Cryptocurrency?</h2>
            <p>Cryptocurrency is a digital or virtual currency that uses cryptography for security. It is decentralized, meaning it is not controlled by any central authority such as a government or financial institution. Cryptocurrencies operate independently of traditional banking systems and can be used for peer-to-peer transactions or to purchase goods and services.</p>
          </div>
          <div className="landing-page-buttons">
          <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
          </div>
        </main>
        <footer className="landing-page-footer">
          <p>© 2023 Blockvault Investment. All rights reserved.</p>
        </footer>
      </div>
      </div>
    );
  };
  
  export default LandingPage;