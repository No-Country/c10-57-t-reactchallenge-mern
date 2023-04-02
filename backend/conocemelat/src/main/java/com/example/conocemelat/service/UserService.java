package com.example.conocemelat.service;

import com.example.conocemelat.model.User;

import java.util.List;

public interface UserService {
    public List<User> listAllUsers();

    public User saveUser(User user);

    public User getUserById(Long id);

    public void deleteUser(Long id);

}
