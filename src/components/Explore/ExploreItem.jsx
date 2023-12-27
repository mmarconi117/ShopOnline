import PropTypes from 'prop-types';

export const ExploreItem = ({ src, title }) => {
  return (
    <a
      href='#'
      className="relative group flex flex-col justify-between items-center bg-[#FBFDFE] rounded-md shadow-lg  hover:shadow-gray-700"
    >
      <img
        src={src}
        alt=""
        className="w-full h-[220px] rounded-md group-hover:opacity-50 transition-opacity duration-300 ease-in-out m-3 pl-1 pr-"
      />
      <div className="absolute opacity-0 group-hover:opacity-100 bottom-16 text-[#2284B6] pt-3 pb-3 text-center text-3xl font-semibold font-[Roboto]">
        {title}
      </div>
    </a>
  );
};

ExploreItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
