import React from 'react';
import Title from '../../titles.js/title';
import CircleImg from './circle-img';
import { BackMap } from './map-styles';

const Map = (props) => {
    const [point, setPoint] = React.useState(0)
    const breakPoint = React.useCallback(()=>{
            if( typeof window !== 'undefined'){
                const windowBreak = window.innerWidth
                setPoint(windowBreak)
            }
    },[])

    React.useEffect(()=>{
        breakPoint();
        window.addEventListener('resize', breakPoint)
        return ()=> window.removeEventListener('resize', breakPoint)
    },[])


    return (
        <>
        <BackMap>
        <section className="map-container">
            <Title>
                <h1>Trusted by world experts</h1>
            </Title>
           

            <CircleImg  img="/assets/img/avatar-1.jpg"
                        size={point < 800 ? "50px" : "70px"}
                        time="3s"
                        left="120px"
                        top="250px"
                        />
            <CircleImg  img="/assets/img/avatar-2.jpg"
                        size="50px"
                        time="3.5s"
                        left="250px"
                        top="200px"
                        />

            <CircleImg  img="/assets/img/avatar-3.jpg"
                        size={point < 800 ? "50px" : "90px"}
                        time="5s"
                        left="360px"
                        top="250px"
                        />

            <CircleImg  img="/assets/img/avatar-5.jpg"
                        size={point < 800 ? "50px" : "100px"}
                        time="4s"
                        left="160px"
                        bottom="160px"
                        />

            <CircleImg  img="/assets/img/avatar-6.jpg"
                        size={point < 800 ? "50px" : "125px"}
                        time="7s"
                        right="80px"
                        top="300px"
                        />

            <CircleImg  img="/assets/img/avatar-2.jpg"
                        size={point < 800 ? "50px" : "60px"}
                        time="7s"
                        right="7px"
                        bottom="140px"
                        />
           

        </section>
        </BackMap>
        </>
    );
};

export default Map;