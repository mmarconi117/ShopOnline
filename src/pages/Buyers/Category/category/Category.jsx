import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Category() {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://sonnyny-be.onrender.com/api/categories');
      setCategories(response.data); // Use response.data directly
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchCategoriesById = async (categoryId) => {
    try {
      const response = await axios.get(`https://sonnyny-be.onrender.com/api/categories/${categoryId}`);
      setCategories(response.data); // Use response.data directly
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProducts = async (subcategoryId) => {
    try {
      const response = await axios.get(`https://sonnyny-be.onrender.com/api/products/${subcategoryId}`);
      setProducts(response.data); // Use response.data directly
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    setSelectedSubcategory('');
    fetchCategoriesById(categoryId);
    setProducts([]);
  };

  const handleSubcategoryChange = (e) => {
    const subcategoryId = e.target.value;
    setSelectedSubcategory(subcategoryId);
    fetchProducts(subcategoryId);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.category_name}</option>
        ))}
      </select>
      <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
        <option value="">Select Subcategory</option>
        {subcategories.map(subcategory => (
          <option key={subcategory.subcategory_id} value={subcategory.subcategory_id}>{subcategory.subcategory_name}</option>
        ))}
      </select>
      <ul>
        {products.map(product => (
          <li key={product.product_id}>{product.product_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
