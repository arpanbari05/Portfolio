import Aos from 'aos';
import { useEffect } from 'react';
import Button from '../Button/Button';
import Aux from '../HOC/Aux';
import classes from './Contact.css';
import 'aos/dist/aos.css';

const Contact = (props) => {
    useEffect(() => {
        Aos.init({duration: 2000})
    })
    return (
        <Aux>
            <div id={'contact'} className={classes.Contact}>
                <h2>Contact</h2>
                <input data-aos='fade-up' type='text' placeholder='Name' />
                <input data-aos='fade-up' type='text' placeholder='Email' />
                <input data-aos='fade-up' type='textarea' placeholder='Your Description' />
                <Button path=''>Send</Button>
            </div>
        </Aux>
    )
}

export default Contact;