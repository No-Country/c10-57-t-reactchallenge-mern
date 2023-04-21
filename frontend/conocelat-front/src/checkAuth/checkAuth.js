import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth/authSlice';

export const checkAuth = () => {
const dataUser = useSelector((state) => state.auth);
const dispatch = useDispatch();

const dataToken = localStorage.getItem("token")||null;
if(dataToken!==null){
    const respData = jwt_decode(dataToken);
    const {name,last_name,sub,user_id}=respData;
    const reponseUser={
        status:"authenticated",
        userId:user_id,
        roleName:respData.authorities[0].authority,
        userName:name,
        userLastName:last_name,
        userEmail:sub,
    }
    useEffect(()=>{
        dispatch(login(reponseUser));
    },[])
}
else{
    useEffect(()=>{
        dispatch(login({...dataUser,status:"not-authenticated"}));
    },[])
}
}
