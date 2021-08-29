import React, { useEffect } from 'react';
import profile from '../Assets/about.jpg';
import classes from './About.css';
import aos from 'aos';
import 'aos/dist/aos.css';

const About = (props) => {
    useEffect(() => {
        aos.init({duration: 1000});
    }, []);

    return (
        <div id={'about'} className={classes.About}>
            <h2>About</h2>
            <div className={classes.Profile}>
                <img data-aos='fade-up' src={profile} alt='profile pic' />
                <div data-aos='fade-up' className={classes.Intro}>
                    <h3>I'm Arpan</h3>
                    <p>
                        I'm a React Developer, college student pursuing my Computer Science Diploma course.<br/>
                        Looking for the internships to work with Web more and improving my skills.<br/>
                        Developing attractive Web Applications and Designs is the thing which I'm fond of. On the way to become the Full Stack  Web Developer.</p>
                </div>
            </div>
        </div>
    )
}

export default About;