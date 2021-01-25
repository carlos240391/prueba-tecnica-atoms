import React from 'react';
import {CircleImgContainer} from './map-styles'

const CircleImg = (props) => {
    return (
        <>
        <CircleImgContainer 
            img={props.img}
            size={props.size}
            time={props.time}
            left={props.left}
            right={props.right}
            top={props.top}
            bottom={props.bottom}
        />
        </>
    );
};

export default CircleImg;