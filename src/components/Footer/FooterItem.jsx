import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const FooterItem = ({ title, link }) => {
  return (
    <Link to={link} className="text-[#b7b9ba] text-base font-normal leading-[120%] font-[Roboto] flex flex-1 w-full">
      {title}
    </Link>
  );
};

FooterItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default FooterItem;