import { useRef } from 'react';
import Hero from '../Components/Hero';
import NailPolish from '../Components/NailPolish';

export default function Home() {
    const heroRef = useRef();

    const scrollToHero = () => {
        heroRef.current.scrollIntoView({ behaviour: 'smooth' });
    };

    return (
        <>
            <NailPolish scrollToHero={scrollToHero} />
            <Hero refProp={heroRef} />
        </>
    );
}
