import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'; // Added useEffect
import axios from 'axios';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://sonnyny-be.onrender.com/api/categories')
      .then(res => {
        setCategories(res.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  const menuHandler = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="relative w-full px-3 py-2 min-w-max bg-[#ccefff] gap-6 flex justify-start items-center font-Roboto">
      <button className='flex flex-col gap-1 w-6 active:px-0.5' onClick={menuHandler}>
        <div className='w-full h-1 rounded-md bg-black'/>
        <div className='w-full h-1 rounded-md bg-black'/>
        <div className='w-full h-1 rounded-md bg-black'/>
      </button>
      <p className="text-xl font-bold whitespace-nowrap"> All Categories</p>
      <div className={`duration-300 absolute ${isOpen ? "ease-in flex bg-gray-100 opacity-95 z-10 ml-0" : "ml-[-100px]"} left-0 flex-col rounded-br-md rounded-none p-4 top-11 w-full justify-between gap-16 text-left items-center`}>
        {categories.map((category) => (
          <Link key={category.id} to={category.category_url} className={`${!isOpen && "hidden"} text-base leading-[19.2px]`} onClick={menuHandler}>{category.category_name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;