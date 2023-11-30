import PropTypes from 'prop-types';

const InfoSection = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="text-[#09618E] text-xl font-bold leading-[120%] font-[Roboto]">
        {title}
      </div>
      <div className="flex flex-col items-start gap-2">{children}</div>
    </div>
  );
};

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfoSection;