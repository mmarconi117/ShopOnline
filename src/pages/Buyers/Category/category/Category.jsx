import { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryPage = () => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await axios.get('https://sonnyny-be.onrender.com/api/subcategories');
        setSubcategories(response.data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };

    fetchSubcategories();
  }, []);

  const fetchProductsForSubcategory = async (subcategoryId) => {
    try {
      const response = await axios.get(`https://sonnyny-be.onrender.com/api/subcategories/1`);
      console.log(response.data.products)
      return response.data;
    } catch (error) {
      console.error(`Error fetching products for subcategory ${subcategory_name}:`, error);
      return [];
    }
  };

  return (
    <div className="category-container">
      {subcategories.map(subcategory => (
        <div className="subcategory" key={subcategory.id}>
          <h2 className="subcategory-title">{subcategory.subcategory_name}</h2>
          <div className="products">
            {fetchProductsForSubcategory(subcategory.id).then(products => (
              products.map(product => (
                <div className="product" key={product.id}>
                  <img src={product.product_images[0]} alt={product.product_name} />
                  <p>{product.product_name}</p>
                  <p>${product.product_price.toFixed(2)}</p>
                </div>
              ))
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;