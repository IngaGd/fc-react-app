import React, { useEffect, useState } from 'react';

import video from '../assets/video/manikiuras v3.mp4';
import HeaderHero from './HeaderHero';

export default function Hero({ refProp }) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section className="section-hero u-section-padding" ref={refProp}>
            {isSticky ? '' : <HeaderHero />}
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={video} />
                </video>
            </div>

            <div className="hero-content">
                <div className="u-center-text">
                    <h2 className="heading-secondary white u-margin-bottom-big">
                        We make people genuinely happy
                    </h2>
                    <a
                        className="btn btn--transperent"
                        href="https://fingers-crossed-nail-studio.mytreatwell.lt/?fbclid=PAAaZ1c67PnrUYjey9ZzL7tUeaZ0k4f3P8zsvxOLFeZBP1QSRvGSs4y-K_rW8"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Online booking
                    </a>
                </div>
            </div>
        </section>
    );
}
