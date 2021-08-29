import React from 'react';
import classes from './NavItem.css';
import { Link } from 'react-scroll';
const NavItem = (props) => {

    let navClass = [classes.NavLink];
    if (props.active) {
        navClass.push(classes.Active);
    }

    return (
        <Link to={props.path}
            onClick={props.clicked}
            smooth
            duration={500}
            className={navClass.join(' ')}>{props.children}</Link>
    );
}

export default NavItem;