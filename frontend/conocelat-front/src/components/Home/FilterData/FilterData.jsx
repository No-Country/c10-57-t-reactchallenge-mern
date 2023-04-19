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
      <div className="container mx-auto">
        <div className="grid gap-8 px-4 my-8 md:p-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
          {filter.map((atraccion, index) => (
            <Card atraccion={atraccion} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
