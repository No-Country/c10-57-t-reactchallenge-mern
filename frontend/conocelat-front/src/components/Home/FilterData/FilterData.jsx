import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import Card from "../Card";

export const FilterData = () => {
  const { filter } = useContext(UserContext);

  if (filter === undefined) {
    return <div></div>;
  }

  return (
    <div>
      {filter.length > 0 ? (
        <h3 className="titulo-home">Resultados de tu búsqueda</h3>
      ) : (
        ""
      )}
      <div className="flex flex-wrap justify-center">
        {filter.map((atraccion, index) => (
          //<Card atraccion={atraccion} key={index} />
          <p key={index}>{atraccion.productTitle}</p>
        ))}
      </div>
    </div>
  );
};
