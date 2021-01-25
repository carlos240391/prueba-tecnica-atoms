import React from 'react';
import {motion} from 'framer-motion'
import Title from '../../titles.js/title';
import Container from '../../layouts/containers';
import { itemsPrices } from '../../../utils/items';
import PricingCard from './pricing-card';
import { GridPrices, TogglePrices } from './pricing-styles';

const plans = ['month', 'year']


const EasyPricing = (props) => {


    const [switchPlan, setSwitchPlan] = React.useState('month')
    


    return (
        <>
        <div id="pricing" >
      
            <motion.div exit={{opacity:0}}
                        initial={{opacity:0,y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:0.5}}>

            {/*---------> ⛳   SECTION TITLE */}
            <Title>
                <h1>Flexible Pricing</h1>
                <p>
                    We blieve we have created the most efficent SaaS landing page for your
                    users. Landing page with features that will convince you to use it for SaaS business.
                </p>
            </Title>


            {/*--------> ⛳  SECTION CONTENT */}
            <Container>
            <TogglePrices>
            {plans.map((item, i) =>{
                return(
                    <div    key={i}
                            className="toggle-radios"
                            >
                        <input  type="radio" 
                                value={item}
                                name="plan"
                                id={`plan${i}`}
                                checked={switchPlan === item}
                                onChange={()=> setSwitchPlan(item)}
                                />
                        <label  htmlFor={`plan${i}`}>
                            <span>{item}</span>
                        </label>
                    </div>
                )
            })}
            </TogglePrices>

            <GridPrices>
            {itemsPrices.map((item, i) =>{
                return <PricingCard key={i}
                                    item={item}
                                    switchPlan={switchPlan}
                                    i={i}
                                    />
            })}
            </GridPrices>
                
            </Container>
            </motion.div>
            
        </div>
        </>
    );
};

export default EasyPricing;