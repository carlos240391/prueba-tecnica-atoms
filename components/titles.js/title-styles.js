import styled from 'styled-components'



export const ContainerTitle = styled.main`
        text-align:center;
        padding:${(props) => props.padding ? props.padding : '20px'};
        @media (max-width:800px){
            text-align:left;
            padding:20px;
        }
        h1{
            padding-bottom:15px;
            position:relative;
            :before{
                content:'';
                display:block;
                width:70px;
                height:1px;
                background:var(--black);
                position:absolute;
                bottom:0px;
                left:calc(50% - 35px);
                @media (max-width:800px){
                    left:0px;
                }
            }
        }
        p{
            padding-top:15px;
        }
`;