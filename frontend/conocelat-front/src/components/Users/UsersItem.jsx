import React from 'react'
import "../../page/DashboardCL/Users/Users.css";

export const UsersItem = ({idUser,roleName,userName,userLastName,userEmail}) => {
  return (
    <>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light border hover:bg-gray-100 p-3 w-auto">{idUser}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto lg:w-1/6">{userName}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto">{userEmail}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto lg:w-1/6">{roleName}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400">
                  <div className='flex gap-4'>
                      <div>
                            <button className='button-delete'>
                              Eliminar
                            </button>
                      </div>
                      <div>
                        <button className='button-editar'> Editar</button>
                      </div>
                  </div>
                </td>
              </tr>
    </>
  )
}
