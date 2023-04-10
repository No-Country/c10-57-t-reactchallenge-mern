package com.example.conocelat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.conocelat.model.Image;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    @Query("SELECT i FROM Image i WHERE i.product.id = ?1")
    List<Image> findAllImagesByProduct(Long id_product);
}
