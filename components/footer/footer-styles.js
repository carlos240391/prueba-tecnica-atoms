import styled from 'styled-components'


export const FooterContainer = styled.footer`
        width:100%;
        background-color:var(--softpurple);
        background-image:url('/assets/img/bg.jpg');
        background-position:top center;
        background-position-y:-100px;
        background-size:cover;
        position:relative;
        background-repeat:no-repeat;
        overflow:hidden;
        height:350px;
        @media (max-width:850px){
            height:500px;
            background-position-y:-10px;
        }   
        @media (max-width:600px){
            height:700px;
        }
        
        .footer-section__grid{
            width:100%;
            height:100%;
            position:absolute;
            z-index:2;
            max-width:1200px;
            top:0px;
            left:50%;
            transform:translateX(-50%);
            display:flex;
            h2{
                margin-bottom:20px;
                font-size:1.7rem;
                @media (max-width:500px){
                    margin-bottom:10px;
                }
            }

            @media (max-width:850px){
                flex-flow:column;
            }
            
            &__left{
                width:100%;
                max-width:500px;
                padding:20px;
                p{
                    padding-bottom:20px;
                }
                &__redes{
                    display:flex;
                    a{
                        width:25px;
                        height:25px;
                        display:flex;
                        margin-right:30px;
                        
                        img{
                            width:100%;    
                        }
                    }
                }
                @media (max-width:1040px){
                    max-width:300px;
                }
                @media (max-width:850px){
                    max-width:100%;
                }
            }
            &__right{
                width:calc(100% - 500px);
                display:grid;
                grid-template-columns:repeat(3, 200px);
                justify-content:space-between;
                align-items:flex-start;
                padding:20px;
                
                @media (max-width:1040px){
                    width:calc(100% - 300px);
                }
                @media (max-width:850px){
                    width:100%;
                }
                @media (max-width:600px){
                    grid-template-columns:repeat(3, 200px);
                    grid-gap:10px 0px;
                }
                @media (max-width:500px){
                    grid-template-columns:repeat(2, 250px);
                }
                @media (max-width:450px){
                    grid-template-columns:repeat(2, 200px);
                }
                @media (max-width:350px){
                    grid-template-columns:repeat(2, 150px);
                    
                }
                @media (max-width:300px){
                    grid-template-columns:repeat(auto-fill, 150px);

                }
                &__column{
                    width:200px;
                    display:flex;
                    flex-flow:column;
                    a{
                        color:var(--black);
                        padding-bottom:15px;
                    }
                    @media (max-width:600px){
                        width:250px;
                    }
                    @media (max-width:500px){
                        width:100%;
                    }
                }
            }
            
        }

        :before{
            content:'';
            position: absolute;
            top:0px;
            width:100%;
            height:700px;
            background:linear-gradient(var(--softpurple), transparent);
            z-index:1;
        }
`;