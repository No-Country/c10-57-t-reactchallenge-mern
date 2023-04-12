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
    fetch("https://restcountries.com/v2/all?fields=name&fields=alpha2Code")
      .then((res) => res.json())
      .then((state) => {
        const data = state.map((location) => ({
          value: location.alpha2Code,
          label: location.name,
        }));
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
