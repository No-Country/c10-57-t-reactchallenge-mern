package com.example.conocemelat.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private Long idProduct;

    @Column(name = "product_title", nullable = false, unique = true)
    private String productTitle;

<<<<<<< HEAD
    @Column(name = "product_description", nullable = false, unique = true)
    private String productDescription;

    @Column(name = "product_price", nullable = false, unique = true)
    private Double productPrice;

    @Column(name = "product_available", nullable = false, unique = true)
=======
    @Column(name = "product_description", nullable = false)
    private String productDescription;

    @Column(name = "product_price", nullable = false)
    private Double productPrice;

    @Column(name = "product_available", nullable = false)
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    private Boolean productAvailable;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_city")
    private City city;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_category")
    private Category category;

    @ManyToMany(cascade = {CascadeType.MERGE})
    @JoinTable(name = "product_has_characteristic", joinColumns = @JoinColumn(name = "id_product"), inverseJoinColumns = @JoinColumn(name = "id_characteristic"))
    private List<Characteristic> characteristics;

<<<<<<< HEAD
    @JsonIgnore
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Image> imagesProduct=new HashSet<>();
=======

    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER)
    @JsonIgnore
    //private List<Image> imagesProduct;
    private Set<Image> imagesProduct =new HashSet<Image>();

    /*@OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="id_product")
    private List<Image> imagesProduct;*/


>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b

    public Product() {
    }

<<<<<<< HEAD
    public Product(Long idProduct, String productTitle, String productDescription, Double productPrice, Boolean productAvailable, City city, Category category, List<Characteristic> characteristics, Set<Image>imagesProduct
) {
=======
    public Product(Long idProduct, String productTitle, String productDescription, Double productPrice, Boolean productAvailable, City city, Category category, List<Characteristic> characteristics, Set<Image> imagesProduct) {
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
        this.idProduct = idProduct;
        this.productTitle = productTitle;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productAvailable = productAvailable;
        this.city = city;
        this.category = category;
        this.characteristics = characteristics;
        this.imagesProduct = imagesProduct;
    }

    public Product(String productTitle, String productDescription, Double productPrice, Boolean productAvailable, City city, Category category, List<Characteristic> characteristics, Set<Image> imagesProduct) {
        this.productTitle = productTitle;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productAvailable = productAvailable;
        this.city = city;
        this.category = category;
        this.characteristics = characteristics;
        this.imagesProduct = imagesProduct;
    }

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public String getProductTitle() {
        return productTitle;
    }

    public void setProductTitle(String productTitle) {
        this.productTitle = productTitle;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Double productPrice) {
        this.productPrice = productPrice;
    }

    public Boolean getProductAvailable() {
        return productAvailable;
    }

    public void setProductAvailable(Boolean productAvailable) {
        this.productAvailable = productAvailable;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Characteristic> getCharacteristics() {
        return characteristics;
    }

    public void setCharacteristics(List<Characteristic> characteristics) {
        this.characteristics = characteristics;
    }

<<<<<<< HEAD
    public Set<Image> getImages() {
        return imagesProduct;
    }

    public void setImages(Set<Image> images) {
=======
    public Set<Image> getImagesProduct() {
        return imagesProduct;
    }

    public void setImagesProduct(Set<Image> imagesProduct) {
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
        this.imagesProduct = imagesProduct;
    }
}



