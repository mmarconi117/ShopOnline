import { useState, useEffect } from 'react';
import axios from 'axios';
import UpperBody from './UpperBody';

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategoryProducts, setActiveCategoryProducts] = useState([]);
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:8000/api/categories');
            setCategories(res.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryClick = async (categoryId) => {
        if (activeCategoryId === categoryId) {
            setActiveCategoryId(null);
            setActiveCategoryProducts([]);
        } else {
            setActiveCategoryId(categoryId);
            fetchProductsForCategory(categoryId);
        }
    };

    const fetchProductsForCategory = async (categoryId) => {
        setLoading(true);
        try {
            const { data: products } = await axios.get('http://localhost:8000/api/products');
            const selectedCategory = categories.find(cat => cat.id === categoryId);
            const subcategoryIds = new Set(selectedCategory.subcategories.map(sc => sc.id));
            const filteredProducts = products.filter(product => subcategoryIds.has(product.subcategoryId));
            setActiveCategoryProducts(filteredProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
            setActiveCategoryProducts([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <div className="category-container">
            {/* <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ margin: "10px", padding: "5px", width: "95%" }}
            /> */}
            {/* <UpperBody /> */}
            {loading && <div>Loading...</div>}
            {categories.filter(category =>
                category.category_name.toLowerCase().includes(searchTerm.toLowerCase())
            ).map(category => (
                <div key={category.id}>
                    <h2 onClick={() => handleCategoryClick(category.id)} style={{ cursor: 'pointer' }}>
                        {category.category_name}
                    </h2>
                    {activeCategoryId === category.id && activeCategoryProducts.map(product => (
                        <div key={product.id} style={{ margin: "10px" }}>
                            {product.product_images && product.product_images.length > 0 ? (
                                <img src={product.product_images[0]} alt={product.product_name} style={{ width: "100px", height: "100px" }} />
                            ) : (
                                <div>No Image Available</div>
                            )}
                            <p>{product.product_name}</p>
                            <p>${product.product_price}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CategoryPage;
