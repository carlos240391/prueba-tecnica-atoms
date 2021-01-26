//
//
// TODOS LOS COMPONENTES SE IMPORTAN DESDE LA RUTA
// '/components/views'
// EXEPTO Footer , NavBar y back head
//
//


import React from 'react';
import Head from 'next/head'
import BackHead from '../components/back-head/back-head';
import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer/footer';
import Credit from '../components/views/main/credit';
import Features from '../components/views/features/features';
import EasyApi from '../components/views/easy-api/easy-api';
import EasyPricing from '../components/views/pricing/pricing';
import Logotypes from '../components/views/logotypes/logotypes';
import Cards from '../components/views/cards/cards';
import Faq from '../components/views/FAQ/faq';
import StartGrowing from '../components/views/start-growing/start-growing';
import Map from '../components/views/map/map';



const Index = (props) => {
  return (
    <>  
        <Head>
            <title>LATERAL | HOME</title>
        </Head>

        {/* 👷  NAVIGATION ---> */}
          <NavBar/> 
        {/* 👷  BACK IMAGE  ---> */}
          <BackHead id="origin"/>
        {/* 👷  CREDIT SECTION  ---> */}
          <Credit/>
        {/* 👷  FEATURES SECTION  ---> */}
          <Features/>

        {/* 👷  API SECTION  ---> */}
          <EasyApi/>
        {/* 👷  PRICING SECTION  ---> */}
          <EasyPricing/>
        {/* 👷  MAP SECTION  ---> */}
          <Map/>
        {/* 👷  FAQ SECTION  ---> */}
          <Faq/>
        {/* 👷  CARD SECTION  ---> */}
          <Cards/>
        {/* 👷  LOGOTYPE SECTION  ---> */}
          <Logotypes/>
        {/* 👷  START GROWING SECTION  ---> */}
        <StartGrowing/>
        {/* 👷  PRICING SECTION  ---> */}
        <Footer/>
    </>
  );
};

export default Index;