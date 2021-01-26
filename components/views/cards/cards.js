//
//
// El consumible
// cardsItems
// viene de la carpeta utils
//
//

import React from 'react';
import { cardsItems } from '../../../utils/items';
import Container from '../../layouts/containers';
import CardItem from './card-item';
import { CardContainer } from './card-styles';

const Cards = (props) => {
    return (
        <>
        <Container>
           <CardContainer>
           {cardsItems.map((item, i) =>{
               return <CardItem key={i}
                                item={item}
                                i={i}
                                />
            })}
            </CardContainer>
        </Container>
        </>
    );
};

export default Cards;