package com.example.conocelat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.conocelat.model.City;

public interface CityRepository extends JpaRepository<City, Long> {
}
