import React from 'react';
import Container from '../../layouts/containers';
import Title from '../../titles.js/title';
import {motion} from 'framer-motion'
import { featuresItems } from '../../../utils/items';
import FeatureCard from './feature-card';
import { GridFeatures } from './features-styles';


const Features = () => {
    return (
        <>
        <div id="features">
       
            
            <motion.div exit={{opacity:0}}
                        initial={{opacity:0,y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:2.5, delay:2}}>

            {/*---------> ⛳   SECTION TITLE */}
            <Title>
                <h1>Features designed for you</h1>
                <p>
                We believe we have created the most efficent SaaS landing page for your users. Landing page
                width features that will convince you to use it for your SaaS business.
                </p>
            </Title>


            {/*--------> ⛳  SECTION CONTENT */}
            <Container>
                <GridFeatures>
                {featuresItems.map((item, i) =>{
                    return <FeatureCard item={item}
                                        key={i}
                                        i={i}
                                        />
                })}
                </GridFeatures>

            </Container>
            </motion.div>
        </div>
        </>
    );
};

export default Features;