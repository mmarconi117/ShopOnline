import PropTypes from 'prop-types';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const DropdownButton = (props) => {
  const { title,childToParentData } = props;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
    childToParentData(isOpen)
  },[isOpen])
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)
        }
        className="flex items-center justify-end "
      >
        {title}
        {!isOpen ? <FaCaretDown /> : <FaCaretUp />}
      </button>
    </div>
  );
};

DropdownButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DropdownButton;