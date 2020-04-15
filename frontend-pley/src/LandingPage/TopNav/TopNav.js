import React from 'react';
import styles from './TopNav.module.css';
import { Link } from 'react-router-dom'

export function TopNav(props) {

    const handleClick = () => {
        props.onClick()
    }

    const userLinks = (
        <div>
            <a href="/"><button onClick={handleClick} className={`button ${styles['nav-button']}`}>Log Out</button></a>
        </div>
    )

    const guestLinks = (
        <div>
            <Link to='/login'><button className={`button ${styles['nav-button']}`}>Log In</button></Link>
            <Link to='/register'><button className={`button ${styles['nav-button']}`}>Register</button></Link>
        </div>
    )
    


    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div className={styles.right}>
                { localStorage.token ? userLinks : guestLinks}
            </div>
        </div>
    );
}