import React, { useContext, useEffect, useState } from "react";
import "./HomeCL.css";
import { UserContext } from "../../context/userContext";
// import { UserContext } from '../../context/userContext';
import banner from "../../assets/bannerStart.svg";
import Grilla from "../../components/Home/Grilla";
import { FilterData } from "../../components/Home/FilterData/FilterData";
import { Search } from "../../components/Search/Search";
import { RegisterCL } from "../RegisterCL/RegisterCL";
import { LoginCL } from "../LoginCL/LoginCL";

export const HomeLoggedIn = () => {

  return (
    <div className="start-container">
      <div className="start__container-data">
        <div className="data__start">
          <img className="data__image" src={banner} alt="banner vacio" />
        </div>
        <div>
          <div className="container mx-auto p-4 md:flex md:justify-center md:p-8">
            <Search />
          </div>
          <FilterData />
        </div>
        <h3 className="titulo-home">Nuestros recomendados</h3>
        <Grilla />
        <h2 className="lema-home">Latinoamérica, un mundo por descubrir</h2>
      </div>

      <RegisterCL/>
      <LoginCL/>
    </div>
  );
};
