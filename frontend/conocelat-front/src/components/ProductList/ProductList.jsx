import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../../index.css'
import { RegisterCL } from "../../page/RegisterCL/RegisterCL";
import { LoginCL } from "../../page/LoginCL/LoginCL";
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
    // pueden usar page-container en todas las paginas que creen
    // se encuentra en index.css para que el page entre el footer y header se adapte
    <div className="page-container">
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
      {/* esto importen si quieren poner register y form en su pagina */}
      <RegisterCL/>
      <LoginCL/>
    </div>
  );
};
