import React from 'react';

import video from '../assets/video/manikiuras v3.mp4';

export default function Hero({ refProp }) {
    return (
        <section className="section-hero u-section-padding" ref={refProp}>
            <div className="row">
                <video autoPlay muted loop>
                    <source src={video} />
                </video>
            </div>
        </section>
    );
}
