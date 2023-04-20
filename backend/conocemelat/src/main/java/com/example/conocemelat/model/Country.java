package com.example.conocemelat.model;

import javax.persistence.*;

@Entity
@Table(name="countries")
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_country")
    private Long idCountry;

    @Column(name = "country_name", nullable = false, unique = true)
<<<<<<< HEAD
    private String cityName;
=======
    private String countryName;
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b

    public Country() {
    }

<<<<<<< HEAD
    public Country(Long idCountry, String cityName) {
        this.idCountry = idCountry;
        this.cityName = cityName;
=======
    public Country(Long idCountry, String countryName) {
        this.idCountry = idCountry;
        this.countryName = countryName;
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    }

    public Long getIdCountry() {
        return idCountry;
    }

    public void setIdCountry(Long idCountry) {
        this.idCountry = idCountry;
    }

<<<<<<< HEAD
    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
=======
    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    }
}
