import React from 'react';
import styles from './RestaurantPage.module.css';
import * as api from '../../../../hooks/yelp-api/api';
import { useState, useEffect } from 'react';
import { NavBar } from '../../../../NavBar/NavBar';
import NewReview from '../../../../Reviews/NewReview/NewReview';
import Reviews from '../../../../Reviews/Reviews';
import useReactRouter from 'use-react-router';
import { useBusinessSearch } from '../../../../hooks/yelp-api/useBusinessSearch';

export function RestaurantPage(props) {


    let id = props.match.params.id
    const [ businessName, setbusinessName ] = useState()
    const [ image, setImage ] = useState()
    const [ restaurantId, setRestaurantId ] = useState()
    
    

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const rawData = await api.get('/businesses/' + id, {});
                    const resp = await rawData.json();
                    setbusinessName(resp.name)
                    setImage(resp.image_url)
                    setRestaurantId(resp.id)
                } catch(e) {
                    console.error(e);
                }
            };
            fetchData();
        });

    const getReviews = () => {
        return props.reviews.filter(r => {
            return restaurantId === r.restaurant_id
        })    
    }

    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [performSearch] = useBusinessSearch(term, locationParam);

    function search(term, location) {
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
        performSearch({term, location});
    }

    return (
        <div>
            <NavBar search={search} term={term} location={locationParam} onClick={props.handleClick}/> 
            <div className={styles["restaurant-container"]}>
                <div>
                    <img src={`${image}`} className={styles["image"]} alt="restaurant"></img>
                    <strong><div className={styles['name']}>{businessName}</div></strong>
                </div>
                <div className={styles["reviews"]}>
                    <Reviews reviews={getReviews()}/>
                </div>
                <div className={styles["new-review"]}>
                    <NewReview restaurantId={restaurantId} addReview={props.addReview} businessName={businessName}/>
                </div>
            </div>
        </div>
    )

}