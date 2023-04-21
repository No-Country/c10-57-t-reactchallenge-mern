import { listBookinUser } from "../../../api/listBookinUser";
import { listUsers } from "../../../api/listUsers";
import { setListBookinId, setlistUser } from "./usersSlice";

export const startListUsers = () => {
    return async (dispatch) => {
        const data = await listUsers();
        dispatch(setlistUser({ users: data }));
        console.log(data)
    };
};

export const startListBookingId =(id)=>{
    return async (dispatch)=>{
        const data = await listBookinUser(id)
        dispatch(setListBookinId({ bookins: data }));
    }
}