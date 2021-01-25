import styled from 'styled-components'



export const ContainerCredit = styled.main`
        width:100%;
        max-width:1200px;
        margin:auto;
        display:flex;
        flex-flow:row;
        padding-top:70px;
        margin-bottom:70px;
        @media (max-width:910px){
            flex-flow:column;
            align-items:center;
        }
        mark{
            background:none;
            color:var(--purple);
            font-weight:900;
        }
        .credit-text,
        .credit-counter{
            width:100%;
            padding:20px;
        }
        .credit-text{
     
            max-width:600px;
            h1{
                margin-bottom:20px;
            }
            p{
                font-size:2.2rem;
            }
            span{
                display:block;
                color:var(--blue);
                margin:40px 0px;
                font-size:1.9rem;
            }
            &__buttons{
                display:flex;
                button, a{
                    padding:10px 20px;
                    border:none;
                    margin-right:15px;
                    color:white;
                    background:var(--blue);
                    border-radius:20px;
                    outline:none;
                    cursor:pointer;
                    width:200px;
                    display:flex;
                    align-items:center;
                    justify-content:space-around;
                    font-weight:700;
                    font-size:1.4rem;
                    :hover{
                        filter:contrast(125%);
                    }
                }
                a{
                    background:var(--purple);
                }
            }
            
        }
        .credit-counter{
            max-width:600px;
            @media (max-width:910px){
                max-width:100%;
                display:flex;
                justify-content:center;
            }
        }
`;




export const SimulatorContainer = styled.section`
        width:100%;
        max-width:400px;
        padding:20px;
        background:var(--white);
        border-radius:6px;
        -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.2);
        

        





        .simulator-title{
            margin-bottom:20px;
            h1{
                font-size:2rem;
                text-transform:uppercase;
                font-weight:700;
                text-align:center;
                padding:20px 0px;
                position:relative;
                margin-bottom:20px;
                :before{
                    content:'';
                    display:block;
                    width:80px;
                    height:1px;
                    background:var(--black);
                    position:absolute;
                    bottom:0px;
                    left:calc(50% - 40px);
                }
            }
        }
        .simulator-field{
            padding:10px 0px;
            label{
                padding-bottom:15px;
                display:flex;
                justify-content:flex-end;
                font-weight:700;
            }
        }
        .simulator-radios{
            margin-top:10px;
            padding:10px 0px;
            border-top:1px solid var(--gray);
            border-bottom:1px solid var(--gray);
            &__title{
                h2{
                    text-align:center;
                    font-size:1.5rem;
                }
            }
            &__fields{
                display:flex;
                justify-content:space-around;
                padding:20px 0px 0px 0px;

                input[type="radio"]{
                    display:none;
                }

                input[type="radio"] + label{
                    display:flex;
                    width:40px;
                    height:40px;
                    border-radius:100%;
                }
                input[type="radio"] + label span{
                    width:100%;
                    height:100%;
                    background:var(--white);
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border-radius:100%;
                    border:1px solid var(--purple);
                    cursor:pointer;
                }
                input[type="radio"]:checked + label span{
                    background:var(--purple);
                    color:var(--white);
                }
            }
            &__numbers{
                padding:10px 0px;
                &__counter{
                    display:flex;
                    justify-content:flex-end;
                    align-items:center;
                    padding:5px;
                    @media (max-width:400px){
                        flex-flow:column;
                    }
                    span{
                        width:150px;
                        padding:3px;
                        margin-left:10px;
                        display:flex;
                        justify-content:center;
                        border-radius:20px;
                        border:2px solid var(--gray);
                        @media (max-width:400px){
                            margin-left:0px;
                        }
                    }
                }
            }
            &__btn{
                margin:10px 0px;
                text-align:center;
                display:flex;
                justify-content:center;
                a{
                    width:220px;
                    padding: 15px 20px;
                    border:none;
                    border-radius:25px;
                    background:var(--purple);
                    color:var(--white);
                    cursor:pointer;
                    font-weight:700;
                    :hover{
                        filter:contrast(155%);
                    }
                }
            }
        }
        
`;