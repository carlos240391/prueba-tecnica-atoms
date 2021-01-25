import styled from 'styled-components'




export const FaqContainer = styled.section`
            margin:70px 0px;
            display:flex;
            @media (max-width:800px){
                flex-flow:column;
            }
            .faq-text{
                width:calc(100% - 650px);
                padding:20px;
                @media (max-width:1000px){
                    width:calc(100% - 550px);
                }
                @media (max-width:900px){
                    width:calc(100% - 450px);
                }
                @media (max-width:800px){
                    width:100%;
                }
                h1{
                    margin-bottom:20px;
                }
                p{
                    margin-bottom:40px;
                    font-size:2rem;
                }
                ul{
                    list-style:none;
                    font-size:1.8rem;
                    li{
                        color:var(--font);
                        margin-bottom:20px;
                    }
                    li:before{
                        content:url('/assets/img/checked.png');
                        margin-right:20px;                    
                    }
                }
            }

            .faq-dropdown{
                width:100%;
                max-width:650px; 
                padding:20px;
                @media (max-width:1000px){
                    max-width:550px; 
                }
                @media (max-width:900px){
                    max-width:450px;
                }
                @media (max-width:800px){
                    max-width:100%;
                }
            }
`;