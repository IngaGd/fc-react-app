import React from 'react';
import useElementOnScreen from '../CustomHooks/useElementOnScreen';

import image1 from '../assets/images/home/img1.jpg';
import image2 from '../assets/images/home/img2.jpg';
import image3 from '../assets/images/home/img3.jpg';
import emoji1 from '../assets/images/emoji/1.png';
import emoji2 from '../assets/images/emoji/2.png';
import emoji3 from '../assets/images/emoji/3.png';
import emoji4 from '../assets/images/emoji/4.png';
import emoji5 from '../assets/images/emoji/5.png';
import emoji6 from '../assets/images/emoji/6.png';

export default function Services() {
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshhold: 0.8,
    });
    return (
        <section className="section-services" ref={containerRef}>
            <div className="row u-center-text">
                {/* <h3 className="heading-quarterly">CHOOSE THE BEAUTY</h3> */}
                {/* <h2 className="heading-secondary">Peace, Love & Nails.</h2> */}
                <div className="emoji-box">
                    <img src={emoji1} alt="nail emoji" className="emoji" />
                    <span className="plus-sign">+</span>
                    <img src={emoji2} alt="dog emoji" className="emoji" />
                    <span className="plus-sign">+</span>
                    <img src={emoji3} alt="wine emoji" className="emoji" />
                    <span className="plus-sign">+</span>
                    <img src={emoji4} alt="notes emoji" className="emoji" />
                    <span className="equality-sign">=</span>
                    <img src={emoji5} alt="nail emoji" className="emoji" />
                    <img src={emoji6} alt="nail emoji" className="emoji" />
                </div>
            </div>
            <div className="row">
                <div className="col-4-of-12">
                    <div className="service">
                        <div
                            className={`service__card ${
                                isVisible ? 'animated' : ''
                            }  + card-1`}
                        >
                            <img
                                src={image1}
                                alt=""
                                class="service__card__img"
                            />
                            <a
                                class="service__card link-undelined"
                                href="https://fingers-crossed-nail-studio.mytreatwell.lt/services.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className="heading-tertiary u-center-text">
                                    4 HANDS
                                </h3>
                            </a>
                            <p className="service_description">
                                Nuolat kažkur skubame, todėl atrasti laiko
                                išbūti irmanikiūreirpedikiūre daugumai yra
                                misija neįmanoma. Šią misiją įgyvendinti padės
                                mūsų siūloma manikiūro ir pedikiūro atliekamo
                                vienu metu paslauga. Be papildomų mokesčių ir
                                Tomo Kruzo įsikišimo.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-4-of-12">
                    <div className="service">
                        <div
                            className={`service__card ${
                                isVisible ? 'animated' : ''
                            } + card-2`}
                        >
                            <img
                                src={image2}
                                alt=""
                                class="service__card__img"
                            />
                            <a
                                class="service__card link-undelined"
                                href="https://fingers-crossed-nail-studio.mytreatwell.lt/services.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className="heading-tertiary u-center-text">
                                    DOGS FRIENDLY
                                </h3>
                            </a>
                            <p className="service_description">
                                Fingers Crossed salonas myli tavo augintinį ne
                                mažiau nei tu. Atsivesk savo šunį kartu į
                                procedūrą, o mes pasirūpinsime, kad abu
                                išeitumėte palepinti, laimingi ir
                                tarsivizgindamisavo uodegas.Šuo gaus ir vandens,
                                ir dėmesio, ir, šeimininkui leidus, geriausią
                                šunišką masažą – pakasymą už ausų.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-4-of-12">
                    <div className="service">
                        <div
                            className={`service__card ${
                                isVisible ? 'animated' : ''
                            }  + card-3`}
                        >
                            <img
                                src={image3}
                                alt=""
                                class="service__card__img"
                            />
                            <a
                                class="service__card link-undelined"
                                href="https://fingers-crossed-nail-studio.mytreatwell.lt/services.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className="heading-tertiary u-center-text">
                                    EVERY DAY IS WINE DAY
                                </h3>
                            </a>
                            <p className="service_description">
                                Nuolat kažkur skubame, todėl atrasti laiko
                                išbūti irmanikiūreirpedikiūre daugumai yra
                                misija neįmanoma. Šią misiją įgyvendinti padės
                                mūsų siūloma manikiūro ir pedikiūro atliekamo
                                vienu metu paslauga. Be papildomų mokesčių ir
                                Tomo Kruzo įsikišimo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
