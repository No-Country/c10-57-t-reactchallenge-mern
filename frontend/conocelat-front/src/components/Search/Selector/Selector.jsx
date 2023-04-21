import { useEffect, useContext } from "react";

import Select from "react-select";
import { UserContext } from "../../../context/userContext";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#f8fafc",
    padding: 4,
    boxShadow: "none",
    borderColor: state.isFocused ? "#6b7280" : "#f8fafc",
    "&:hover": {
      borderColor: state.isFocused ? "#6b7280" : "#f8fafc",
    },
  }),
};

export const Selector = () => {
  const { state, setState, setUserChoice } = useContext(UserContext);
  useEffect(() => {
    fetch("https://conocelat-backend-production.up.railway.app/cities/list")
      .then((res) => res.json())
      .then((state) => {
        const data = state
          .map((location) => ({
            value: location.idCity,
            label: location.cityName,
          }))
          .sort((item1, item2) => {
            if (item1.label.toLowerCase() > item2.label.toLowerCase()) return 1;
            else if (item1.label.toLowerCase() < item2.label.toLowerCase())
              return -1;
            return 0;
          });
        setState(data);
      });
  }, []);

  return (
    <div className="w-full md:w-60">
      {state !== undefined ? (
        <Select
          options={state}
          placeholder="Selecciona un estado"
          styles={customStyles}
          onChange={(choice) => setUserChoice(choice)}
        />
      ) : (
        ""
      )}
    </div>
  );
};
