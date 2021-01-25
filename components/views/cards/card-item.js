import React from 'react';
import { GridCard, HoverCard } from './card-styles';

const CardItem = (props) => {

    const {item, i} = props

    React.useEffect(()=>{
        const elementTitle = document.querySelector(`#titles${i}`)
        const elementText = document.querySelector(`#texts${i}`)
        const elementTitleHover = document.querySelector(`#titleshover${i}`)
        const elementTextHover = document.querySelector(`#textshover${i}`)
        elementTitle.innerHTML = item.title
        elementText.innerHTML = item.text
        elementTitleHover.innerHTML = item.title
        elementTextHover.innerHTML = item.text
    },[])

    return (
        <GridCard>
            <img src={item.icon} alt="icono"/>
            <h2 id={`titles${i}`}></h2>
            <p id={`texts${i}`}></p>
            <a href={`mailto:${item.email}`}>{item.email}</a>

            
            
            <HoverCard className="hover-card">

                <h2 id={`titleshover${i}`}></h2>
                <p id={`textshover${i}`}></p>
                <a href={`mailto:${item.email}`}>{item.email}</a>
            </HoverCard>
           
        </GridCard>
        
    );
};

export default CardItem;