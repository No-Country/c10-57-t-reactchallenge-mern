import { listUsers } from "../../../api/listUsers";
import { setlistUser } from "./usersSlice";

export const startListUsers = () => {
    return async (dispatch) => {
        const data = await listUsers();
        dispatch(setlistUser({ users: data }));
        console.log(data)
    };
};