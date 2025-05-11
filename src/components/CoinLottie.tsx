import React from 'react';
import Lottie from 'lottie-react';
import heroAnim from '../assets/coin.json';

const HeroLottie: React.FC = () => (
    <Lottie
        animationData={heroAnim}
        loop                                  // или loop={true}
        autoplay                              // запускается сразу
        className="hero-lottie"
    />
);

export default HeroLottie;

