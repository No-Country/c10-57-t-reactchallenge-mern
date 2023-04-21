package com.example.conocemelat.service;

import com.example.conocemelat.model.User;

import java.util.List;

public interface UserService {
    public List<User> listAllUsers();

    public User saveUser(User user);

    public User getUserById(Long id);

<<<<<<< HEAD
    public void deleteUser(Long id);

=======
    public User updateUser(User user);

    public void deleteUser(Long id);

    public  User getRole(Long id);





>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
}
