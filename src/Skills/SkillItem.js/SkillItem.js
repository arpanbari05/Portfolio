import React, { useEffect } from 'react';
import classes from './SkillItem.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import {ReactSVG} from 'react-svg';

const SkillItem = (props) => {

    useEffect(() => {
        aos.init({duration: 2000});
    })

    return (
        <div data-aos='fade-up' className={classes.SkillItem}>
            <figure>
                <ReactSVG src={props.src} />
                <h4>{props.title}</h4>
                <h4>{props.percentage}%</h4>
            </figure>
            <div className={classes.Percentage} style={{width: `${props.percentage}%`}} />
        </div>
    )
}

export default SkillItem;