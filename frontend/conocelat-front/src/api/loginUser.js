import axios from "axios";
import jwt_decode from 'jwt-decode';

export const loginUser = async(data) => {
    try {
        const response = await axios.post('https://conocelat-backend-production.up.railway.app/authenticate', data);
        const dataUser = jwt_decode(response.data.jwt);
        const token= response.data;
        localStorage.setItem("token", response.data.jwt);
        return {token,dataUser};
        //console.log("paisa aaa",response);
    } catch (error) {
        console.error(error);
    }
}
