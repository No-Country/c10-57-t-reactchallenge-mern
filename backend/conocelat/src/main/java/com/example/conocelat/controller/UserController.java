package com.example.conocelat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.conocelat.model.User;
import com.example.conocelat.service.UserService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<User> saveUser(@RequestBody User user){
        return ResponseEntity.ok(userService.saveUser(user));
    }

    @GetMapping("/list")
    public ResponseEntity<List<User>> listAllPUsers(){
        return ResponseEntity.ok(userService.listAllUsers());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id){
        ResponseEntity<User> response;

        if (userService.getUserById(Long.valueOf(id))!=null){
            response = ResponseEntity.ok(userService.getUserById(Long.valueOf(id))) ;
        }else
        {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        ResponseEntity<User> response;
        if (user.getIdUser() != null && userService.getUserById(user.getIdUser()) != null){
            response = ResponseEntity.ok(userService.saveUser(user));
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer id){
        userService.deleteUser(Long.valueOf(id));
        return ResponseEntity.ok().body("Deleted");
    }

}
