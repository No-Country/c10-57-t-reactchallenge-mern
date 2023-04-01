package com.example.conoceLat.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="country")
public class Country implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_country")
    private Long idCountry;

    @Column(name = "country_name", nullable = false, unique = true)
    private String countryName;

    public Country() {
    }

    public Country(Long idCountry, String countryName) {
        this.idCountry = idCountry;
        this.countryName = countryName;
    }

    public Country(String countryName) {
        this.countryName = countryName;
    }

    public Long getIdCountry() {
        return idCountry;
    }

    public void setIdCountry(Long idCountry) {
        this.idCountry = idCountry;
    }

    public String getCityName() {
        return countryName;
    }

    public void setCityName(String countryName) {
        this.countryName = countryName;
    }
}
