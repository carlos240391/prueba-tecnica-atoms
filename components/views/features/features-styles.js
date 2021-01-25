import styled from 'styled-components'




export const GridFeatures = styled.section`
            margin-bottom:50px;
            display:grid;
            grid-template-columns:repeat(3, 310px);
            justify-content:space-between;
            padding:20px;
            grid-gap:100px 20px;
            @media (max-width:1000px){
                grid-gap:100px 40px;
                grid-template-columns:repeat(auto-fill, 310px);
                justify-content:center;
            }
            @media (max-width:700px){
                grid-template-columns:repeat(auto-fill, 100%);
                grid-gap:10px 40px;
            }
`;

export const GridCardFeatures = styled.section`
            width:310px;
            @media (max-width:700px){
                width:100%;
            }
            img{
                margin-bottom:0px;
            }
            h2{
                padding-bottom:20px;
                font-size:2rem;
                font-weight:300;
                position:relative;
                :before{
                    content:'';
                    display:block;
                    width:50px;
                    height:1px;
                    background:var(--purple);
                    position:absolute;
                    bottom:-1px;
                }
                mark{
                    font-weight:700;
                    background:none;
                }
            }
            p{
                padding:20px 0px;
            }

`;