package com.example.conoceLat.model;

import javax.persistence.*;

@Entity
@Table(name="characteristic")
public class Characteristic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_characteristic")
    private Long idCharacteristic;

    @Column(name = "characteristic_name", nullable = false, unique = true)
    private String characteristicName;

    @Column(name = "characteristic_image", nullable = false, unique = true)
    private String characteristicImage;

    @Column(name = "characteristic_description", nullable = false, unique = true)
    private String characteristicDescription;

}
