package com.example.conocelat.service;

import java.util.List;

import com.example.conocelat.model.Category;

public interface CategoryService {
    public List<Category> listAllCategories();

    public Category saveCategory(Category category);

    public Category getCategoryById(Long id);

    public Category updateCategory(Category category);

    public void deleteCategory(Long id);
}
