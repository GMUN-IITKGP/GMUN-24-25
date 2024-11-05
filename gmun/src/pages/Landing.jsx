import React from 'react'
import Countdown from '../components/Countdown'
import Announcements from '../components/Announcements'

const Landing = () => {
    return (
        <div>
            <header>
                <h1>GMUN 2025</h1>
            </header>

            <div>
                <Countdown />
                <section id="about">
                    <h2>Welcome to GMUN 2025 IIT KGP</h2>
                    <p>
                        "Today's students... to tomorrow's leaders "
                    </p>
                </section>

                <section id="events">
                    <h2>Event Timeline</h2>
                    <ul>
                        <li>GMUN Conference</li>
                        <li>Workshops on Public Speaking </li>
                        <li>Networking Gala</li>
                    </ul>
                </section>

                <section id="registration">
                    <h2>Registration</h2>
                    <p>Register now to secure your spot at GMUN 2025!</p>
                    <a href="registration.html">Click here to register</a>
                </section>

                <section id="contact">
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feel free to reach out!</p>
                    <p>Email: <a href="mailto:info@communique.org">communique</a></p>
                </section>
            </div>

            <div className="announcements">
                <Announcements />
            </div>
            <footer>
                <p>&copy; 2024 Communique. All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Landing
