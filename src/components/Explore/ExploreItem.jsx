import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ExploreItem = ({ src, category, path = "/" }) => { // Providing a default path
    return (
<<<<<<< HEAD
        <Link to={path} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#BAD9E8]">
            <img src={src} alt={category} className="w-full h-36 md:h-48 object-cover" />
            <div className="p-2 text-center">
                <span className="text-sm font-medium">{category}</span>
=======
        <Link to={path} className="bg-[#FBFDFE] flex flex-col justify-between items-center w-[175px] h-[235px] rounded p-2 pb-3 gap-3 min-[391px]:w-[219px] min-[391px]:h-auto min-[391px]:p-[10px] min-[391px]:pb-5 min-[391px]:gap-[17px]">
            <img src={src} alt={category} className="w-full h-[179px] min-[391px]:w-[197px] object-cover rounded-[2px] bg-center bg-no-repeat" />
            <div className="text-[#2284B6] font-Roboto text-base font-medium min-[391px]:text-xl min-[391px]:leading-6 min-[391px]:font-semibold">
                {category}
>>>>>>> cf34982d4871a35bb9a00c679b598029ef1a507b
            </div>
        </Link>
    );
};

ExploreItem.propTypes = {
    src: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    path: PropTypes.string, // Not marked as required anymore
};

