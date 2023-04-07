package com.example.conocemelat.controller;

import com.example.conocemelat.model.Product;
import com.example.conocemelat.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

//@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/save")
    //no tenia el permitAll
    @PermitAll
    public ResponseEntity<Product> saveProduct(@RequestBody Product product){
        return ResponseEntity.ok(productService.saveProduct(product));
    }

    @GetMapping("/list")
    public ResponseEntity<List<Product>> listAllProducts(){
        return ResponseEntity.ok(productService.listAllProducts());
    }

    @GetMapping("/random-list")
    public ResponseEntity<List<Product>> listRandomProducts(){
        return ResponseEntity.ok(productService.listRandomProducts());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Integer id){
        ResponseEntity<Product> response;

        if (productService.getProductById(Long.valueOf(id))!=null){
            response = ResponseEntity.ok(productService.getProductById(Long.valueOf(id))) ;
        }else
        {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;
    }

    @PutMapping("/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product){
        ResponseEntity<Product> response;
        if (product.getIdProduct() != null && productService.getProductById(product.getIdProduct()) != null){
            response = ResponseEntity.ok(productService.saveProduct(product));
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Integer id){
        productService.deleteProduct(Long.valueOf(id));
        return ResponseEntity.ok().body("Deleted");
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<List<Product>> listAllProductsByCategory(@PathVariable Long id){
        return ResponseEntity.ok(productService.findAllProductsByCategory(id));
    }

    @GetMapping("/city/{id}")
    public ResponseEntity<List<Product>> listAllProductsByCity(@PathVariable Long id){
        return ResponseEntity.ok(productService.findAllProductsByCity(id));
    }


}
