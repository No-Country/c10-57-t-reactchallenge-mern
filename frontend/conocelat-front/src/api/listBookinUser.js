import axios from 'axios';
import React from 'react'

export const listBookinUser = async(id) => {
    try {
        const response = await axios.get(`https://conocelat-backend-production.up.railway.app/bookings/user/${id}`);
        console.log("booking",response.data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
