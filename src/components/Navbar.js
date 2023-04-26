import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'
import WebFont from 'webfontloader';



function Navbar() {
    const [click,setClick] = useState(false)
    const[button, setButton] = useState(true)
    
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <=960 ) {
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Raleway']
          }
        });
       }, []);
      

      
    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar" style={{fontFamily: 'Raleway'}} >
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        {/* <GiGoldBar className='navbar-icon'/> */}

                        Blockvault Investment
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/aboutus' className="nav-links" onClick={closeMobileMenu}>
                                ABOUT US
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                PRODUCTS
                            </Link>
                        </li> */}
                        {/* <li className="nav-btn">
                            {button ? (
                                <Link to='/SignUp' className='btn-link' >
                                    <Button buttonStyle='btn--outline'>WHITE PAPER</Button>
                                </Link>
                            ):(
                                <Link to='/SignUp' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile' >WHITE PAPER</Button>
                                </Link>
                            )} */}
                            <li className='nav-btn'>
                            <a>
                            <Link to="/register"><Button buttonSize='btn--wide' buttonColor='blue'>Sign up</Button></Link>
                            </a>

                        </li>
                        <li className='nav-btn'>
                            <a>
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                
                            </Link>
                            </a>

                        </li>
                        <li className='nav-btn'>
                            <a>
                            <Link to="/login"><Button buttonSize='btn--wide' buttonColor='blue'>Login</Button></Link>
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
          </IconContext.Provider>
        </>
    )
}

export default Navbar