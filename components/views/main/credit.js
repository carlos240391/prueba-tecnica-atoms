import React from 'react';
import { ContainerCredit } from './credit-styles';
import {motion} from 'framer-motion'
import swal from '@sweetalert/with-react'
import DemoComponent from './demo-component';
import Simulator from './simulator';
import Link from 'next/link'

const Credit = (props) => {


    React.useEffect(()=>{window.scrollTo(0,0)},[])


    const demoView = () =>{
        swal({
            content: <DemoComponent/>,
            buttons:false,
            className:"modal"
          });
    }

    return (
        <ContainerCredit id="home" className="credit-container">

            <motion.div className="credit-text"
                        exit={{opacity:0}}
                        initial={{opacity:0,y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:1.5, delay:1}}
                        >   

                    <h1>Build applications <mark>faster</mark></h1>
                    <p>
                        Hire experts & get yout job done. The right IT security
                        solutions. Protect your clients and computer systems from
                        hackers and fight against malware.
                    </p>
                    
                    <span> For as low as <mark>$0.95</mark> per user account</span>
                    

                    <div className="credit-text__buttons">
                        <button onClick={demoView}>
                            WATCH DEMO
                            <img src="assets/img/btn-play.png" alt="media button"/>
                        </button>
                        
                        
                        <Link href="/started">START NOW</Link>
                    </div>
            </motion.div>


            <motion.div
                        className="credit-counter"
                        exit={{opacity:0}}
                        initial={{opacity:0,y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:1.5, delay:1.5}}
                >

                {/* ----->ESTE ES EL COMPONENTE CON EL SIMULADOR
                DE CREDITO */}

                <Simulator/>
            </motion.div>

        
        </ContainerCredit>
    );
};

export default Credit;