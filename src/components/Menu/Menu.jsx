import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = ({menuIsOpen, handler}) => {
    const [categories, setCategories] = useState([]);
    const cats = [
        {
            id:1,
            category_url: "/",
            category_name: "Automotive"
        },
        {
            id:2,
            category_url: "/",
            category_name: "Digital Devices"
        },
        {
            id:3,
            category_url: "/",
            category_name: "Men's Fashion"
        },
        {
            id:4,
            category_url: "/",
            category_name: "Women's Fashion"
        },
        {
            id:5,
            category_url: "/",
            category_name: "Home Electronics"
        },
        {
            id:6,
            category_url: "/",
            category_name: "Toys, Kids & Babies"
        },
        {
            id:7,
            category_url: "/",
            category_name: "Phone"
        },
        {
            id:8,
            category_url: "/",
            category_name: "Home pet appliances"
        },
        {
            id:9,
            category_url: "/",
            category_name: "Home imrpovement and toosl"
        },
        {
            id:1,
            category_url: "/",
            category_name: "Automotive"
        },
        {
            id:2,
            category_url: "/",
            category_name: "Digital Devices"
        },
        {
            id:3,
            category_url: "/",
            category_name: "Men's Fashion"
        },
        {
            id:4,
            category_url: "/",
            category_name: "Women's Fashion"
        },
        {
            id:5,
            category_url: "/",
            category_name: "Home Electronics"
        },
    ]
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
                {cats.map((category) => (
                    <Link key={category.id} to={category.category_url} className="text-base leading-[19.2px] text-blue-800" onClick={menuHandler}>
                        {category.category_name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Menu;
