package com.example.conocelat.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.conocelat.model.City;
import com.example.conocelat.repository.CityRepository;
import com.example.conocelat.service.CityService;

import java.util.List;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    public CityRepository cityRepository;

    @Override
    public List<City> listAllCities() {
        return cityRepository.findAll();
    }

    @Override
    public City saveCity(City city) {
        return cityRepository.save(city);
    }

    @Override
    public City getCityById(Long id) {
        return cityRepository.findById(id).get();
    }

    @Override
    public City updateCity(City city) {
        return cityRepository.save(city);
    }

    @Override
    public void deleteCity(Long id) {
        cityRepository.deleteById(id);
    }
}
