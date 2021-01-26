
///ESTE COMPONENTE ES UNA RUTA 
///DE PRUEBA PARA LOS ENLACES,
///UNICAMENTE CON LA FINALIDAD
///DE NO DEJAR SIN ACCIONES 
///LOS BOTONES CON REDIRECCION
//
//
//
//
//



import React from 'react';
import {motion} from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'

const Started = () => {
    return (
        <motion.div 
            exit={{opacity:0}}
            initial={{opacity:0,y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:1.5}}
        >
        <Head>
            <title>LATERAL | STARTED</title>
        </Head>
        <section style={{
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexFlow:'column'
        }}>
            
            <h1>STARTED</h1>
            <Link   href="/"
                    >HOME</Link>
        </section>
        </motion.div>
    );
};

export default Started;