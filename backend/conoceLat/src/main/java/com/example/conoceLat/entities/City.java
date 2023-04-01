package com.example.conoceLat.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.io.Serializable;

@Entity
@Table(name="city")
public class City implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_city")
    private Long idCity;

    @Column(name = "city_name", nullable = false, unique = true)
    private String cityName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id_country")
    private Country country;

    @JsonIgnore
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Product> products =new HashSet<>();

    public City() {
    }

    public City(Long idCity, String cityName, Country country, Set<Product> products) {
        this.idCity = idCity;
        this.cityName = cityName;
        this.country = country;
        this.products = products;
    }

    public City(String cityName, Country country, Set<Product> products) {
        this.cityName = cityName;
        this.country = country;
        this.products = products;
    }

    public Long getIdCity() {
        return idCity;
    }

    public void setIdCity(Long idCity) {
        this.idCity = idCity;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }

}
