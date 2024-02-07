import PropTypes from 'prop-types';

const InfoSection = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start gap-6 whitespace-nowrap">
      <div className="text-[#79cdf7] text-base lg:text-xl font-bold leading-[120%] font-[Roboto] mb-4 sm:mb-0">
        {title}
      </div>
      <div className="flex flex-col text-sm lg:text-base items-start gap-2">{children}</div>
    </div>
  );
};

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfoSection;