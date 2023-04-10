package com.example.conocelat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.conocelat.model.Country;

public interface CountryRepository extends JpaRepository<Country, Long> {
}
