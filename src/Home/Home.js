import React, { useEffect } from 'react';
import Typical from 'react-typical';
import Button from '../Button/Button';
import classes from './Home.css';
import fbIcon from '../Assets/facebook-f.svg';
import instaIcon from '../Assets/instagram.svg';
import gitIcon from '../Assets/github.svg';
import { ReactSVG } from 'react-svg';
import profile from '../Assets/perfil.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = (props) => {
    const typicalArr = ['Web Designer', 2500, 'Programmer', 2500, 'React Developer', 2500];

    useEffect(() => {
        Aos.init({ duration: 2000 });
    })

    return (
        <main id={'home'} className={classes.Home}>
            <div data-aos='fade-up' className={classes.Info}>
                <h1>Hi,</h1>
                <h1>I'm <span>Arpan</span></h1>
                <h1>
                    <Typical loop={Infinity}
                        steps={typicalArr} />
                </h1>
                <Button path={'contact'}>Contact</Button>
                <article className={classes.IconContainer}>
                    <a href={'https://www.facebook.com/arpan.bari.94/'}>
                        <ReactSVG src={fbIcon} />
                    </a>
                    <a href={'https://www.instagram.com/arpan_bari/'}>
                        <ReactSVG src={instaIcon}/>
                    </a>
                    <a href={'https://github.com/arpanbari05'}>
                        <ReactSVG src={gitIcon} />
                    </a>
                </article>
            </div>
            <img data-aos='fade-up' src={profile} alt={'profile pic'} />
        </main>
    )
}

export default Home;