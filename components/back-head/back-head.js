import React from 'react';
import { ContainerBackHead } from './back-head-styles';
import {motion} from 'framer-motion'



const BackHead = (props) => {

    const [top, setTop] = React.useState(0)

    const scroll = React.useCallback(()=>{
        const y = window.scrollY;
        setTop(y);
    },[])

    React.useEffect(()=>{
        window.addEventListener('scroll', scroll)
        return () => window.removeEventListener('scroll', scroll)
    },[scroll])


    return (
        <>
        <ContainerBackHead style={{ transform:`translateY(${-top * 1.2}px)` }}>
            {/* <section className="mask"> */}
            <motion.div exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.5, delay:1}}
                    className="mask">

                <section className="clip-path"></section>
            </motion.div>
            {/* </section>  */}
        </ContainerBackHead>
        
        </>
    );
};

export default BackHead;