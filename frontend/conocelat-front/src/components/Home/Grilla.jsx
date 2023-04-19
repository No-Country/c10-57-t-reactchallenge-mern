import React from "react";
import Card from "./Card";
//import { AtraccionesTuristicas } from './Card'
import { useQuery } from "react-query";

export default function Grilla() {
  const getProducts = async () => {
    const info = await fetch(
      "https://conocelat-backend-production.up.railway.app/products/list"
    )
      .then((res) => res.json())
      .catch((e) => "error");
    return info;
  };
  const query = useQuery("getProducts", getProducts);
  const { status, isLoading, isSuccess, isError, error, data } = query;

  return (
    <div className="container mx-auto">
      <div className="grid gap-8 px-4 my-8 md:p-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {/*{AtraccionesTuristicas.map((atraccion, index) => (
        <Card atraccion={atraccion} key={index} />
      ))}*/}

        {data?.map((atraccion, index) => (
          <Card atraccion={atraccion} key={index} />
        ))}
      </div>
    </div>
  );
}
