import React, { useRef } from 'react';
import "./Card.css"
import Imagen from './Imagen';
/*export const AtraccionesTuristicas = [
  {
    nombre: 'Machu Picchu',
    foto: 'https://www.infobae.com/new-resizer/TVauRmC_ZxLJw_GSDpUt5G4VTW0=/768x512/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QODFX2DCF5HKTD2XN2HM6V42VY.jpg',
    lugar: 'Cusco, Perú',
    descripcion: 'Una ciudadela inca ubicada en la cima de una montaña en los Andes peruanos. En lo alto de la montaña, grandes e impresionantes bloques de piedra unidos entre sí sin amalgama alguna conforman uno de los centros religiosos, políticos y culturales más importantes del imperio incaico: Machu Picchu.    La Ciudad Inca está dividida en dos grandes sectores: el agrícola, con una vasta red de andenes o terrazas artificiales, y el urbano, con bellas construcciones como el Templo del Sol.   Machu Picchu es hoy Patrimonio de la Humanidad y orgullo del Perú.',
    precio: 100,
    id: 1,

  },
  {
    nombre: 'Chichén Itzá',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kukulcan-Temple-Chichen-Itza-west-side-2016-Luka-Peternel.jpg/800px-Kukulcan-Temple-Chichen-Itza-west-side-2016-Luka-Peternel.jpg',
    lugar: 'Yucatán, México',
    descripcion: 'Una antigua ciudad maya en la península de Yucatán en México, famosa por su pirámide de Kukulcán.',
    precio: 110,
    id: 2,
  },
  {
    nombre: 'Cristo Redentor',
    foto: 'https://i0.wp.com/imaginariodejaneiro.com/wp-content/uploads/2014/03/cristo-redentor-corcovado-rio-de-janeiro.jpg?w=600&ssl=1',
    lugar: 'Rio de Janeiro, Brasil',
    descripcion: 'Una estatua de Jesús en Río de Janeiro, Brasil, que se ha convertido en un icono del país.',
    precio: 80,
    id: 3,
  },
  {
    nombre: 'Torres del Paine',
    foto: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/37/28/93/undoubtedly-one-of-the.jpg?w=400&h=-1&s=1',
    lugar: 'Última Esperanza, Chile',
    descripcion: 'Un parque nacional en la Patagonia chilena con impresionantes montañas, glaciares y lagos.',
    precio: 120,
    id: 4,
  }
];*/

const Card = ({ atraccion }) => {
  const popupRef = useRef(null);

  const handlePopup = () => {
    popupRef.current.classList.toggle("show");
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl card-container" >
    <Imagen id={atraccion.idProduct}></Imagen>


      <div className="px-6 py-4 card-information">
        <div className="font-bold text-xl mb-2">{atraccion.productTitle}</div>
        <p className="text-gray-700 text-base italic">{atraccion.city.cityName}</p>
        <p className="text-gray-700 text-base">{atraccion.productDescription}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded card-button"
          onClick={handlePopup}
        >Ver detalle</button>
      </div>
      <div className="popup" ref={popupRef}>
        <div className="popup-content">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded pt-2 pb-2 px-4 close-card"
            onClick={handlePopup}>X</button>
      


          <div className="font-bold text-xl mb-2">{atraccion.productTitle}</div>
        <p className="text-gray-700 text-base italic">{atraccion.city.cityName}</p>
        <p className="text-gray descripcion">{atraccion.productDescription}</p>
        <h2 className="mt-4 font-bold">Precio por persona: {atraccion.productPrice}</h2>

        <div className='flex gap-1.5'>
            <p>Cuenta con:  </p>
            {atraccion.characteristics.map((item, index) => (
              <img className="caracteristicas" src={item?.characteristicImage} alt={item?.characteristicName} />))}</div>
        <p className="pedido">Fecha: </p>
        <p className="pedido">Cantidad: </p>
        <h2>{atraccion.idProduct}</h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded card-button"
          >Comprar</button>
        </div>
      </div>
    </div>
  );
};


export default Card