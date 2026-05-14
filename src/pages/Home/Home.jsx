import React from 'react';
import { useEffect, useState } from "react";
import './Home.css'
import TopDeals from './TopDeals'
import Grid from './Grid'
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import ThemeContext from '../../components/context/ThemeContext';
export default function Home(){
const images = [
  "https://picsum.photos/id/1018/1000/100",
  "https://picsum.photos/id/1015/1000/100",
  "https://picsum.photos/id/1019/1000/100"
];


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const {theme}=React.useContext(ThemeContext);

    return(
        <>
        <Header/>
        <Navbar/>
        <div className={theme}>
        <div className="wrapper">
            <div className="slideshow">
      <button className="left" onClick={prevSlide}>❮</button>

      <img src={images[currentIndex]} alt="slide" />

      <button className="right" onClick={nextSlide}>❯</button>
    </div>
    <div className="box1">
  <div className="box1-main">
    <TopDeals />
  </div>
  <div className="box1-left">
    <img src="./images/logos/fashion-pic.webp" alt="fashion pic"/>
  </div>
</div>
<Grid/>
        </div>
        </div>
        <Footer/>
        </>
    );
}
