// shippingFormAction.jsx

import { UPDATE_SHIPPING_FORM } from "./index";

export const updateShippingForm = (formData) => ({
  type: UPDATE_SHIPPING_FORM,
  payload: formData,
});
