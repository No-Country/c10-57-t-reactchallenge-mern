import React, { useContext, useState } from 'react'
import "./Products.css";
import buttonDelete from "../../../assets/delete.svg"
import { ModalButton } from '../../../components/Modal/ModalButton';
import { UserContext } from '../../../context/userContext';

export const Products = () => {
  //const {setIsOpenModalRegister,openModalRegister} = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };


  const openModal = () => {
    setIsOpen(true)
  };

  

  return (
    <div className='container-products'>
      <div className='data-header'>
        <p>Productos</p>
        <button className='button-register' onClick={openModal}>Registrar</button>
        {/* <ModalButton
          openModalRegister={openModalRegister}
          setIsOpenModalRegister={setIsOpenModalRegister}
        /> */}
        <ModalButton isOpen={isOpen} onCloseModal={handleCloseModal} />
      </div>
      <div className='flex items-center justify-center'>
        <div className='container'>
          <table className="data-table table-auto w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead className="text-white">
              <tr className="bg-blue-800 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left">Id:</th>
                <th className="p-3 text-left">Titulo Producto:</th>
                <th className="p-3 text-left">Descr. Producto:</th>
                <th className="p-3 text-left">Estado Producto:</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
              <tr className="bg-blue-800 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left">Id:</th>
                <th className="p-3 text-left" >Titulo Producto:</th>
                <th className="p-3 text-left">Descr. Producto:</th>
                <th className="p-3 text-left">Estado Producto:</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
              <tr className="bg-blue-800 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left">Id:</th>
                <th className="p-3 text-left" >Titulo Producto:</th>
                <th className="p-3 text-left">Descr. Producto:</th>
                <th className="p-3 text-left">Estado Producto:</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="data-tbody flex-1 sm:flex-none">
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light border hover:bg-gray-100 p-3 w-auto">1</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto lg:w-1/6">ss@jdddddv.comssssfssssssssssssssssssssf</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto">contato@johncovvdd.com</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto lg:w-1/6">Activo</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400">
                  <div className='flex gap-4'>
                    <div>
                      <button className='button-delete' onClick={handleOpenModal}>
                        Eliminar
                      </button>
                    </div>
                    <div>
                      <button className='button-editar' onClick={handleOpenModal}> Editar</button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light border hover:bg-gray-100 p-3 w-auto">2</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto lg:w-1/6">m_jackson@mail.com</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto">contato@johncovvdd.com</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto lg:w-1/6">Inactivo</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400">
                  <div className='flex gap-4'>
                    <div>
                      <button className='button-delete' onClick={handleOpenModal}>
                        Eliminar
                      </button>
                    </div>
                    <div>
                      <button className='button-editar' onClick={handleOpenModal}> Editar</button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light border hover:bg-gray-100 p-3 w-auto lg:w-1/12">2</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto lg:w-1/6">m_jackson@mail.com</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto">contato@johncovvdd.com</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto lg:w-1/6">Inactivo</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate w-auto text-red-400">
                  <div className='flex gap-4'>
                    <div>
                      <button className='button-delete' onClick={handleOpenModal}>
                        Eliminar
                      </button>
                    </div>
                    <div>
                      <button className='button-editar' onClick={handleOpenModal}> Editar</button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
