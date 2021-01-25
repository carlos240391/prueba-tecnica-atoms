import React from 'react';
import Container from '../layouts/containers';
import { ContainerTitle } from './title-styles';

const Title = (props) => {
    return (
        <>
        <Container  id={props.id}
                    maxWidth="800px"
                    backColor={props.backColor}
                    >
        <ContainerTitle padding={props.padding}>
          {props.children}  
        </ContainerTitle>
        </Container>
        </>
    );
};

export default Title;