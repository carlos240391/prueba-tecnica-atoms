import styled from 'styled-components'




export const GridPrices = styled.section`
            width:100%;
            display:grid;
            grid-template-columns:repeat(auto-fill, 300px);
            @media (max-width:1200px){
                justify-content:center;
                grid-template-columns:repeat(2, 300px);
            }
            @media (max-width:850px){
                grid-template-columns:repeat(auto-fill, 300px);
            }
`;


export const GridCardPrices = styled.section`
            width:300px;
            padding:50px 30px;
            position:relative;
            overflow:hidden;
            :hover{
                transform:scale(1.01);
                transition:all 0.5s;
                top:-10px;
                background:var(--purple);

                h2,h3,padding,li,
                mark, span{
                    color:white;
                    :before{
                        background:white;
                    }
                }
                h2{
                    font-size:4.5rem;
                }
                img{
                    filter:invert(100%);
                }
                .btn>a{
                    background:var(--blue);
                    color:var(--white);
                }
                
            }
            .popular{
                position:absolute;
                width:140px;
                height:140px;
                background:var(--blue);
                top:-70px;
                left:-70px;
                transform:rotate(-45deg);
                display:flex;
                justify-content:center;
                align-items:flex-end;
                padding:5px;
                color:white;
                z-index:-1;
            }
            mark{
                background:none;
                font-weight:700;
            }
            h2{
                text-align:center;
                padding-bottom:10px;
                position:relative;
                :before{
                    content:'';
                    display:block;
                    position:absolute;
                    width:60px;
                    height:1px;
                    background:var(--black);
                    bottom:0px;
                    left:calc(50% - 30px);
                }   
            }
            h3{
                text-align:center;
                padding:20px 0px;
                span{
                    font-size:5rem;
                }
            }
            .btn{
                text-align:center;
                padding:20px 0px;
                display:flex;
                justify-content:center;
                a{
                    width:200px;
                    padding:10px;
                    border-radius:50px;
                    border:none;
                    background:none;
                    color:var(--blue);
                    border:2px solid var(--blue);
                    font-size:1.5rem;
                    font-weight:700;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    cursor:pointer;
                    :hover{
                        filter:contrast(115%);

                    }
                }
            }
`;

export const ItemList = styled.div`
            margin:10px 0px;
            padding:0px 0px 0px 20px;
            position:relative;
            img{
                position:absolute;
                top:50%;
                transform:translateY(-50%);
                left:0px;
            }
            li{
                text-decoration:${(props) => props.disabled ? 'line-through' : 'none'};
                color:${(props) => props.disabled ? '#' : 'var(--black)'};
                list-style:none;
            }
`;



export const TogglePrices = styled.section`
          
            display:flex;
            justify-content:center;
            align-items:center;
            padding:20px 0px 60px 0px;
            .toggle-radios{
                input[type="radio"]{
                    display:none;
                }
                input[type="radio"]:checked + label span:before{
                    width:100%;
                }
                input[type="radio"] + label span{
                    color:gray;
                }
                input[type="radio"]:checked + label span{
                    color:var(--black);
                }
                label{
                    display:block;
                    width:150px;
                    height:50px;
                }
                span{
                    width:100%;
                    height:100%;
                    display:flex;
                    justify-content:center;
                    text-transform:capitalize;
                    padding:10px;
                    cursor:pointer;
                    position:relative;
                    :before{
                        content:'';
                        display:block;
                        width:0;
                        height:4px; 
                        position:absolute;
                        bottom:0px;
                        background:var(--purple);
                        transition:all 0.5s;
                    }
                }

            }
`;