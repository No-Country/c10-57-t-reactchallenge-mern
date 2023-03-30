package com.example.conoceLat.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="city")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_city")
    private Long idCity;

    @Column(name = "city_name", nullable = false, unique = true)
    private String cityName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id_country")
    private Country country;

    public City() {
    }

    @JsonIgnore
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Product> products =new HashSet<>();

}
