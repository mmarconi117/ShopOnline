import { useSelector, useDispatch } from 'react-redux';

import { setInput } from '../../../reducersAndActions/actions/helpCenterAction';

import search from '../../../assets/ICONS/SearchIcons.svg';

const SearchBar = () => {
    const inputValue = useSelector(
        (state) => state.helpCenterReducer.inputValue,
    );
    const dispatch = useDispatch();

    const onChange = (value) => {
        dispatch(setInput(value));
    };

    return (
        <div id="help-center-search-bar" className="my-5">
            <div>
                <input
                    value={inputValue}
                    onChange={(e) => onChange(e.target.value)}
                    type="text"
                    placeholder="Search keywords for help"
                />
            </div>
            <div className="">
                <img src={search} className="w-6 h-6" />
            </div>
        </div>
    );
};

export default SearchBar;
