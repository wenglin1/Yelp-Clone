import React from 'react';
import styles from './NavBar.module.css';
import logo from '../assets/logo.jpeg';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom'

export function NavBar(props) {
    

    const userLinks = (
        <div>
            <a href="#"><button className={`button ${styles['nav-button']}`}>Log Out</button></a>
        </div>
    )
    const guestLinks = (
        <div>
            <Link to='/login'><button className={`button ${styles['nav-button']}`}>Log In</button></Link>
            <Link to='/register'><button className={`button ${styles['nav-button']}`}>Register</button></Link>
        </div>
    )

    return (
        <div className={styles['nav-bar']}> 
            <Link to='/'><img src={logo} className={styles.logo} alt='pleY logo'/></Link>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
            <Link to='/login'><button className={`button ${styles['nav-button']}`}>Log In</button></Link>
            <Link to='/register'><button className={`button ${styles['nav-button']}`}>Register</button></Link>
        </div>
    );
}