import classes from './Aux.css';

const Aux = (props) => {
    return (
        <div id={props.id} className={classes.Aux}>
            {props.children}
        </div>
    )
}

export default Aux;