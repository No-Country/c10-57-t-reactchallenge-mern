import axios from 'axios';
import React from 'react'

export const listUsers = async(data) => {
    try {
        const response = await axios.get('https://conocelat-backend-production.up.railway.app/users/list');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
