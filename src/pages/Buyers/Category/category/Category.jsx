import { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);  // Storing categories
    const [products, setProducts] = useState({});  // Products stored by subcategory ID
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCategoriesAndSubcategories = async () => {
            try {
                const res = await axios.get('https://api.shoponlinenewyork.com/api/categories');
                setCategories(res.data);
                res.data.forEach(category => {
                    category.subcategories.forEach(subcategory => {
                        fetchProductsForSubcategory(subcategory.id);
                    });
                });
            } catch (error) {
                console.error('Error fetching categories and subcategories:', error);
                setCategories([]); // Set to empty array on error
            }
        };

        fetchCategoriesAndSubcategories();
    }, []);

    const fetchProductsForSubcategory = async (subcategoryId) => {
        try {
            const res = await axios.get(`https://api.shoponlinenewyork.com/api/products?subcategoryId=${subcategoryId}`);
            setProducts(prevProducts => ({
                ...prevProducts,
                [subcategoryId]: res.data  // Assuming the API returns the array of products directly
            }));
        } catch (error) {
            console.error(`Error fetching products for subcategory ${subcategoryId}:`, error);
            setProducts(prevProducts => ({ ...prevProducts, [subcategoryId]: [] })); // Set to empty array on error
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="category-container">
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ margin: "10px", padding: "5px", width: "95%" }}
            />
            {categories.map(category => (
                <div key={category.id}>
                    <h2 className="category-title">{category.categoryName}</h2>
                    {category.subcategories.map(subcategory => (
                        <div key={subcategory.id}>
                            <h3 className="subcategory-title">{subcategory.subcategoryName}</h3>
                            <div className="products">
                                {products[subcategory.id]?.filter(product =>
                                    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
                                ).map(product => (
                                    <div className="product" key={product.id}>
                                        {product.productImages && product.productImages.length > 0 ? (
                                            <img src={product.productImages[0]} alt={product.productName} />
                                        ) : (
                                            <div>No Image Available</div> // Placeholder in case there are no images
                                        )}
                                        <p>{product.productName}</p>
                                        <p>${product.productPrice}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CategoryPage;
