import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ExploreItem = ({ src, category, path = "/" }) => { // Providing a default path
    return (
        <Link to={path} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#BAD9E8]">
            <img src={src} alt={category} className="w-full h-36 md:h-48 object-cover" />
            <div className="p-2 text-center">
                <span className="text-sm font-medium">{category}</span>
            </div>
        </Link>
    );
};

ExploreItem.propTypes = {
    src: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    path: PropTypes.string, // Not marked as required anymore
};

