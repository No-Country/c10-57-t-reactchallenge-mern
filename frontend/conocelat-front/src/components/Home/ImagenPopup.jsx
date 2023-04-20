import React, { useState, useEffect } from "react";

export default function ImagenPopup({ id, url1 }) {
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
      <div className="h-full">
        {img.length === 0 ? (
          <img
            className="h-64 w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/300px-Imagen_no_disponible.svg.png"
            alt="imagen no dosponible"
          />
        ) : (
          <img
            className="object-cover h-64 w-full rounded-md"
            src={img[0].imageUrl}
            alt={img[0].imageTitle}
          />
        )}
      </div>
    </>
  );
}
