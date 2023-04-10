package com.example.conocelat.service;

import java.util.List;

import com.example.conocelat.model.Image;

public interface ImageService {
    public List<Image> listAllImages();

    public Image saveImage(Image image);

    public Image getImageById(Long id);

    public Image updateImage(Image image);

    public void deleteImage(Long id);

    public List<Image> findAllImagesByProduct(Long id);
}
