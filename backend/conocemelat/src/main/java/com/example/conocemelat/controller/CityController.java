package com.example.conocemelat.controller;

import com.example.conocemelat.model.City;
<<<<<<< HEAD
=======
import com.example.conocemelat.model.Product;
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
import com.example.conocemelat.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

<<<<<<< HEAD
=======
import javax.annotation.security.PermitAll;
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/cities")
public class CityController {

    @Autowired
    private CityService cityService;

    @PostMapping("/save")
<<<<<<< HEAD
=======
    //no tenia el permitAll
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<City> saveCity(@RequestBody City city){
        return ResponseEntity.ok(cityService.saveCity(city));
    }

    @GetMapping("/list")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<List<City>> listAllCities(){
        return ResponseEntity.ok(cityService.listAllCities());
    }

    @GetMapping("/get/{id}")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<City> getCityById(@PathVariable Integer id){
        ResponseEntity<City> response;

        if (cityService.getCityById(Long.valueOf(id))!=null){
            response = ResponseEntity.ok(cityService.getCityById(Long.valueOf(id))) ;
        }else
        {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;
    }
<<<<<<< HEAD
=======

    @PutMapping("/update")
    @PermitAll
    public ResponseEntity<City> updateCity(@RequestBody City city){
        ResponseEntity<City> response;
        if (city.getIdCity() != null && cityService.getCityById(city.getIdCity()) != null){
            response = ResponseEntity.ok(cityService.saveCity(city));
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }


>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
}
