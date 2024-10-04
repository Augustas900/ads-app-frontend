import React, { useState } from 'react';
import { postAd } from './api';

function AdForm({ token }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAd = { title, description };
        postAd(newAd, token).then(response => {
            console.log("Ad posted", response.data);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit">Post Ad</button>
        </form>
    );
}

export default AdForm;
