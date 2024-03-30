// ExploreItem.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Function to convert category names to camelCase
function toCamelCase(str) {
    return str
        .split(' ')
        .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

export const ExploreItem = ({ src, category }) => {
    const camelCaseCategory = toCamelCase(category);

    return (
        <Link to={`${camelCaseCategory}`} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
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
};
