import axios from 'axios';

function Category () {

    const categoryData = axios.get("https://localhost:8000/api/products")
    .then(res => {
        console.log(res)
    })        
    
}

export default Category