import React from 'react';
import useElementOnScreen from '../CustomHooks/useElementOnScreen';

import image1 from '../assets/images/home/img1.jpg';
import image2 from '../assets/images/home/img2.jpg';
import image3 from '../assets/images/home/img3.jpg';

export default function Services() {
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshhold: 0.8,
    });
    return (
        <section className="section-services" ref={containerRef}>
            <div className="row u-center-text">
                <h3 className="heading-quarterly">CHOOSE THE BEAUTY</h3>
                <h2 className="heading-secondary">Peace, Love & Nails.</h2>
            </div>
            <div className="row">
                <div className="col-4-of-12">
                    <div className="service">
                        <div
                            className={`service__card ${
                                isVisible ? 'animated' : ''
                            }`}
                        >
                            <img
                                src={image1}
                                alt=""
                                class="service__card__img"
                            />
                            <a
                                class="service__card__link"
                                href="https://fingers-crossed-nail-studio.mytreatwell.lt/services.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className="heading-tertiary u-center-text">
                                    Mani's & Pedi's
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-4-of-12">
                    <div className="service">
                        <div
                            className={`service__card ${
                                isVisible ? 'animated' : ''
                            }`}
                        >
                            <img
                                src={image2}
                                alt=""
                                class="service__card__img"
                            />
                            <a
                                class="service__card__link"
                                href="https://fingers-crossed-nail-studio.mytreatwell.lt/services.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className="heading-tertiary u-center-text">
                                    Acrylic & Gel's
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-4-of-12">
                    <div className="service">
                        <div
                            className={`service__card ${
                                isVisible ? 'animated' : ''
                            }`}
                        >
                            <img
                                src={image3}
                                alt=""
                                class="service__card__img"
                            />
                            <a
                                class="service__card__link"
                                href="https://fingers-crossed-nail-studio.mytreatwell.lt/services.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className="heading-tertiary u-center-text">
                                    Add-on & Massages
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
