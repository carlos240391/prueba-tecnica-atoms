import React from 'react';
import { logosItems } from '../../../utils/items';
import Container from '../../layouts/containers';
import MediaQuery from '../../media_query/media_query';
import LogotypeItem from './logotype-item';
import { LogotypesContainer, LogotypesContainerCarousel } from './logotypes-styles';
import Carousel from 'react-elastic-carousel'




const Logotypes = (props) => {

    const breakPoints = [
        {width:1, itemsToShow:1},
        {width:550, itemsToShow:2},
        {width:768, itemsToShow:3},
        {width:1000, itemsToShow:4},
    ]

    return (
        <>
        <Container>
        <MediaQuery query="(min-width:1200px)">
            <LogotypesContainer>
                {logosItems.map((item, i) =>{
                    return <LogotypeItem    item={item}
                                            i={i}
                                            key={i}
                                            />
                })}
            </LogotypesContainer>
        </MediaQuery>

        <MediaQuery query="(max-width:1200px)">
            <LogotypesContainerCarousel>
            <Carousel breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={10000}>
                {logosItems.map((item, i) =>{
                    return <LogotypeItem    item={item}
                                            i={i}
                                            key={i}
                                            />
                })}
            </Carousel>
            </LogotypesContainerCarousel>
        </MediaQuery>
        </Container>
        </>
    );
};

export default Logotypes;