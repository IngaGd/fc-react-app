import React from 'react';
import datesOfEvents from '../assets/data/datesOfEvents';
import HeaderSticky from '../Components/HeaderSticky';
import useDateCountDown from '../CustomHooks/useDateCountDown';

// const { dateOfEvent } = datesOfEvents;
const eventDate = datesOfEvents.dateOfEvent[0].date;

export default function Shop() {
    const { days, hours, minutes, seconds } = useDateCountDown(eventDate);
    return (
        <>
            <HeaderSticky />
            <div className="countdown__container">
                <div className="countdown__box">
                    <div className="countdown__heading">
                        Merch comming soon : &#41;
                    </div>
                    <div className="countdown__numbers">
                        <div className="countdown__number">{days} d </div>
                        <div className="countdown__number">{hours} h </div>
                        <div className="countdown__number">{minutes} min </div>
                        <div className="countdown__number">{seconds} s</div>
                    </div>
                </div>
            </div>
        </>
    );
}
