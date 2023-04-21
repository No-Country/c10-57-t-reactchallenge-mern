package com.example.conocemelat.controller;

import com.example.conocemelat.model.Image;
import com.example.conocemelat.service.ImageService;
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
@RequestMapping("/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/save")
<<<<<<< HEAD
=======
    //no tenia el permitAll
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<Image> saveImage(@RequestBody Image image){
        return ResponseEntity.ok(imageService.saveImage(image));
    }

    @GetMapping("/list")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<List<Image>> listAllImage(){
        return ResponseEntity.ok(imageService.listAllImages());
    }

    @GetMapping("/get/{id}")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<Image> getImageById(@PathVariable Integer id){
        ResponseEntity<Image> response;

        if (imageService.getImageById(Long.valueOf(id))!=null){
            response = ResponseEntity.ok(imageService.getImageById(Long.valueOf(id))) ;
        }else
        {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;
    }
    @GetMapping("/product/{id}")
<<<<<<< HEAD
    //@PermitAll
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<List<Image>> findAllImagesByProduct(@PathVariable Long id){
        return ResponseEntity.ok(imageService.findAllImagesByProduct(id));
    }
}
