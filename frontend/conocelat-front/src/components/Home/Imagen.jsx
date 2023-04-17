import React, { useState, useEffect } from 'react';
import { useQuery } from "react-query";


export default function Imagen({id, url1}) {
  console.log(url1);
    const getImage = async (url1) => {
      const url = "https://conocelat-backend-production.up.railway.app/images/product/"+id

        const info = await
          fetch(url1)
            .then((res) => res.json())
            .catch((e) => "error");
        return info;
      };
      console.log(id);
      const queryImg = useQuery("getImage", getImage);
      const {status, isLoading, isSuccess, isError, error, data } = queryImg;


  return (<>
    <p>{id}</p>
    <h1>{data?.[0].imageTitle}</h1>


  </>)
}
