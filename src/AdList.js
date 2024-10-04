import React, { useState, useEffect } from 'react';
import { getAllAds } from './api';

function AdList() {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        getAllAds().then(response => {
            setAds(response.data);
        });
    }, []);

    return (
        <div>
            {ads.map(ad => (
                <div key={ad.id}>
                    <h3>{ad.title}</h3>
                    <p>{ad.description}</p>
                    <p>Posted by: {ad.postedBy}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default AdList;
