import { useState, useEffect } from 'react';
import axios from 'axios';
const CategoryPage = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState({});  // Products will be stored with subcategory IDs as keys
  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await axios.get('https://sonnyny-be.onrender.com/api/subcategories');
        setSubcategories(response.data);
        response.data.forEach(subcategory => {
          fetchProductsForSubcategory(subcategory.id);  // Fetch products for each subcategory
        });
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };
    fetchSubcategories();
  }, []);
  const fetchProductsForSubcategory = async (subcategoryId) => {
    try {
      const response = await axios.get(`https://sonnyny-be.onrender.com/api/subcategories/${subcategoryId}`);
      setProducts(prevProducts => ({
        ...prevProducts,
        [subcategoryId]: response.data.products  // Store products under their subcategory ID
      }));
    } catch (error) {
      console.error(`Error fetching products for subcategory ${subcategoryId}:`, error);
      setProducts(prevProducts => ({ ...prevProducts, [subcategoryId]: [] }));  // Handle errors by setting an empty array for products
    }
  };
  return (
    <div className="category-container">
      {subcategories.map(subcategory => (
        <div className="subcategory" key={subcategory.id}>
          <h2 className="subcategory-title">{subcategory.subcategory_name}</h2>
          <div className="products">
            {products[subcategory.id]?.map(product => (  // Conditional rendering based on product availability
              <div className="product" key={product.id}>
                <img src={product.product_images.map(img => {
                  
                })} alt={product.product_name} />
                <p>{product.product_name}</p>
                <p>${product.product_price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryPage;