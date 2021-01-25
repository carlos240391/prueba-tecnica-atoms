import React from 'react';
import Link from 'next/link'

const StartGrowing = () => {

    const [ytext, setYtext] = React.useState(0)


    const resize =()=>{
        if(typeof window !== 'undefined'){
            const element = document.querySelector('#txt')
            setYtext(element.getBoundingClientRect().height)
        }
    }
    React.useEffect(()=>{
        
        resize()
        window.addEventListener('load', resize)
        window.addEventListener('resize', resize)
        return () => removeEventListener('resize', resize)
    },[])

    return (
        <>
          {/* --------- */}
          <div className="wave-container">
            <section className="wave-container__position">
            <section className="wave-container__content">
                <div className="wave-container__content__text" id="txt">
                    <h1>Start <mark>growing</mark> your bussiness</h1>
                    <p>
                        Tour issue is our main priority.Our 24/7 support team is here
                        to help and make sure our product is up to date. Have a presale question
                        about our products and features? Or looking for a refund? We would love to hear what you
                        concerns. Online awards and publications.
                    </p>
                </div>
                <div    className="wave-container__content__btn"
                        style={{height:ytext}}
                        >
                    <Link href="/started">GET STARTED NOW!</Link>
                </div>
            </section>
            </section>

        

            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                <path d="M0.00,49.98 C110.32,163.31 182.56,116.94 500.27,-0.48 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: 'var(--softpurple)'}}></path>
            </svg>
        
            
            {/* <MediaQuery query="(max-width:800px)">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M-3.10,149.50 C-1.97,150.48 157.73,107.06 500.27,-0.48 L500.00,150.00 L-29.62,253.13 Z" style={{stroke: 'none',fill: 'var(--softpurple)'}}>
                </path>
            </svg> 
            </MediaQuery> */}
            
            </div>
            {/* ------- */}
     
        </>
    );
};

export default StartGrowing;