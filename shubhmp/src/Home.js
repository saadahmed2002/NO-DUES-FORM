import { useEffect } from 'react';

import HeroSection from './component/HeroSection';
import { useGlobalContext } from './context';



const Home = () => {
  
 /* const  data = {
    name: "NoDues",
    image: "./images/hero.svg",

  };*/

  const {updateHomePage} = useGlobalContext();

  useEffect(()=> updateHomePage(), []);
  return <HeroSection />;
  
};

export default Home;