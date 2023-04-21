import React from 'react'
import { ImagenBooking } from './ImagenBooking';

export const CardBooking = ({booking}) => {
  const {product}=booking;
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl gap-12 m-2 card-container">
      <ImagenBooking id={product.idProduct}></ImagenBooking>
      <div className="px-6 py-4 card-information">
        <div className="font-bold text-xl mb-2">{product?.productTitle}</div>
        <p className="text-gray-700 text-base italic">
          Pais: {product?.city.country.countryName}
        </p>
        <p className="text-gray-700 text-base italic mb-4 ">
          Ciudad: {product?.city.cityName}
        </p>
        <p className="text-gray-700 text-base mb-4 ">
          Precio: {product?.productPrice}
        </p>
        <p className="text-gray-700 text-base mb-4 ">
          Total: {booking?.total}
        </p>
      </div>
    </div>
  )
}
