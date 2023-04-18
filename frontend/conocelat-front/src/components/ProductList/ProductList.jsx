import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RegisterCL } from "../../page/RegisterCL/RegisterCL";
import { LoginCL } from "../../page/LoginCL/LoginCL";
import { HeroProduct } from "./HeroProduct/HeroProduct";
import { Spinner } from "./Spinner/Spinner";
import Card from "../Home/Card";
import "../../index.css";

export const ProductList = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState(undefined);
  const [categoryInfo, setCategoryInfo] = useState(undefined);

  useEffect(() => {
    setProducts(undefined);
    setCategoryInfo(undefined);

    getProductsByCategory();
    getInformationCategory();
  }, [categoryId]);

  const getProductsByCategory = async () => {
    const response = await fetch(
      `https://conocelat-backend-production.up.railway.app/products/category/${categoryId}`
    );
    const productsList = await response.json();
    setProducts(productsList);
  };

  const getInformationCategory = async () => {
    const response = await fetch(
      `https://conocelat-backend-production.up.railway.app/categories/get/${categoryId}`
    );
    const category = await response.json();
    setCategoryInfo(category);
  };

  return (
    // pueden usar page-container en todas las paginas que creen
    // se encuentra en index.css para que el page entre el footer y header se adapte
    <div className="page-container">
      <div>
        {products === undefined || categoryInfo === undefined ? (
          <Spinner />
        ) : (
          <div>
            <HeroProduct category={categoryInfo} />
            <div className="flex flex-wrap justify-center py-4">
              {products.length === 0 ? (
                <p>No hay productos</p>
              ) : (
                products.map((atraccion, index) => (
                  <Card atraccion={atraccion} key={index} />
                ))
              )}
            </div>
          </div>
        )}
        {/* esto importen si quieren poner register y form en su pagina */}
        <RegisterCL />
        <LoginCL />
      </div>
    </div>
  );
};
