import { useParams } from "react-router-dom";
import { Navbar } from "../../layout/Navbar/Navbar";
import { useEffect, useState } from "react";
export const ProductList = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    setProducts(undefined);
    getProductsByCategory();
  }, [categoryId]);

  const getProductsByCategory = async () => {
    const response = await fetch(
      `https://conocelat-backend-production.up.railway.app/products/category/${categoryId}`
    );
    const productsList = await response.json();
    setProducts(productsList);
  };

  return (
    <div>
      <Navbar />
      {products === undefined ? (
        <div className="flex flex-wrap justify-center">Cargando...</div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {products.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            products.map((atraccion, index) => (
              //<Card atraccion={atraccion} key={index} />
              <p key={index}>{atraccion.productTitle}</p>
            ))
          )}
        </div>
      )}
    </div>
  );
};
