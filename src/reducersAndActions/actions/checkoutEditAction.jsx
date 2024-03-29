// checkoutEditAction.jsx

import { EDIT_SHIPPING_ADDRESS } from "./index";

export const editShippingAddress = (formData) => ({
  type: EDIT_SHIPPING_ADDRESS,
  payload: formData,
});
