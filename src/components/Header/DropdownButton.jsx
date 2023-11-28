import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const DropdownButton = (props) => {
  const title = props.title
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center rounded-lg">
      <button 
        onClick={() => setIsOpen((prev) => !prev)} 
        className="p-4 w-fit flex items-center justify-between font-semibold tracking-tighter"
      >
        {title}
        {!isOpen ? <FaCaretDown /> : <FaCaretUp /> }
      </button>
    </div>
  )
}

export default DropdownButton;