import React from 'react';
import useElementOnScreen from '../CustomHooks/useElementOnScreen';

export default function Features() {
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshhold: 0.8,
    });

    return (
        <section className="section-features" ref={containerRef}>
            <div className="row">
                <div className="col-4-of-12 mob">
                    <div
                        className={`feature ${
                            isVisible ? 'animated' : ''
                        }  + feature-1`}
                    >
                        <i className="fa fa-users icon" />
                        <h3 className="heading-tertiary">Best Experts</h3>
                        <p className="paragraph">
                            Ligula risus auctor tempus and dolor vitae undo
                            purus semper sodales
                        </p>
                        <a href="#" className="link-undelined backwards">
                            Find out more
                        </a>
                    </div>
                </div>
                <div className="col-4-of-12 mob">
                    <div
                        className={`feature ${
                            isVisible ? 'animated' : ''
                        }  + feature-2`}
                    >
                        <i className="fa fa-flask icon" />
                        <h3 className="heading-tertiary">Safety Standards</h3>
                        <p className="paragraph">
                            Ligula risus auctor tempus and dolor vitae undo
                            purus semper sodales
                        </p>
                        <a href="#" className="link-undelined backwards">
                            Find out more
                        </a>
                    </div>
                </div>
                <div className="col-4-of-12 mob">
                    <div
                        className={`feature ${
                            isVisible ? 'animated' : ''
                        }  + feature-3`}
                    >
                        <i className="fa fa-envelope icon" />
                        <h3 className="heading-tertiary">Gift Vouchers</h3>
                        <p className="paragraph">
                            Ligula risus auctor tempus and dolor vitae undo
                            purus semper sodales
                        </p>
                        <a href="#" className="link-undelined backwards">
                            Find out more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
