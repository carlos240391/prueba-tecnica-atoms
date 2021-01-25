import styled from 'styled-components'




export const ContainerStyle = styled.article`
        width:100%;
        background:${(props) => props.backColor ? props.backColor : 'none'};
        .container_position{
            width:100%;
            max-width:${(props) => props.maxWidth ? props.maxWidth : '1200px'};
            margin:auto;
        }
`;

