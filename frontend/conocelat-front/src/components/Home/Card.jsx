import React from 'react';

export const AtraccionesTuristicas = [
  {
    nombre: 'Machu Picchu',
    foto: 'https://www.infobae.com/new-resizer/TVauRmC_ZxLJw_GSDpUt5G4VTW0=/768x512/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QODFX2DCF5HKTD2XN2HM6V42VY.jpg',
    lugar: 'Perú',
    descripcion: 'Una ciudadela inca ubicada en la cima de una montaña en los Andes peruanos.'
  },
  {
    nombre: 'Chichén Itzá',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kukulcan-Temple-Chichen-Itza-west-side-2016-Luka-Peternel.jpg/800px-Kukulcan-Temple-Chichen-Itza-west-side-2016-Luka-Peternel.jpg',
    lugar: 'México',
    descripcion: 'Una antigua ciudad maya en la península de Yucatán en México, famosa por su pirámide de Kukulcán.'
  },
  {
    nombre: 'Cristo Redentor',
    foto: 'https://i0.wp.com/imaginariodejaneiro.com/wp-content/uploads/2014/03/cristo-redentor-corcovado-rio-de-janeiro.jpg?w=600&ssl=1',
    lugar: 'Brasil',
    descripcion: 'Una estatua de Jesús en Río de Janeiro, Brasil, que se ha convertido en un icono del país.'
  },
  {
    nombre: 'Torres del Paine',
    foto: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/37/28/93/undoubtedly-one-of-the.jpg?w=400&h=-1&s=1',
    lugar: 'Chile',
    descripcion: 'Un parque nacional en la Patagonia chilena con impresionantes montañas, glaciares y lagos.'
  }
];

const Card = ({ atraccion }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <img className="w-full" src={atraccion.foto} alt={atraccion.nombre} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{atraccion.nombre}</div>
        <p className="text-gray-700 text-base">{atraccion.lugar}</p>
        <p className="text-gray-700 text-base">{atraccion.descripcion}</p>
      </div>
    </div>
  );
};


export default Card