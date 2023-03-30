package com.example.conoceLat.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private Long idProduct;

    @Column(name= "product_title", nullable = false, unique = true)
    private String productTitle;

    @Column(name = "product_description", nullable = false, unique = true)
    private String productDescription;

    @Column(name= "product_price", nullable = false, unique = true)
    private Double productPrice;

    @Column(name = "product_available", nullable = false, unique = true)
    private Boolean productAvailable;

    @ManyToOne(fetch= FetchType.EAGER)
    @JoinColumn(name= "id_city")
    private City city;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<Image> images;

    @ManyToMany(cascade={CascadeType.MERGE})
    @JoinTable(name= "product_has_characteristic", joinColumns = @JoinColumn(name="id_product"), inverseJoinColumns=@JoinColumn(name="id_characteristic"))
    private List<Characteristic> characteristics;

    public Product() {
    }

    public Product(Long idProduct, String productTitle, String productDescription, Double productPrice, Boolean productAvailable, City city, List<Image> images, List<Characteristic> characteristics) {
        this.idProduct = idProduct;
        this.productTitle = productTitle;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productAvailable = productAvailable;
        this.city = city;
        this.images = images;
        this.characteristics = characteristics;
    }

    public Product(String productTitle, String productDescription, Double productPrice, Boolean productAvailable, City city, List<Image> images, List<Characteristic> characteristics) {
        this.productTitle = productTitle;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productAvailable = productAvailable;
        this.city = city;
        this.images = images;
        this.characteristics = characteristics;
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

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public List<Characteristic> getCharacteristics() {
        return characteristics;
    }

    public void setCharacteristics(List<Characteristic> characteristics) {
        this.characteristics = characteristics;
    }
}
