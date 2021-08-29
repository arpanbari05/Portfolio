import classes from './Footer.css';
import fbIcon from '../Assets/facebook-f.svg';
import instaIcon from '../Assets/instagram.svg';
import gitIcon from '../Assets/github.svg';
import ALogo from '../Assets/icon_a.svg';
import { ReactSVG } from 'react-svg';

const Footer = (props) => {
    return (
        <footer>
            <div className={classes.Logo}>
                <ReactSVG src={ALogo} />
            </div>
            <article className={classes.IconContainer}>
                <a href={'https://www.facebook.com/arpan.bari.94/'}>
                    <ReactSVG src={fbIcon} />
                </a>
                <a href={'https://www.instagram.com/arpan_bari/'}>
                    <ReactSVG src={instaIcon} />
                </a>
                <a href={'https://github.com/arpanbari05'}>
                    <ReactSVG src={gitIcon} />
                </a>
            </article>
            <p>&copy; 2021 copyright all rights reserved</p>
        </footer>
    )
}

export default Footer;