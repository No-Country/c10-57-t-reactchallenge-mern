import React, { useEffect, useState } from 'react'

export const ImagenBooking = ({id}) => {
  const [img, setimg] = useState("");

  useEffect(() => {
    getImg();
  }, [id]);

  const getImg = async () => {
    const response = await fetch(
      `https://conocelat-backend-production.up.railway.app/images/product/${id}`
    );
    const imgList = await response.json();
    setimg(imgList);
  };


  return (
    <>
      <div className="bg-cover">
        {
          img.length === 0 ? (
            <img
              className="bg-cover w-full h-30 md:h-60 rounded-t-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/300px-Imagen_no_disponible.svg.png"
              alt="imagen no dosponible"
            />
          ) : (
            <img
              className="bg-cover w-full h-30 md:h-60 rounded-t-lg"
              src={img[0].imageUrl}
              alt={img[0].imageTitle}
            />
          )
        }
      </div>
    </>
  )
}
