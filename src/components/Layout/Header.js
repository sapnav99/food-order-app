import React, { Fragment } from 'react'
import foodimg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={foodimg}
                    alt='A table full of delicious food'></img>
            </div>
        </Fragment>
    )
}
