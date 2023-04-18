import React, { useState, useEffect } from 'react';


export default function Imagen({ id, url1 }) {
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

  console.log(img);
  return (<>
<div class="flex justify-center items-start">
    {img.length === 0 ? <img className='w-60 h-60 px-0.5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/300px-Imagen_no_disponible.svg.png" alt="imagen no dosponible" /> :
      <img className='sm:w-30 md:w-80 sm:h-20 md:h-60 rounded' src={img[0].imageUrl} alt={img[0].imageTitle} />}</div>

  </>)
}


