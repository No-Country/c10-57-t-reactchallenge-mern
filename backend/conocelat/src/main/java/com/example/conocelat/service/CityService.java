package com.example.conocelat.service;

import java.util.List;

import com.example.conocelat.model.City;

public interface CityService {
    public List<City> listAllCities();

    public City saveCity(City city);

    public City getCityById(Long id);

    public City updateCity(City city);

    public void deleteCity(Long id);

}
