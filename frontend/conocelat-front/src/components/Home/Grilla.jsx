import React from 'react'
import Card from './Card'
//import { AtraccionesTuristicas } from './Card'
import { useQuery } from "react-query";




export default function Grilla() {
const getProducts = async () => {
  const info = await
  fetch("https://conocelat-backend-production.up.railway.app/products/list")
  .then((res) => res.json())
  .catch((e) => "error");
  return info;
};
  const query = useQuery("getProducts", getProducts);
  const { status, isLoading, isSuccess, isError, error, data } = query;



  return (<>
    <div className="flex flex-wrap justify-center">
       {/*{AtraccionesTuristicas.map((atraccion, index) => (
        <Card atraccion={atraccion} key={index} />
      ))}*/}

      {data?.map((atraccion, index) => (
        <Card atraccion={atraccion} key={index} />
      ))}
    </div></>
  )
}
