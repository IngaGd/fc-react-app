import React from 'react';

import video from '../assets/video/manikiuras v3.mp4';

export default function Hero({ refProp }) {
    return (
        <section className="section-hero u-section-padding" ref={refProp}>
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
                    <button className="btn btn--transperent">
                        Online booking
                    </button>
                </div>
            </div>
        </section>
    );
}
