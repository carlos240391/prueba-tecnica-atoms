import styled from 'styled-components'



export const NavWrapper = styled.nav`     
        position:sticky;
        top:0px;
        left:0px;
        z-index:900;
        display:flex;
        justify-content: center;
        background:${(props) => props.scroll > 100 ? 'var(--white)' : 'none'};
        transition:all 0.5s;
        @media (max-width:800px){
            background:var(--white);
        }
        .nav-container{
            width:100%;
            max-width:1200px;
            height:80px;
            font-size:18px;
            padding:0 20px;
            display:flex;
            justify-content: space-between;
            align-items: center;
            .features{
                display:flex;
                position:relative;
                @media (max-width:800px){
                    width:100%;
                    flex-flow:column;
                }
                :hover .features__dropdown{
                    transition:all 0.5s;
                    max-height:500px;
                }
                &__dropdown{
                    position:absolute;
                    width:300px;
                    max-height:0px;
                    top:100%;
                    left:0px;
                    overflow:hidden;
                    @media (max-width:800px){
                        position:relative;
                        max-height:800px;
                        width:100%;
                        display:none;
                    }
                    a{
                        padding:10px 20px;
                        background:var(--white);
                        color:var(--blue);
                        
                        :hover{
                            color:var(--black);
                        }
                    }
                }
                &__btn{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    position:relative;
                    
                    img{
                        transition:all 0.3s;
                        margin-left:5px;
                    }
                    
                }
            }
            .active{
                color:var(--blue);
            }
            .home{
                color:var(--black);
            }
            #login, #started{
                display:flex;
                padding:10px 20px;
                border-radius:20px;
                border:1px solid var(--blue);
                a{color:var(--blue);} 
                @media (max-width:800px){
                    border:none!important;
                    margin:0px!important;
                    padding:0px!important;
                    width:100%;
                    a{
                        color:var(--black)!important;
                    }
                }
            }
            #started{
                border:${(props) => props.scroll > 100 ? '1px solid var(--blue)' : '1px solid var(--white)' };
                a{
                    color:${(props) => props.scroll > 100 ? 'var(--blue)' : 'var(--white)'};
                } 
            }
            #login{
                margin-right:10px;
            }
            
            &__logo{
                font-size:3rem;
                cursor:pointer;
            }
            &__buttons{
                display:flex;
                align-items:center;
                @media (max-width:800px){
                    align-items:flex-start;
                    background:var(--white);
                }
                a{
                    text-decoration:none;
                    color:black;
                    position:relative;
                    display:flex;
                    padding:0px 20px;
                    font-size:1.5rem;
                    font-weight:200;
                    cursor:pointer;
                    :hover{
                        color:var(--blue);
                    }
                    @media (max-width:800px){
                        padding:20px;
                        width:100%;
                        background:${(props) => props.scroll > 100 ? 'var(--white)' : 'none'};
                    }
                }
                @media (max-width:800px){
                    position:absolute;
                    top:99%;
                    width:100%;
                    left:0px;
                    display:flex;
                    flex-flow:column;
                    overflow:hidden;
                    max-height:0px;
                    transition:all 0.5s;
                }
        }  
        }
        





/*---------------> CLASE DE TOGGLE */
        .open{
            max-height:100vh;
        }
        .toggle span{
            transform:rotate(360deg);
            background-color:transparent;
        }
        .toggle span::before{
            transform:translateY(0px) rotate(45deg);
        }
        .toggle span::after{
            transform:translateY(-3px) rotate(-45deg);
        } 

        button{
            display:none;
            
            @media (max-width:800px){
                display:block;
                outline:none;
                width:28px;
                height:30px;
                background:none;
                border:none;
                cursor:pointer;
            }
            span, span::before, span::after{
                display:block;
                content:'';
                background:black;
                height:3px;
                width:28px;
                border-radius: 4px;
                transition:all 0.5s;
            }
            span::before{
                transform: translateY(-8px);
            }
            span::after{
                transform: translateY(5px);
            }
            
        }
`;