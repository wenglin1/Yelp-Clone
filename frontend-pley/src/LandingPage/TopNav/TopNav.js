import React from 'react';
import styles from './TopNav.module.css';
import { NavLink } from 'react-router-dom'

export function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div className={styles.right}>
                <NavLink to="/login">Login</NavLink>        
                <NavLink to="/register">Register</NavLink>        
            </div>
        </div>
    );
}