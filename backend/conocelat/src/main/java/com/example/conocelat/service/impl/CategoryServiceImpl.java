package com.example.conocelat.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.conocelat.model.Category;
import com.example.conocelat.repository.CategoryRepository;
import com.example.conocelat.service.CategoryService;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    public CategoryRepository categoryRepository;

    @Override
    public List<Category> listAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id).get();
    }

    @Override
    public Category updateCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}
