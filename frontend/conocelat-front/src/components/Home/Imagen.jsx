import React, {useEffect} from 'react'
import { useQuery } from "react-query";


export default function Imagen({id}) {
    const getImage = async () => {
        const info = await
          fetch("https://conocelat-backend-production.up.railway.app/images/product/1")
            .then((res) => res.json())
            .catch((e) => "error");
        return info;
      };
      
      const queryImg = useQuery("getImage", getImage);
      const { data } = queryImg;
    

  return (<>

    <p>{id}</p>
   



 
  </>)
}
