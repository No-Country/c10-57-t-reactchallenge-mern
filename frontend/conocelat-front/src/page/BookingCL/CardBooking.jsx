import moment from 'moment';
import { ImagenBooking } from './ImagenBooking';

export const CardBooking = ({booking}) => {
  const {product}=booking;
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl gap-12 m-2 card-container">
        <ImagenBooking id={product.idProduct}></ImagenBooking>
        <div className="px-6 py-4 card-information">
          <div className="font-bold text-xl mb-2">{product?.productTitle}</div>
          <div className='flex flex-row gap-x-10'>
            <div>
                <div className="text-gray-700 text-base mb-4">
                  <p className='font-bold  text-blue-700'>Pais:</p>
                  {product?.city.country.countryName}
                </div>
                <div className="text-gray-700 text-base mb-4 ">
                  <p className='font-bold  text-blue-700'>Ciudad:</p> 
                  {product?.city.cityName}
                </div>
                <div className="text-gray-700 text-base mb-4 ">
                  <p className='font-bold  text-blue-700'>Precio:</p>
                  {product?.productPrice}
                </div>
            </div>
            <div>
              <div className="text-gray-700 text-base mb-4 ">
                  <p className='font-bold  text-blue-700'>Fecha de ida:</p>
                  {moment(booking?.checkIn).format('DD/MM/YYYY HH:mm')}
              </div>
              <div className="text-gray-700 text-base mb-4 ">
                  <p className='font-bold  text-blue-700'>Fecha de regreso:</p>
                  {moment(booking?.checkOut).format('DD/MM/YYYY HH:mm')}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
