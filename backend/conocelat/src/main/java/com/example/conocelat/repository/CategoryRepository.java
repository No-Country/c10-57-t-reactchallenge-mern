package com.example.conocelat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.conocelat.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
