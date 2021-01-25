import styled from 'styled-components'



export const ContainerBackHead = styled.section`
            position:fixed;
            right:0px;
            top:0px;
            min-height:1200px;
            width:110%;
            z-index:-20;
            @media (max-width:800px){
                width:150%;
            }
            @media (max-width:500px){
                width:180%;
            }
            @media (max-width:800px){
                opacity:0.5;
            }
            .mask{
                background-color:var(--softpurple);
                -webkit-mask-image:url('assets/img/clip_head.svg');
                -webkit-mask-repeat:no-repeat;
                -webkit-mask-position-x:right;
                -webkit-mask-size:50%;
                min-height:3200px;
                .clip-path{
                    width:100%;
                    min-height:1000px;
                    background-color:var(--softpurple);
                    background-image:url('assets/img/bg.jpg');
                    background-size:cover;
                    background-repeat:no-repeat;
                    background-position-x:center;
                    background-position-y:bottom;
                @media (max-width:600px){
                    background-position-y:-200px;
                    background-position-x:100%;
                }
                @media (min-width:2000px){
                    min-height:3000px;
                }
                @media (max-width:400px){
                    min-height:600px;
                    background-position-x:center;
                    background-position-y:top;
                }

            }
            
            }
`;