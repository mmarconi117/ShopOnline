import { INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions';

export const increaseQuantity = () => {
  return {
    type: INCREASE_QUANTITY
  };
};

export const decreaseQuantity = () => {
  return {
    type: DECREASE_QUANTITY
  };
};
