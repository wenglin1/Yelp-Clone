import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/logo.jpeg';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import useReactRouter from 'use-react-router'

export function LandingPage() {

    const {history} = useReactRouter();

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEcondedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEcondedLocation}`);
    }

    return (
        <div className={styles.landing}>
            <div className={styles['search-area']}>
                <TopNav/>        
                <img src={logo} className={styles.logo} alt='logo'/>
                <SearchBar search={search}/>
                <SearchSuggestions/>
            </div>
        </div>
    );
}