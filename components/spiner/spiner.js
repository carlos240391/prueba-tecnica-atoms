import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
const Spiner = () => {
    return (
        <div style={{
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
             <FadeLoader
                color="var(--purple)"  size={250}/>
        </div>
    );
};

export default Spiner;