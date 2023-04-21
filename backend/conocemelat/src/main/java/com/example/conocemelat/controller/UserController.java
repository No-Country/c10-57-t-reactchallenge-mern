package com.example.conocemelat.controller;

<<<<<<< HEAD
=======
import com.example.conocemelat.jwt.model.AuthenticationResquest;
import com.example.conocemelat.model.Role;
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
import com.example.conocemelat.model.User;
import com.example.conocemelat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;

=======
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

<<<<<<< HEAD
    @PostMapping("/save")
    public ResponseEntity<User> saveUser(@RequestBody User user){
=======
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/save")
    //no tenia el permitAll
    @PermitAll
    public ResponseEntity<User> saveUser(@RequestBody User user){
        String passWEncrypt= passwordEncoder.encode(user.getUserPassword());
        user.setUserPassword(passWEncrypt);
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
        return ResponseEntity.ok(userService.saveUser(user));
    }

    @GetMapping("/list")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<List<User>> listAllPUsers(){
        return ResponseEntity.ok(userService.listAllUsers());
    }

    @GetMapping("/get/{id}")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
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
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
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
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<String> deleteUser(@PathVariable Integer id){
        userService.deleteUser(Long.valueOf(id));
        return ResponseEntity.ok().body("Deleted");
    }

<<<<<<< HEAD
=======
    //@RequestMapping(value = "/login", method = RequestMethod.POST)
    //public String hello() {
        //return "Felicitaciones pudiste ingresar dentro de nuestra app";
    //}




>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
}
