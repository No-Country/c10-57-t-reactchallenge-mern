import React, { useRef } from 'react';
import "./Card.css"
import Imagen from './Imagen';


const Card = ({ atraccion }) => {
  const popupRef = useRef(null);

  const handlePopup = () => {
    popupRef.current.classList.toggle("show");
  }

  //select de cantidad: 
  const opciones = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ];



  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl gap-12 m-2 card-container" >

      <Imagen id={atraccion.idProduct}></Imagen>


      <div className="px-6 py-4 card-information">
        <div className="font-bold text-xl mb-2">{atraccion.productTitle}</div>
        <p className="text-gray-700 text-base italic">{atraccion.city.cityName}</p>
        <p className="text-gray-700 text-base mb-4 ">{atraccion.productDescription.substring(0, 60).concat("...")}</p>
        <div class="flex justify-center items-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            onClick={handlePopup}
          >Ver detalle</button></div>
      </div>
      <div className="popup" ref={popupRef}>
        <div className="popup-content">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded pt-2 pb-2 px-4 close-card ml-auto"
            onClick={handlePopup}>X</button>
          <Imagen id={atraccion.idProduct}></Imagen>
          <div className="font-bold text-xl mb-2">{atraccion.productTitle}</div>
          <p className="text-gray-700 text-base italic">{atraccion.city.cityName}</p>
          <p className="text-gray descripcion md:p-8">{atraccion.productDescription}</p>

          <div className='gap-1.5 flex '>
            <p >Cuenta con:</p>
            {atraccion.characteristics.map((item, index) => (
              <img className="caracteristicas" src={item?.characteristicImage} alt={item?.characteristicName} />))}</div>

          <h2 className="mt-4 font-bold justify-end ">Precio por persona: {atraccion.productPrice}</h2>

          <div className='flex '>
            <select
              className=" bg-white border border-gray-400 hover:border-gray-500 sm:py-0 lg:py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline font-bold mr-1"
              name="opciones"
            >
              <option value="" disabled selected>
                Cantidad
              </option>
              {opciones.map((opcion) => (
                <option key={opcion.value} value={opcion.value}>
                  {opcion.label}
                </option>
              ))}
            </select>

            <button
              className=" mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded card-button"
            >Comprar</button></div>
        </div>
      </div>
    </div>
  );
};


export default Card