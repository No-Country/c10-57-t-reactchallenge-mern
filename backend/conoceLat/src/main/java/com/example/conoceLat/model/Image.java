package com.example.conoceLat.model;

import javax.persistence.*;

@Entity
@Table(name ="image")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_image")
    private Long idImage;

    @Column(name= "image_title", nullable = false, unique = true)
    private String imageTitle;

    @Column(name = "image_url", nullable = false, unique = true)
    private String imageUrl;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id_product", nullable = false)
    private Product product;

}
