import classes from './Navigation.css';
import React, { Component } from 'react';
import NavItem from './NavItem/NavItem';
import ALogo from '../Assets/icon_a.svg';
import NavToggler from './NavToggler/NavToggler';
import { ReactSVG } from 'react-svg';

class Navigation extends Component {

    state = {
        navItems: [
            { id: 'home', path: 'home', active: true },
            { id: 'about', path: 'about', active: false },
            { id: 'skills', path: 'skills', active: false },
            { id: 'contact', path: 'contact', active: false }
        ],
        show: true
    }

    toggleActiveClass = (id) => {
        const newNavArr = this.state.navItems.map(item => {
            if (id === item.id) {
                return { id: item.id, path: item.path, active: true }
            } else {
                return { id: item.id, path: item.path, active: false }
            }
        })

        this.setState({ navItems: newNavArr });
    }

    toggleNavigation = () => {
        this.setState({ show: !this.state.show });
    }

    render() {

        const navItems = this.state.navItems.map(item => {
            return (
                <NavItem key={item.id}
                    active={item.active}
                    clicked={() => {
                        this.toggleActiveClass(item.id);
                        this.toggleNavigation();
                    }}
                    path={item.path}>{item.id}</NavItem>
            )
        })

        let navClass = classes.Open;

        if (this.state.show) {
            navClass = classes.Close;
        }

        return (
            <header className={classes.Navigation}>
                <ReactSVG src={ALogo} />
                <NavToggler clicked={this.toggleNavigation} />
                <nav className={navClass}>
                    {navItems}
                </nav>
            </header>
        );
    }
}

export default Navigation;