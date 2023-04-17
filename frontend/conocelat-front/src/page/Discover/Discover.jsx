import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import './Discover.css'
import { RegisterCL } from '../RegisterCL/RegisterCL';
import { LoginCL } from '../LoginCL/LoginCL';

export const Discover = () => {
    const {
        register
      } = useContext(UserContext);
  return (
    <div className='descubrir-container'>
        <p>{register}</p>
        dfdfdfdfd
        <RegisterCL/>
        <LoginCL/>
    </div>
  )
}
