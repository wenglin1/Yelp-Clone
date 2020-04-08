import React from 'react';
import styles from './NavBar.module.css';
import logo from '../assets/logo.jpeg';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom'

export function NavBar(props) {
    return (
        <div className={styles['nav-bar']}> 
            <Link to='/'><img src={logo} className={styles.logo} alt='pleY logo'/></Link>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    );
}