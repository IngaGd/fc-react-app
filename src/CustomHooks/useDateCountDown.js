import { useEffect, useState } from "react";

const useDateCountDown = (eventDate) => {
    const timeOfEvent = new Date(eventDate).getTime();
    const timeNow = new Date().getTime();
    const distance = timeOfEvent - timeNow;
    const [days, setDays] = useState(null);
    const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(
                Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
            );
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [distance, setDays, setHours, setMinutes, setSeconds]);
    return { days, hours, minutes, seconds, timeOfEvent }
}
export default useDateCountDown;