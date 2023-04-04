import React, { useContext, useState } from 'react'
import './MainConoceLat.css'
import { UserContext } from '../../context/userContext';
// import { UserContext } from '../../context/userContext';
import banner from "../../assets/bannerStart.svg"

export const MainConoceLat = () => {
  const {start,setStart,register,setRegister} = useContext(UserContext);
  // const [isOpen, setIsOpen] = useState(true);
  // const [isOpen2, setIsOpen2] = useState(true);
  const handleButtom=()=>{
    setRegister(false)
    console.log("gracias")
  }
  return (
    <div className="start-container">
      <div className="start__container-data">
        <div className='data__start'>
          <img className='data__image' src={banner} alt="banner vacio" />
          <div className='data__Wheregoing'>
            <div className='data__Wheregoing-search'>'
              <div className='data__inputs'>
                <input placeholder='seleccione el estado' type="text" />
                <input placeholder='fecha de ida' type="date" />
                <input placeholder='fecha de retorno' type="date" />
                <button className='buttom__search'>Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: register ? "block" : "none"}} className='form-container'> 
        <div className='form-data-container'>
          <div className='form-data' >
            <div className='form_data-title'>
              <p>Registro de usuario</p>
              <button className="top-0 right-0 close text-gray-500 hover:text-gray-600" onClick={handleButtom}>X</button>
            </div>
            <div className='form_data-body'>
              <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Nombres:
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-whit focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane"/>
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Apellidos:
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                  </div>
                </div>
                <div class="w-full px-3 -mx-3 mb-6">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      Contrasena:
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
      	        </div>
                <div class="w-full px-3 -mx-3 mb-6">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      Confirmar Contrasena:
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
      	        </div>
                <div>
                  <div class="md:w-1/3"></div>
                  <div class="md:w-2/3">
                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                      Registrar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}