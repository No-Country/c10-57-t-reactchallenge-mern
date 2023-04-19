import { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({Children}) => {
  const dataUser = useSelector((state) => state.auth);
  console.log("ccama data user",dataUser.status==="not-authenticated");
  return dataUser.status==="not-authenticated" ? Children: <Navigate to="/"/>;
}
