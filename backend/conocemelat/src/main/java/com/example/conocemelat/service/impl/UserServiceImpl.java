package com.example.conocemelat.service.impl;

import com.example.conocemelat.model.User;
import com.example.conocemelat.repository.UserRepository;
import com.example.conocemelat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    public UserRepository userRepository;

    @Override
    public List<User> listAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
<<<<<<< HEAD
=======
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    @Override
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

<<<<<<< HEAD
=======
    @Override
    public User getRole(Long id) {
        return userRepository.getReferenceById(id);
    }
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
}
