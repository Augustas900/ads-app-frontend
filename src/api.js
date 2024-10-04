import axios from 'axios';

const API_URL = "http://localhost:8080/api/ads";

export const getAllAds = () => {
    return axios.get(API_URL);
};

export const postAd = (ad, token) => {
    return axios.post(API_URL, ad, {
        headers: {
            'Authorization': `Basic ${token}`
        }
    });
};

export const deleteAd = (id, token) => {
    return axios.delete(`${API_URL}/${id}`, {
        headers: {
            'Authorization': `Basic ${token}`
        }
    });
};
