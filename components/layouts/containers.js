import React from 'react';
import {ContainerStyle} from './containers-style'


const Container = (props) => {
    return (
        <>
        <ContainerStyle     id={props.id}
                            maxWidth={props.maxWidth}
                            backColor={props.backColor}
                            >
            <section className="container_position">
                {props.children}   
            </section>
        </ContainerStyle>
        </>
    );
};

export default Container;