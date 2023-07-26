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
                        <h3 className="heading-tertiary">GET YOUR SHINE ON</h3>
                        <h2 className="heading-secondary">Skilled Nail Art</h2>
                        <p className="paragraph">
                            Nullam tempor sapien gravida donec and pretium ipsum
                            porta integer justo an odio velna vitae auctor
                            integer congue magna undo purus a pretium ligula
                            rutrum magna egestas
                        </p>
                        <ul className="paragraph list">
                            <li>
                                Aliquam vitae molestie at quisque sapien
                                volutpat and justo, aliquet molestie purus
                                efficitur ipsum
                            </li>
                            <li>
                                Sagittis congue augue magna risus mauris
                                volutpat and egestas magna suscipit egestas a
                                vitae purus
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
