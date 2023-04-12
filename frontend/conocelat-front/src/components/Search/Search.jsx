import { ButtonPrincipal } from "../Button/ButtonPrincipal";
import { Selector } from "./Selector/Selector";
import { DatePicker } from "antd";
import { useContext, useState } from "react";
import moment from "moment";
import "./Search.css";
import { UserContext } from "../../context/userContext";
import data from "../../data/data.json";

export const Search = () => {
  const { RangePicker } = DatePicker;
  const [dates, setDates] = useState([]);
  const { userChoice, setFilter } = useContext(UserContext);

  const handleSearch = (dates, userChoice) => {
    const dataFilter = data.filter(
      (item) => item.idCountry === userChoice.value
    );
    setFilter(dataFilter);
  };

  return (
    <div className="bg-white shadow p-2 space-x-0 flex flex-col space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0 rounded-md">
      <Selector />

      <RangePicker
        onChange={(values) => {
          setDates(
            values.map((item) => {
              return moment(item).format("YYYY-DD-MM");
            })
          );
        }}
        placeholder={["Ida", "Regreso"]}
        className="bg-slate-50 p-2.5 rounded border border-slate-50 shadow-none"
      />

      <ButtonPrincipal
        text="Buscar"
        handleSearch={() => handleSearch(dates, userChoice)}
      />
    </div>
  );
};
