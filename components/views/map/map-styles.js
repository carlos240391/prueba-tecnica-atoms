import styled,{keyframes} from 'styled-components'


const moveMoney = keyframes`
        from { transform: rotate(0deg)  translate(-5px) rotate(0deg); }
        to { transform: rotate(360deg) translate(-5px) rotate(-360deg); }
`;


export const BackMap = styled.section`
        width:100%;
        min-height:800px;
        overflow:hidden;
        background-color:var(--graymedium);
        background-image:url('/assets/img/world-bg.png');
        background-position:center center;
        background-repeat:no-repeat;
        background-size:1200px;
        @media (max-width:800px){
            background-size:600px;
            min-height:500px;
        }
        @media (max-width:500px){
            background-position:center left;
        }
        .map-container{
            padding:50px;
            position:relative;
            width:800px;
            height:800px;
            margin:auto;
            @media (max-width:800px){
                width:100%;
                max-width:600px;
                height:500px;
                padding:20px;
            }
            
        }
`;


export const CircleImgContainer = styled.section`
        width:${(props) => props.size};
        height:${(props) => props.size};
        border-radius:100%;
        background-size:cover;
        background-position:center center;
        background-image:url(${props => props.img});
        animation:${moveMoney} ${(props) => props.time} linear;
        animation-iteration-count:infinite;
        position:absolute;
        left:${props => props.left};
        right:${props => props.right};
        top:${props => props.top};
        bottom:${props => props.bottom};
        z-index:5;
        -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.50);
        -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
        :before{
            content:'';
            display:block;
            width:${(props) => props.size };
            height:${(props) => props.size };
            border-radius:100%;
            border:5px solid var(--white);
            z-index:4;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate3d(-50%, -50%, 0);
        }
`;