import PropTypes from 'prop-types';

export const ExploreItem = ({ src, title }) => {
  return (
    <a href='#' className='block w-40 md:w-48 mb-4 px-2 py-2 md:p-[10px] md:pb-[20px] bg-[#FBFDFE] rounded'>
      <img
        src={src}
        alt=""
        className="w-full h-[179px] object-cover mb-3 rounded"
        
      />
      <div className="text-[#2284B6] text-base sm:text-xl text-center font-medium md:font-semibold font-Roboto leading-5 md:leading-6 whitespace-nowrap">{title}</div>
    </a>
  );
};

ExploreItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
