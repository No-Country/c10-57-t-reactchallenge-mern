import React, { useEffect } from 'react'
import "./DashboardCL.css";
import user from '../../assets/usuario.png'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { sidebarDashboard } from '../../helpers/sidebarDashboard';
import { ModalButton } from '../../components/Modal/ModalButton';

export const DashboardCL = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   return () => {
  //     navigate('/', { replace: true });
  //   };
  // }, [navigate]);

  // useEffect(() => {
  //   return () => {
  //     if(dataUser.status==="not-authenticated"){
  //       navigate('/', { replace: true });
  //     }
  //     else{
  //       navigate('/Dashboard', { replace: true });
  //     }
  //   };
  // }, [navigate]);

  return (
    <div className="container-dashboard">
      <div className='dashboard-data'>
        <div className='dashboard-data__opcion'>
          <div className='data-user'>
            <img src={user} className='img-user' alt="ss" width="180px" />
            <p>Jose Armando</p>
          </div>
          <div className='data-opcion'>
            {
              sidebarDashboard.map((item,index)=>(
                <NavLink
                  to={item.path}
                  key={index}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  aria-labelledby="dropdownAvatarNameButton"
                  end
                >
                  <div>{item.name}</div>
                </NavLink>
              ))
            }

          </div>
        </div>
        <div  className='dashboard-data__info'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
