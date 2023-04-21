package com.example.conocemelat.model;

import javax.persistence.*;

@Entity
@Table(name ="images")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_image")
    private Long idImage;

<<<<<<< HEAD
    @Column(name= "image_title", nullable = false, unique = true)
    private String imageTitle;

    @Column(name = "image_url", nullable = false, unique = true)
=======
    @Column(name= "image_title", nullable = false, unique = false)
    private String imageTitle;

    @Column(name = "image_url", nullable = false, unique = false)
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
    private String imageUrl;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id_product")
    private Product product;


    public Image() {
    }

<<<<<<< HEAD
    public Image(Long idImage, String imageTitle, String imageUrl, Product product) {
=======
   public Image(Long idImage, String imageTitle, String imageUrl, Product product) {
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
        this.idImage = idImage;
        this.imageTitle = imageTitle;
        this.imageUrl = imageUrl;
        this.product = product;
    }

    public Image(String imageTitle, String imageUrl, Product product) {
        this.imageTitle = imageTitle;
        this.imageUrl = imageUrl;
        this.product = product;
    }

    public Long getIdImage() {
        return idImage;
    }

    public void setIdImage(Long idImage) {
        this.idImage = idImage;
    }

    public String getImageTitle() {
        return imageTitle;
    }

    public void setImageTitle(String imageTitle) {
        this.imageTitle = imageTitle;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
