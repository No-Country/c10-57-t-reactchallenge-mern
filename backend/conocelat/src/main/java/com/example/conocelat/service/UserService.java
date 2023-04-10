package com.example.conocelat.service;

import java.util.List;

import com.example.conocelat.model.User;

public interface UserService {
    public List<User> listAllUsers();

    public User saveUser(User user);

    public User getUserById(Long id);

    public User updateUser(User user);

    public void deleteUser(Long id);

    public  User getRole(Long id);





}
