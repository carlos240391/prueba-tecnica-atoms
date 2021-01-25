import React from 'react';
import {motion} from 'framer-motion'
import Title from '../../titles.js/title';
import Container from '../../layouts/containers';
import ApiCode from './api-code';


const EasyApi = (props) => {

    

    return (
        <>
        <div id="api">
            <motion.div exit={{opacity:0}}
                        initial={{opacity:0,y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:0.5}}>

            {/*---------> ⛳   SECTION TITLE */}
            <Title  backColor="var(--graymedium)"
                    padding="100px 20px 20px 20px"
                    >
                <h1>Easy to use API</h1>
                <p>
                Guide to setup and configuration. tou can present below a guide and description
                of how your system configuration works and add some animated screens.
                </p>
            </Title>


            {/*--------> ⛳  SECTION CONTENT */}
            <Container backColor="var(--graymedium)">
            
                <ApiCode/>
                
            </Container>
            </motion.div>
        </div>
        </>
    );
};

export default EasyApi;