// shippingMethodAction.jsx
import { SELECT_SHIPPING_METHOD } from './index';



export const selectShippingMethod = (method) => {
    return {
      type: SELECT_SHIPPING_METHOD,
      payload: method
    };
  };
