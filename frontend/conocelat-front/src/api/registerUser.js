import axios from "axios";

export const registerUser = async(data) => {
    try {
        const response = await axios.post('https://conocelat-backend-production.up.railway.app/users/save', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
