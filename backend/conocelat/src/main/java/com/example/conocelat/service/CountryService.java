package com.example.conocelat.service;

import java.util.List;

import com.example.conocelat.model.Country;

public interface CountryService {
    public List<Country> listAllCountries();

    public Country saveCountry(Country country);

    public Country getCountryById(Long id);

    public Country updateCountry(Country country);

    public void deleteCountry(Long id);
}
