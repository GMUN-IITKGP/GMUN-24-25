// import React, { useState, useEffect } from 'react';
// import '../styles/Countdown.css';

// const Countdown = () => {
//     const [daysRemaining, setDaysRemaining] = useState(0);

//     useEffect(() => {
//         const eventDate = new Date("2025-01-14T00:00:00").getTime();

//         const updateCountdown = () => {
//             const now = new Date().getTime();
//             const remainingTime = eventDate - now;
//             const days = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
//             setDaysRemaining(days >= 0 ? days : 0);
//         };

//         updateCountdown();
//         const interval = setInterval(updateCountdown, 1000 * 60 * 60 * 24);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div>
//             <h1>Countdown to MUN Event</h1>
//             <div id="countdown">
//                 <span className="countdown-number" id="days-remaining">
//                     {daysRemaining}
//                 </span>{' '}
//                 days remaining!
//             </div>
//         </div>

//     );
// };

// export default Countdown;

import React, { useState, useEffect } from 'react';
import '../styles/Countdown.css';

const Countdown = () => {
    const [daysRemaining, setDaysRemaining] = useState(0);
    const [funFact, setFunFact] = useState("");
    const [showAnimation, setShowAnimation] = useState(false);

    const funFacts = [
        "Over 400,000 students participate in MUN conferences worldwide every year!",
        "The first-ever MUN conference was organized at Harvard University in 1947.",
        "Many professional diplomats credit MUN for sparking their interest in international relations.",
        "The term 'Model United Nations' refers to the simulation of actual United Nations committees and procedures.",
        "Delegates from more than 150 countries participate in MUN annually.",
        "Some MUN conferences run crisis simulations, including zombie apocalypses or alien invasions!",
        "A delegate’s outfit is as important as their arguments. Business formal is non-negotiable!",
        "The most dreaded but rewarding part of any MUN preparation is writing position papers.",
        "The unmoderated caucus is the only time you can stand up and run around—technically!",
        "Terms like 'working paper,' 'bloc formation,' and 'GA Dance' are part of every MUNer's vocabulary.",
        "MUN is often cited as the best way to overcome stage fright.",
        "Delegates learn to dive deep into global issues, from climate change to cybersecurity.",
        "MUN conferences teach you how to argue your point while respecting others’ perspectives.",
        "Learning to word resolutions precisely is a skill that MUNers use even outside conferences.",
        "Some lifelong friendships and professional connections start at MUN conferences.",
        "MUN was inspired by the League of Nations, the UN's predecessor.",
        "MUN began as a collegiate activity but has expanded to high schools and even middle schools.",
        "Some MUNs recreate historical committees like the Cuban Missile Crisis or the founding of the UN.",
        "Every great MUNer has forgotten their country’s name during roll call at least once.",
        "Snack trades during unmoderated caucuses are the real secret to building alliances!",
        "The real reward is the confidence and skills you gain, not just awards.",
        "Everyone was a nervous first-timer once. It only gets better!"
    ];

    useEffect(() => {
        const eventDate = new Date("2025-01-14T00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const remainingTime = eventDate - now;
            const days = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
            setDaysRemaining(days >= 0 ? days : 0);
        };

        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        setFunFact(randomFact);

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000 * 60 * 60 * 24);

        return () => clearInterval(interval);
    }, [funFacts]);

    const handleButtonClick = () => {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        setFunFact(randomFact);
        setShowAnimation(true);
        setTimeout(() => setShowAnimation(false), 1000);
    };

    return (
        <div className="countdown-wrapper">
            <h1 className="countdown-heading">Countdown to MUN Event</h1>
            <div className={`countdown-card ${showAnimation ? "bounce" : ""}`}>
                <span className="countdown-number">{daysRemaining}</span>
                <span className="countdown-label">Days Remaining</span>
            </div>
            <p className="fun-fact">{funFact}</p>
            <button onClick={handleButtonClick} className="interaction-button">
                Give Me Another Fact!
            </button>
        </div>
    );
};

export default Countdown;
