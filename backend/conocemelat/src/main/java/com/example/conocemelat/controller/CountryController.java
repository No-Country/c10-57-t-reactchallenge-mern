package com.example.conocemelat.controller;

import com.example.conocemelat.model.Country;
import com.example.conocemelat.service.CountryService;
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
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @PostMapping("/save")
<<<<<<< HEAD
=======
    //no tenia el permitAll
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<Country> saveCountry(@RequestBody Country country){
        return ResponseEntity.ok(countryService.saveCountry(country));
    }

    @GetMapping("/list")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<List<Country>> listAllCountries(){
        return ResponseEntity.ok(countryService.listAllCountries());
    }

    @GetMapping("/get/{id}")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<Country> getCountryById(@PathVariable Integer id){
        ResponseEntity<Country> response;

        if (countryService.getCountryById(Long.valueOf(id))!=null){
            response = ResponseEntity.ok(countryService.getCountryById(Long.valueOf(id))) ;
        }else
        {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;
    }

}
