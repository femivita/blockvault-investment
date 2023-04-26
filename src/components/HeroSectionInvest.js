import React from 'react'
import { Button } from './Button'
// import { Link } from 'react-router-dom'
import './HeroSection.css'
import './RowContainer.css'

function HeroSectionInvest({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel,
     img, alt, imgStart
}) {
    return (
        <>
        <div className={ lightBg ? 'home__hero-section' : 'home__hero-section darkBg' }>
        <div class="container-rowinvest">
  <div class="containerinvest">
    <h2 class="headinginvest">STARTER PACK</h2>
    <div class="big-textinvest">$100</div>
    <hr class="dividerinvest"></hr>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Duration:</div>
      <div class="content-valueinvest">5 Days</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Daily Profit:</div>
      <div class="content-valueinvest">1.8%</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Minimum:</div>
      <div class="content-valueinvest">$100</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Maximum:</div>
      <div class="content-valueinvest">$999</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Referral:</div>
      <div class="content-valueinvest">10%</div>
    </div>
    <div class="dividerinvest"></div>
    <button class="btninvest">Invest</button>
  </div>
  
  <div class="containerinvest">
    <h2 class="headinginvest">STANDARD PACK</h2>
    <div class="big-textinvest">$1,000</div>
    <hr class="dividerinvest"></hr>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Duration:</div>
      <div class="content-valueinvest">5 Days</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Daily Profit:</div>
      <div class="content-valueinvest">2.5%</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Minimum:</div>
      <div class="content-valueinvest">$1,000</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Maximum:</div>
      <div class="content-valueinvest">$4,999</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Referral:</div>
      <div class="content-valueinvest">10%</div>
    </div>
    <div class="dividerinvest"></div>
    <button class="btninvest">Invest</button>
  </div>
  
  <div class="containerinvest">
    <h2 class="headinginvest">PREMIUM PACK</h2>
    <div class="big-textinvest">$5,000</div>
    <hr class="dividerinvest"></hr>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Duration:</div>
      <div class="content-valueinvest">5 Days</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Daily Profit:</div>
      <div class="content-valueinvest">3.0%</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Minimum:</div>
      <div class="content-valueinvest">$5,000</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Maximum:</div>
      <div class="content-valueinvest">$9,999</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Referral:</div>
      <div class="content-valueinvest">10%</div>
    </div>
    <div class="dividerinvest"></div>
    <button class="btninvest">Invest</button>
  </div>
  
  <div class="containerinvest">
    <h2 class="headinginvest">PROFESSIONAL PACK</h2>
    <div class="big-textinvest">$10,000</div>
    <hr class="dividerinvest"></hr>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Duration:</div>
      <div class="content-valueinvest">5 Days</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Daily Profit:</div>
      <div class="content-valueinvest">3.5%</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Minimum:</div>
      <div class="content-valueinvest">$10,000</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Maximum:</div>
      <div class="content-valueinvest">$15,000</div>
    </div>
    <div class="content-rowinvest">
      <div class="content-labelinvest">Referral:</div>
      <div class="content-valueinvest">10%</div>
    </div>
    <div class="dividerinvest"></div>
    <button class="btninvest">Invest</button>
  </div>
</div>

        </div>
        </>
    )
}

export default HeroSectionInvest