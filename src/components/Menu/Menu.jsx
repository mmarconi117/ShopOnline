import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = ({menuIsOpen, handler}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/categories')
            .then(res => {
                console.log("Fetched categories:", res.data);  // Log the data received from the API
                setCategories(res.data); // Ensure data is set in state
            })
            .catch(error => {
                console.error('Error fetching categories:', error); // Handle error appropriately
            });
    }, []); // Ensures this runs only once on component mount

    const menuHandler = () => {
        handler(prev => !prev)
    }



    return (
        <div className="relative w-full px-3 py-2 min-w-max bg-[#ccefff] flex justify-start items-center font-Roboto gap-5">
            <button className='flex flex-col gap-1 w-6 active:px-0.5' onClick={menuHandler}>
                <div className='w-full h-1 rounded-md bg-black' />
                <div className='w-full h-1 rounded-md bg-black' />
                <div className='w-full h-1 rounded-md bg-black' />
            </button>
            <p className="text-xl font-bold whitespace-nowrap">All Categories</p>
            <div className={`duration-300 absolute ${menuIsOpen ? "grid" : "hidden"} bg-gray-100 opacity-95 z-10 left-0 md:left-2 rounded-br-md p-4 top-11 md:top-8 w-full md:w-[30%] gap-16 text-left grid-cols-2`}>
                {categories.map((category) => (
                    <Link key={category.id} to={category.category_url} className="text-base leading-[19.2px] text-blue-800" onClick={menuHandler}>
                        {category.category_name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Menu;
