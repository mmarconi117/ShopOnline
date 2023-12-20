import PropTypes from 'prop-types';

export const ExploreItem = ({ src, title }) => {
  return (
    <a href='#' className='block mb-4 px-6 sm:px-4 md:px-2 break-inside-avoid-column'>
      <img
        src={src}
        alt=""
        className="w-full sm:h-[179px] sm:object-cover sm:border-[1px] mb-5 mx-auto"
        
      />
      <div className="text-[#0F1111] text-base sm:text-xl text-center font-normal sm:font-semibold font-Roboto leading-5 sm:leading-6 whitespace-nowrap">{title}</div>
    </a>
  );
};

ExploreItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
