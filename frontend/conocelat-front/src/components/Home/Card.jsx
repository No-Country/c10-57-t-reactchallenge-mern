import React, { useRef, useState } from "react";
import "./Card.css";
import Imagen from "./Imagen";
import { ModalProduct } from "./Modal/ModalProduct";

const Card = ({ atraccion }) => {
  //---funcion pop up de ver detalles--------
  const popupRef = useRef(null);
  const handlePopup = () => {
    popupRef.current.classList.toggle("show");
  };
 

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl gap-12 m-2 card-container">
      <Imagen id={atraccion.idProduct}></Imagen>

      <div className="px-6 py-4 card-information">
        <div className="font-bold text-xl mb-2">{atraccion.productTitle}</div>
        <p className="text-gray-700 text-base italic">
          {atraccion.city.cityName}
        </p>
        <p className="text-gray-700 text-base mb-4 ">
          {atraccion.productDescription.substring(0, 60).concat("...")}
        </p>
        <div className="flex justify-center items-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            onClick={handlePopup}
          >
            Ver detalle
          </button>
        </div>
      </div>
      <ModalProduct popupRef={popupRef} handlePopup={handlePopup} atraccion={atraccion}></ModalProduct>
    </div>
  );
};

export default Card;
