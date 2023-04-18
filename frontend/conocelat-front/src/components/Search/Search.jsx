import { ButtonPrincipal } from "../Button/ButtonPrincipal";
import { Selector } from "./Selector/Selector";
import { DatePicker } from "antd";
import { useContext, useState } from "react";
import moment from "moment";
import { UserContext } from "../../context/userContext";
import "./Search.css";

export const Search = () => {
  const { RangePicker } = DatePicker;
  const [dates, setDates] = useState([]);
  const { userChoice, setFilter } = useContext(UserContext);

  const getFilter = async (url) => {
    const dataFilter = await fetch(url);
    const dataJson = await dataFilter.json();
    setFilter(dataJson);
  };

  const handleSearch = async (dates, userChoice) => {
    if (userChoice !== "" && dates.length === 0) {
      getFilter(
        `https://conocelat-backend-production.up.railway.app/products/city/${userChoice.value}`
      );
    } else if (userChoice === "" && dates.length > 0) {
      getFilter(
        `https://conocelat-backend-production.up.railway.app/products/search-date?date_in=${dates[0]}&date_out=${dates[1]}`
      );
    } else if (userChoice !== "" && dates.length > 0) {
      getFilter(
        `https://conocelat-backend-production.up.railway.app/products/search?date_in=${dates[0]}&date_out=${dates[1]}&id_city=${userChoice.value}`
      );
    }
  };

  return (
    <div className="bg-white shadow p-2 space-x-0 flex flex-col space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0 rounded-md">
      <Selector />

      <RangePicker
        onChange={(values) => {
          setDates(
            values.map((item) => {
              return item.format("YYYY-MM-DD");
            })
          );
        }}
        disabledDate={(current) => {
          return moment().add(-1, "days") >= current;
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
