import PropTypes from 'prop-types';

export const ExploreItem = ({ src, title }) => {
  return (
    <a
      href='#'
      className="flex flex-col justify-between items-center bg-[#FBFDFE] rounded-md shadow-lg  hover:shadow-gray-700"
    >
      <img
        src={src}
        alt=""
        className="w-[200px] h-[225px] rounded-md"
        style={{ borderRadius: '10px', marginTop: '10px' }}
      />
      <div className="text-[#2284B6] pt-3 pb-3 text-center text-xl font-semibold font-[Roboto]">{title}</div>
    </a>
  );
};

ExploreItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
