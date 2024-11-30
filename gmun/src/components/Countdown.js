import React, { useState, useEffect } from 'react';
import '../styles/Countdown.css';

const Countdown = () => {
    const [daysRemaining, setDaysRemaining] = useState(0);

    useEffect(() => {
        const eventDate = new Date("2025-01-14T00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const remainingTime = eventDate - now;
            const days = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
            setDaysRemaining(days >= 0 ? days : 0);
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000 * 60 * 60 * 24);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Countdown to MUN Event</h1>
            <div id="countdown">
                <span className="countdown-number" id="days-remaining">
                    {daysRemaining}
                </span>{' '}
                days remaining!
            </div>
        </div>
        
    );
};

export default Countdown;
