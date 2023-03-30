package com.example.conoceLat.model;

import javax.persistence.*;

@Entity
@Table(name="country")
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_country")
    private Long idCountry;

    @Column(name = "country_name", nullable = false, unique = true)
    private String cityName;

    public Country() {
    }

    public Country(Long idCountry, String cityName) {
        this.idCountry = idCountry;
        this.cityName = cityName;
    }

    public Long getIdCountry() {
        return idCountry;
    }

    public void setIdCountry(Long idCountry) {
        this.idCountry = idCountry;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }
}
