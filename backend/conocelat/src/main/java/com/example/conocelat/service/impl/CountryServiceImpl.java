package com.example.conocelat.service.impl;

import org.springframework.stereotype.Service;

import com.example.conocelat.model.Country;
import com.example.conocelat.repository.CountryRepository;
import com.example.conocelat.service.CountryService;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {
    @Autowired
    public CountryRepository countryRepository;

    @Override
    public List<Country> listAllCountries() {
        return countryRepository.findAll();
    }

    @Override
    public Country saveCountry(Country country) {
        return countryRepository.save(country);
    }

    @Override
    public Country getCountryById(Long id) {
        return countryRepository.findById(id).get();
    }

    @Override
    public Country updateCountry(Country country) {
        return countryRepository.save(country);
    }

    @Override
    public void deleteCountry(Long id) {
        countryRepository.deleteById(id);
    }
}
