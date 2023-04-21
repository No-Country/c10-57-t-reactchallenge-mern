import React, { useEffect } from 'react'
import { startListUsers } from '../../../store/conoceLat/Users/userthunk';
import { useDispatch, useSelector } from 'react-redux';
import { UsersItem } from '../../../components/Users/usersItem';
export const Users = () => {;
  const {users=[]} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startListUsers());
  }, []);

  return (
    <div className='container-products'>
      <div className='data-header'>
        <p>Usuarios</p>
      </div>
      <div className='flex items-center justify-center'>
        <div className='container'>
          <table className="data-table table-auto w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead className="data-thead text-white">{
                users.map(({idUser,role,userName,userLastName,userEmail})=>(
                  <tr key={idUser} className="bg-blue-800 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                      <th className="p-3 text-left">Id:</th>
                      <th className="p-3 text-left">Nombre:</th>
                      <th className="p-3 text-left">Correo</th>
                      <th className="p-3 text-left">rol:</th>
                      <th className="p-3 text-left">Acciones</th>
                  </tr>
                ))
               
            }
            </thead>
            <tbody className="data-tbody flex-1 sm:flex-none">
              {
                  users.map(({idUser,role,userName,userLastName,userEmail})=>(
                        <UsersItem
                          key={idUser}
                          idUser={idUser}
                          roleName={role?.roleName??'---'}
                          userName={userName}
                          userLastName={userLastName}
                          userEmail={userEmail}
                        />
                  ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
