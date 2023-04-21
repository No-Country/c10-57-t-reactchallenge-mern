package com.example.conocemelat.controller;

import com.example.conocemelat.model.Category;
import com.example.conocemelat.service.CategoryService;
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
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/save")
<<<<<<< HEAD
=======
    //no tenia el permitAll
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<Category> saveCategory(@RequestBody Category category){
        return ResponseEntity.ok(categoryService.saveCategory(category));
    }

    @GetMapping("/list")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<List<Category>> listAllCategories(){
        return ResponseEntity.ok(categoryService.listAllCategories());
    }

    @GetMapping("/get/{id}")
<<<<<<< HEAD
=======
    @PermitAll
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    public ResponseEntity<Category> getCategoryById(@PathVariable Integer id){
        ResponseEntity<Category> response;

        if (categoryService.getCategoryById(Long.valueOf(id))!=null){
            response = ResponseEntity.ok(categoryService.getCategoryById(Long.valueOf(id))) ;
        }else
        {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;
    }
}
