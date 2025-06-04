import React from 'react';
import Banner from '../Components/Banner';
import Exclusivedeal from '../Components/Exclusivedeal';
import Flashsales from '../Components/Flashsales';    
import Categories from '../Components/Categories';
import Bestsellingproduct from '../Components/Bestsellingproduct';
import MusicExperience from '../Components/Musicexperience';
import Explusiveproduct from '../Components/Exploreproduct';
import NewArrival from '../Components/Newarrival';
import Featuressection from '../Components/Featuressection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Banner />
      <Exclusivedeal />
      <Flashsales />
      <Categories />
      <Bestsellingproduct />
      <MusicExperience />
      <Explusiveproduct />
      <NewArrival />
      <Featuressection />
      <Footer />
      
    </>
  );
};

export default Home;