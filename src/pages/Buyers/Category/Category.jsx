import axios from 'axios';

export default async function Category () {
    const categoriesRes = await axios.get('https://sonnyny-be.onrender.com/api/categories')
    const subcategoriesRes = await axios.get('https://sonnyny-be.onrender.com/api/subcategories')
    const productRes = await axios.get('https://sonnyny-be.onrender.com/api/products')

    const categories = categoriesRes.data;
    const subcategories = subcategoriesRes.data;
    const products = productRes.data;

    const formattedData = [];

    
}