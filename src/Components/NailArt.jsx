import React from 'react';

import image from '../assets/images/instagram/img2.png';
import useElementOnScreen from '../CustomHooks/useElementOnScreen';

export default function NailArt() {
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshhold: 0.8,
    });
    return (
        <section
            className="section-nail-art u-section-padding"
            ref={containerRef}
        >
            <div className="row">
                <div className="col-6-of-12">
                    <div className={`image-box ${isVisible ? 'animated' : ''}`}>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="col-6-of-12">
                    <div
                        className={`section-text-box ${
                            isVisible ? 'animated' : ''
                        }`}
                    >
                        {/* <h3 className="heading-quarterly">GET YOUR SHINE ON</h3> */}
                        <h2 className="heading-secondary">Nail Art</h2>
                        <p className="paragraph">
                            Mūsų meistrės – tikros dailininkės, gebančios ant
                            nagų perkelti daugumą tavo sumanymų:
                        </p>
                        <ul className="paragraph list">
                            <li>Tony Soprano su chalatu – check;</li>
                            <li>šuns portretas – check;</li>
                            <li>gamtos peizažas – check.</li>
                        </ul>
                        <p className="paragraph">
                            Galime įgyvendinti praktiškai viską, ką sugalvosi! O
                            įkvėpimo nagų dailei tikrai rasi mūsų nuotraukų
                            galerijoje.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
