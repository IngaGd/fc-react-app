import React from 'react';

import image from '../assets/images/nail-polish/nail-polish-transperent.png';

export default function NailPolish({ scrollToHero }) {
    return (
        <section className="section-nail-polish">
            <div className="pink-background"></div>
            <div className="row">
                <div className="col-6-of-12">
                    <div className="text-box">
                        <h1 className="heading-primary">
                            Nail Shine Made Simple
                        </h1>
                        <p className="paragraph">
                            Feugiat primis and ligula laoreet auctor and mauris
                            undo auctor a laoreet purus sapien integer
                        </p>
                        <button
                            className="btn btn--green"
                            onClick={scrollToHero}
                        >
                            Find out more
                        </button>
                    </div>
                </div>
                <div className="col-6-of-12">
                    <div className="image-box">
                        <img src={image} alt="" className="image-box__img" />
                    </div>
                </div>
            </div>
        </section>
    );
}
