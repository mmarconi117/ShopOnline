import {SET_TRANSACTIONS} from ".";
import axios from "axios";


///action creator///
const setTransactions = (payload) => ({
    type: SET_TRANSACTIONS,
    payload,
  });
  
  export default setTransactions


  /////thunk creator//////////you will need to change the axios api route later 

  export const fetchTransactions = () => {
    return async dispatch => {
      const {data} = await axios.get('https://sonnyny-be.onrender.com/api/subcategories')
      dispatch(setTransactions(data))
    }
  }