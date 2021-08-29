import React from 'react';
import classes from './NavToggler.css';

const NavToggler = (props) => {
    return (
        <div className={classes.NavToggler}
        onClick={props.clicked}>
            <span />
            <span />
            <span />
        </div>
    )
}

export default NavToggler;