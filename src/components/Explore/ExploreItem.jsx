// ExploreItem.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Adjust the ExploreItem component to accept and use a path prop
export const ExploreItem = ({ src, category, path }) => {
    return (
        <Link to={path} className="bg-[#FBFDFE] flex flex-col justify-between items-center w-[175px] h-[235px] rounded p-2 pb-3 gap-3 min-[391px]:w-[219px] min-[391px]:h-auto min-[391px]:p-[10px] min-[391px]:pb-5 min-[391px]:gap-[17px]">
            <img src={src} alt={category} className="w-full h-[179px] min-[391px]:w-[197px] object-cover rounded-[2px] bg-center bg-no-repeat" />
            <div className="text-[#2284B6] font-Roboto text-base font-medium min-[391px]:text-xl min-[391px]:leading-6 min-[391px]:font-semibold">
                {category}
            </div>
        </Link>
    );
};

ExploreItem.propTypes = {
    src: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired, 
};

