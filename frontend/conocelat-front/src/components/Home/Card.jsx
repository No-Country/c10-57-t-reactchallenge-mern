import React, { useRef, useState } from "react";
import "./Card.css";
import Imagen from "./Imagen";
import { ModalProduct } from "./Modal/ModalProduct";

const Card = ({ atraccion }) => {
  //---funcion pop up de ver detalles--------------
  const popupRef = useRef(null);
  const handlePopup = () => {
    popupRef.current.classList.toggle("show");
  };

  /*select de cantidad:
  const opciones = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];*/

  //----para acceder a las fechas del calendario
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleCheckInDateChange = (event) => {
    setCheckInDate(event.target.value);
  };
  const handleCheckOutDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };
  //----para acceder a los datos que necesito en el post
  const idProd = atraccion.idProduct;
  const userId = localStorage.getItem("user_id");
  const total = atraccion.productPrice;

  //---- funcion de agregar al carrito (post booking)--------
  const handleCarrito = async (event) => {
    event.preventDefault();
    const bookingData = {
      user: {
        idUser: userId,
      },
      product: {
        idProduct: idProd,
      },
      checkIn: checkInDate,
      checkOut: checkOutDate,
      total: total,
    };

    try {
      const response = await fetch(
        "https://conocelat-backend-production.up.railway.app/bookings/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("La reserva se ha guardado correctamente:", data);
      } else {
        console.error("Error al guardar la reserva:", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la petición:", error);
    }
    alert("Reserva exitosa");

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
      <div className="popup" ref={popupRef}>
        <div className="popup-content">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded pt-2 pb-2 px-4 close-card ml-auto"
            onClick={handlePopup}
          >
            X
          </button>
          <Imagen id={atraccion.idProduct}></Imagen>
          <div className="font-bold text-xl mb-2">{atraccion.productTitle}</div>
          <p className="text-gray-700 text-base italic">
            {atraccion.city.cityName}
          </p>
          <p className="text-gray descripcion md:p-8">
            {atraccion.productDescription}
          </p>
          <div className="gap-1.5 flex ">
            <p>Cuenta con:</p>
            {atraccion.characteristics.map((item, index) => (
              <img
                key={index}
                className="caracteristicas"
                src={item?.characteristicImage}
                alt={item?.characteristicName}
              />
            ))}
          </div>
          <h2 className="mt-4 font-bold justify-end ">
            Precio por persona: {atraccion.productPrice}
          </h2>
          {/*calendario inicio*/}
          <div className="data__Wheregoing">
            <div className="data__inputs">
              <input
                className="input-data"
                placeholder="fecha de ida"
                type="date"
                value={checkInDate}
                onChange={handleCheckInDateChange}
              />
              <input
                className="input-data"
                placeholder="fecha de retorno"
                type="date"
                value={checkOutDate}
                onChange={handleCheckOutDateChange}
              />
            </div>
          </div>{" "}
          {/*calendario fin*/}
          <div className="flex justify-center">
            {/* <select
              className=" bg-white border border-gray-400 hover:border-gray-500 sm:py-0 lg:py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline font-bold mr-1"
              name="opciones"
              defaultValue="" 
            >
              <option value="" disabled>
                Cantidad
              </option>
              {opciones.map((opcion) => (
                <option key={opcion.value} value={opcion.value}>
                  {opcion.label}
                </option>
              ))}
            </select>*/}

            <button
              className=" mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded card-button h-12"
              onClick={handleCarrito}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
