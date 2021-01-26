import React from 'react';
import { facebookLink, linkedinLink, twitterLink } from '../../utils/items';
import { FooterContainer } from './footer-styles';
import Link from 'next/link'
import {Link as LinkId} from 'react-scroll'


const Footer = () => {
    return (
        <>
        <FooterContainer>
        <section className="footer-section">
        <section className="footer-section__grid">


               <section className="footer-section__grid__left">
                    <h2>LATERAL</h2>
                    <p>
                        Copyright © 2018 LATERAL.<br/>
                        All Rights Reserved. Proudly made in EU.
                    </p>
                    <br/>
                    <div className="footer-section__grid__left__redes">
                        <a  href={ twitterLink }
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src="/assets/img/social/black/twitter.png" alt="twitter logo"/>
                        </a>

                        <a  href={ facebookLink }
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src="/assets/img/social/black/facebook.png" alt="facebook logo"/>
                        </a>

                        <a  href={ linkedinLink }
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src="/assets/img/social/black/linkedin.png" alt="linkedin logo"/>
                        </a>
                    </div>
               </section>


            <section className="footer-section__grid__right">

               <section className="footer-section__grid__right__column">
                    <h2>Company</h2>
                    <Link href="/started">About</Link>
                    <Link href="/started">Carrers</Link>
                    <Link href="/started">Awards</Link>
                    <Link href="/started">Users program</Link>
                    <Link href="/started">Locations</Link>
               </section>

               <section className="footer-section__grid__right__column">
                    <h2>Products</h2>
                    <Link href="/started">Integrations</Link>
                    <LinkId to="api"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1000}
                            >API</LinkId>
                    <LinkId to="pricing"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1000}
                            >Pricing</LinkId>
                    <Link href="/started">Documentation</Link>
                    <Link href="/started">Release Notes</Link>
               </section>
               
               <section className="footer-section__grid__right__column">
                    <h2>Support</h2>
                    <Link href="/started">Contact</Link>
                    <LinkId to="faq"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1000}
                            >FAQ</LinkId>
                    <Link href="/started">Press</Link>
               </section>

            </section>
        
        </section>
        </section>
        </FooterContainer>
        </>
    );
};

export default Footer;