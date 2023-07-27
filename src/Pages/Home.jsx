import { useRef } from 'react';
import Features from '../Components/Features';
import Hero from '../Components/Hero';
import NailArt from '../Components/NailArt';
import NailPolish from '../Components/NailPolish';
import Services from '../Components/Services';

export default function Home() {
    const heroRef = useRef();

    const scrollToHero = () => {
        heroRef.current.scrollIntoView({ behaviour: 'smooth' });
    };

    return (
        <>
            <NailPolish scrollToHero={scrollToHero} />
            <Hero refProp={heroRef} />
            <NailArt />
            <Services />
            <Features />
        </>
    );
}
