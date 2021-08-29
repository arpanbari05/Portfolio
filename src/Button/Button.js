import React, { useEffect } from 'react';
import classes from './Button.css';
import {Link} from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Button = (props) => {
    
    useEffect(() => {
        Aos.init({duration: 2000})
    })

    return (
        <Link to={props.path} 
        className={classes.Button}
        smooth
        duration={500}
        data-aos='fade-up'>
            {props.children}
        </Link>
    )
}

export default Button;