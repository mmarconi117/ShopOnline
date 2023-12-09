import PropTypes from 'prop-types';

export const ExploreItem = ({ src, title }) => {
  return (
    <div className="flex flex-col pb-2 px-[10px] pr-4 justify-between items-center bg-[#FBFDFE] rounded-md shadow-md" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <img
        src={src}
        alt=""
        className="w-[197px] h-[179px] rounded-md"
        style={{ borderRadius: '10px', marginTop: '20px' }}
      />
      <div className="text-[#2284B6] text-center text-xl font-semibold font-[Roboto]">{title}</div>
    </div>
  );
};

ExploreItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
