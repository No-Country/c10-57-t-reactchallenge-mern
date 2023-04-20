package com.example.conocemelat.controller;

import com.example.conocemelat.model.Characteristic;
import com.example.conocemelat.service.CharacteristicService;
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
@RequestMapping("/characteristics")
public class CharacteristicController {

    @Autowired
    private CharacteristicService characteristicService;

    @PostMapping("/save")
<<<<<<< HEAD
=======
    //no tenia el permitAll
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<Characteristic> saveCharacteristic(@RequestBody Characteristic characteristic){
        return ResponseEntity.ok(characteristicService.saveCharacteristic(characteristic));
    }

    @GetMapping("/list")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<List<Characteristic>> listAllCharacteristic(){
        return ResponseEntity.ok(characteristicService.listAllCharacteristic());
    }

    @GetMapping("/get/{id}")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<Characteristic> getCharacteristicById(@PathVariable Integer id){
        ResponseEntity<Characteristic> response;

        if (characteristicService.getCharacteristicById(Long.valueOf(id))!=null){
            response = ResponseEntity.ok(characteristicService.getCharacteristicById(Long.valueOf(id))) ;
        }else
        {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;
    }

}
