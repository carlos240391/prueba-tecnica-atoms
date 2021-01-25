import styled from 'styled-components'




export const LogotypesContainer = styled.section`
        padding:20px;
        display:grid;
        grid-template-columns:repeat(5,240px);
        justify-content:space-between;
        grid-gap:50px 10px;
        margin:50px 0px;
     
        @media (max-width:1200px){
            grid-template-columns:repeat(auto-fill,240px);
            justify-content:center;
        }
        @media (max-width:530px){
            grid-template-columns:repeat(2,150px);
            img{
                width:150px;
            }
        }
        @media (max-width:360px){
            grid-template-columns:repeat(2,100px);
            img{
                width:100px;
            }
        }
        
`; 



export const LogotypesContainerCarousel = styled.section`
        padding:40px 20px;
        .rec-dot{
            display:none!important;
  
        }
        button{
            background:none!important;
            border:none!important;
            box-shadow:none!important;
            :hover{
                color:black!important;
            }
        }
`;

