package com.example.conocelat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.conocelat.model.Characteristic;

public interface CharacteristicRepository extends JpaRepository<Characteristic, Long> {
}
