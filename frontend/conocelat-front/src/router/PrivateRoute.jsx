import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({Children}) => {
    const dataUser = useSelector((state) => state.auth);
    console.log("ccama data user",dataUser.status);
    return dataUser.status==="authenticated" ? Children: <Navigate to="/"/>;
}
