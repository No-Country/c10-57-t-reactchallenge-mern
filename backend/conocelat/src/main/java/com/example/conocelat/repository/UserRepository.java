package com.example.conocelat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.conocelat.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
