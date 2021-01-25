import styled from 'styled-components'



export const CardContainer = styled.section`
            margin-bottom:50px;
            display:grid;
            grid-template-columns:repeat(3, 360px);
            justify-content:space-between;
            padding:20px;
            grid-gap:20px;
            @media (max-width:1200px){
                grid-gap:40px;
                grid-template-columns:repeat(auto-fill, 360px);
                justify-content:center;
            }
            @media (max-width:700px){
                grid-template-columns:repeat(auto-fill, 360);
                grid-gap:20px;
            }
            @media (max-width:360px){
                grid-template-columns:repeat(auto-fill, 100%);
            }
`;
export const GridCard = styled.section`
            width:360px;
            background:var(--graymedium);
            padding:55px 50px;
            display:flex;
            justify-content:flex-start;
            align-items:flex-start;
            flex-flow:column;
            position:relative;
            overflow:hidden;
            @media (max-width:360px){
                width:100%;
                padding:55px 20px;
            }
            img{
                margin-bottom:10px;
            }
            h2{
                padding-bottom:25px;
                font-size:2.1rem;
                position:relative;
                :before{
                    content:'';
                    display:block;
                    width:50px;
                    height:1px;
                    background:var(--blue);
                    position:absolute;
                    bottom:-1px;
                }
                mark{
                    font-weight:700;
                    background:none;
                }
            }
            p{
                padding:25px 0px;
                font-size:1.7rem;
            }
            a{
                padding:7px 20px;
                background:var(--purple);
                border-radius:20px;
                color:var(--white);
                font-weight:700;
                font-size:1.4rem;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            :hover{
                -webkit-box-shadow: 0px 0px 10px -2px rgba(122,121,122,0.3);
                -moz-box-shadow: 0px 0px 10px -2px rgba(122,121,122,0.3);
                box-shadow: 0px 0px 10px -2px rgba(122,121,122,0.3);
            }
            :hover .hover-card{
                bottom:0px;
                
            }
`;


export const HoverCard = styled(GridCard)`
            width:100%;
            height:300px;
            position:absolute;
            background:var(--blue);
            left:0px;
            bottom:-300px;
            transition:all 0.3s;
            padding:30px 50px;
            h2, p, a{
                color:white;
            }
            h2:before{
                background:var(--white);
            }
            a{
                background:none;
                border:1px solid var(--white);
            }
`;