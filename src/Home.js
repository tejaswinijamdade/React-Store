import React from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
// import styled from 'styled-components';

const Home = () => {
 const data ={
   name : "Shopping World",
 }
  return (
    <>
        <HeroSection myData={data}/>;
        <Services/>
        <Trusted/>
    </>

  );
}


export default Home;
