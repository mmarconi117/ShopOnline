import PropTypes from 'prop-types';

const FooterItem = ({ title, link }) => {
  return (
    <a href={link} className="text-[#b7b9ba] text-base font-normal leading-[120%] font-[Roboto] flex flex-1 w-full">{title}</a>
  );
};

FooterItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default FooterItem;