import React, { useEffect } from 'react';
import SkillItem from './SkillItem.js/SkillItem';
import htmlLogo from '../Assets/html5.svg';
import cssLogo from '../Assets/css3.svg';
import reactLogo from '../Assets/react.svg';
import javaLogo from '../Assets/java.svg';
import skillImg from '../Assets/skill.jpg';
import classes from './Skills.css';
import Aux from '../HOC/Aux';
import aos from 'aos';
import 'aos/dist/aos.css';

const Skills = (props) => {

    const skills = [
        { title: 'html 5', src: htmlLogo, percentage: 90 },
        { title: 'css 3', src: cssLogo, percentage: 85 },
        { title: 'react.js', src: reactLogo, percentage: 95 },
        { title: 'java', src: javaLogo, percentage: 70 },
    ];

    const skillItems = skills.map(skill => (
        <SkillItem key={skill.title}
            title={skill.title}
            src={skill.src}
            percentage={skill.percentage} />
    ))

    useEffect(() => {
        aos.init({ duration: 2000 });
    })

    return (
        <Aux id={'skills'}>
            <h2>Skills</h2>
            <div className={classes.Skills}>
                <div className={classes.SkillsOverview}>
                    <h3 data-aos='fade-up'>Professional Skills</h3>
                    <p data-aos='fade-up'>
                        Currently working with Web and  Developing Web Applications. HTML, CSS, React.js, Java, Python are the languages which I love to work with.
                    </p>
                    {skillItems}
                </div>
                <img data-aos='fade-up' className={classes.SkillImg} src={skillImg} alt='skills img' />
            </div>
        </Aux>
    )
}

export default Skills;