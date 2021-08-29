import React, { Component } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Skills from '../Skills/Skills';

class Layout extends Component {

    render () {
        return (
            <div>
                <Navigation />
                <Home />
                <About />
                <Skills />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Layout;