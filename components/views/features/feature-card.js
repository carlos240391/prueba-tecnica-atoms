import React from 'react';
import { GridCardFeatures } from './features-styles';

const FeatureCard = (props) => {

    const {item, i} = props
    React.useEffect(()=>{
        const elementTitle = document.querySelector(`#title${i}`)
        const elementText = document.querySelector(`#text${i}`)
        elementTitle.innerHTML = item.title
        elementText.innerHTML = item.text
    },[])

    return (
        <GridCardFeatures>
            <img src={item.icon} alt="icono"/>
            <h2 id={`title${i}`}></h2>
            <p id={`text${i}`}></p>
        </GridCardFeatures>
    );
};

export default FeatureCard;