import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'

const ButtonLinkContainer = styled.span`
        background:red;
        padding:10px 20px;
`


const ButtonLink = (props) => {
    return (
        <>
        <ButtonLinkContainer>

            <Link href={props.ruta}>
                {props.children}
            </Link>
        </ButtonLinkContainer>
        </>
    );
};

export default ButtonLink;