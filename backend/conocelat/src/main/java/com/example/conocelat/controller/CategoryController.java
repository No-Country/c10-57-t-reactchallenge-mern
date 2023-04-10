package com.example.conocelat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.conocelat.model.Category;
import com.example.conocelat.service.CategoryService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/categories")
public class CategoryController {
    
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/save")
    public ResponseEntity<Category> saveCategory(@RequestBody Category category){
        return ResponseEntity.ok(categoryService.saveCategory(category));
    }

    @GetMapping("/list")
    public ResponseEntity<List<Category>> listAllCategories(){
        return ResponseEntity.ok(categoryService.listAllCategories());
    }

    @GetMapping("/get/{id}")
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
