import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../../../reducersAndActions/actions/helpCenterAction";
import search from "../../../assets/ICONS/SearchIcons.svg";

const SearchBar = () => {
  const inputValue = useSelector((state) => state.helpCenterReducer.inputValue);
  const dispatch = useDispatch();

  const onChange = (value) => {
    dispatch(setInput(value));
  };

  return (
    <div className="flex justify-center mt-20">
      <div id="help-center-search-bar" className="my-5 flex items-center">
        <div className="border-blue-500 border rounded-md p-2  md:w-[1460px] w-[400px] rounded-tr-none rounded-br-none relative">
          <input
            value={inputValue}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            placeholder="Search keywords for help"
            className="outline-none bg-transparent placeholder-black w-full"
          />
        </div>

        <div className="flex items-center pr-3 bg-[#001C43] h-10 w-14 rounded-md p-4 rounded-tl-none rounded-bl-none">
          <img src={search} className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;