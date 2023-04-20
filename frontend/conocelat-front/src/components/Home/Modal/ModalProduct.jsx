import ImagenPopup from "../ImagenPopup";
import React, { useRef, useState } from "react";
import "../Card.css";
export const ModalProduct = ({ popupRef, handlePopup, atraccion }) => {
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
        console.error("Lo siento, reserva no disponible:", response.statusText);
      }
    } catch (error) {
      console.error("Lo siento, reserva no disponible:", error);
    }
    alert("Reserva exitosa");

    popupRef.current.classList.toggle("show");
  };
  return (
    <div className="popup" ref={popupRef}>
      <div className="max-w-5xl mx-8">
        <div className="relative bg-white rounded-lg shadow p-4">
          <div className="w-full flex justify-end pb-4 md:pb-0">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded pt-2 pb-2 px-4 close-card ml-auto"
              onClick={handlePopup}
            >
              X
            </button>
          </div>
          <div className="md:flex md:items-start space-x-4">
            <ImagenPopup id={atraccion.idProduct}></ImagenPopup>
            <div className="space-y-8 py-4">
              <div>
                <h2 className="font-bold text-xl">{atraccion.productTitle}</h2>
                <p className="text-gray-700 text-base italic">
                  {atraccion.city.cityName}
                </p>
                <p className="text-gray descripcion">
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
              </div>
              <div>
                <h2 className="mt-4 font-bold justify-end ">
                  Precio por persona: {atraccion.productPrice}
                </h2>

                <div className="flex-col">
                  {/*<select
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
                  </div>
                  <button className=" mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded card-button" onClick={handleCarrito}>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
