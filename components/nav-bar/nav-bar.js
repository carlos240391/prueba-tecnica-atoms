import React from 'react';
import { NavWrapper } from './nav-bar-styles';
import { Link as LinkScroll } from 'react-scroll'
import Link from 'next/link'
import {motion} from 'framer-motion'


const NavBar = () => {
    const [yPos, setYPos] = React.useState(0)

    const scrollChange = React.useCallback(()=>{
            const y = window.scrollY
            setYPos(y)
    },[])

    React.useEffect(()=>{  
        window.addEventListener('scroll',scrollChange );
        return () => window.removeEventListener('scroll', scrollChange);
     },[scrollChange])


    const clickButton = () =>{
        const navbarToggle = document.querySelector('#openclose')
        const navButtons = document.querySelector('.nav-container__buttons')
        navbarToggle.classList.toggle('toggle')
        navButtons.classList.toggle('open')
    }

    const clickLink = () =>{
        const navButtons = document.querySelector('.nav-container__buttons')
        const navbarToggle = document.querySelector('#openclose')

        
        if(navButtons.classList.contains('open')){
            navButtons.classList.toggle('open')
            navbarToggle.classList.remove('toggle')
        }
    }

    return (
        <>
        <NavWrapper scroll={yPos}>
        <motion.div exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                    className="nav-container">
                        
            <div className="nav-container__logo">
            <LinkScroll     to="home"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1000}
                            activeClass="home"
                            onClick={clickLink}
                            >LATERAL</LinkScroll>
            </div> 


            <section className="nav-container__buttons">
            <LinkScroll     to="home"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1000}
                            activeClass="active"
                            onClick={clickLink}
                            >HOME</LinkScroll>
            <div className="features">
                <LinkScroll     to="features"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1000}
                                activeClass="active"
                                onClick={()=>{
                                    clickLink()
                                }}
                                >
                                <div className="features__btn">
                                    FEATURES
                                    <img src="/assets/img/drop-down-faq.png" alt="Features"/>
                                </div>
                </LinkScroll>

                {/*-------------------> BUTTON WITH SUBMENUS */}
                
                <div className="features__dropdown">
                    <LinkScroll to="features"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1000}
                                activeClass="active"
                                onClick={clickLink}
                                >Responsive layout template</LinkScroll>
                    <LinkScroll to="features"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1000}
                                activeClass="active"
                                onClick={clickLink}
                                >SaaS Landing Page Analysis</LinkScroll>
                    <LinkScroll to="features"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1000}
                                activeClass="active"
                                onClick={clickLink}
                                >Smart BEM Grid</LinkScroll>
                    <LinkScroll to="features"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1000}
                                activeClass="active"
                                onClick={clickLink}
                                >Multiple Unique Designs</LinkScroll>
                    <LinkScroll to="features"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1000}
                                activeClass="active"
                                onClick={clickLink}
                                >Flexible HTML Sections</LinkScroll>
                    <LinkScroll to="features"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1000}
                                activeClass="active"
                                onClick={clickLink}
                                >User Friendly</LinkScroll>
                </div>
            </div>

            <LinkScroll     to="pricing"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1000}
                            activeClass="active"
                            onClick={clickLink}
                            >PRICING</LinkScroll>

            <Link href="/started" >CONTACT</Link>

            {/*------------------> LOGIN AND GETING STARTED */}
            <div id="login">
                <Link   href="/started"
                        >
                        LOGIN</Link>
            </div>

            <div id="started">
                <Link   href="/started"
                        >
                        GET STARTED</Link>
            </div>
           

            </section>



            {/*--------------------->  HAMBURGUER/RESPONSIVE */}

            <button className="" onClick={clickButton} id="openclose">
                <span></span>
            </button>

            
        </motion.div>
        </NavWrapper>   
        </>
    );
};

export default NavBar;