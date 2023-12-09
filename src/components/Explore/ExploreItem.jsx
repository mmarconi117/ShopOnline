import PropTypes from 'prop-types';

export const ExploreItem = ({ src, title }) => {
  return (
    <a
      href='#'
      className="flex flex-col pb-1 px-[10px] justify-between items-center bg-[#FBFDFE] rounded-md shadow-md"
      style={{ boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}
    >
      <img
        src={src}
        alt=""
        className="w-[195px] h-[190px] rounded-md"
        style={{ borderRadius: '10px', marginTop: '20px' }}
      />
      <div className="text-[#2284B6] text-center text-xl font-semibold font-[Roboto]">{title}</div>
    </a>
  );
};

ExploreItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
