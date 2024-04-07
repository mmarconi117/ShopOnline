import { UPLOAD_NEW_PRODUCT, UPLOAD_PRODUCT_IMAGES, RESET_UPLOADED_PRODUCT_IMAGES } from '../actions';

const initialState = {
  productData: {
    productName: '',
    description: '',
    category: '',
    subCategory: '',
    inventory: 0,
    price: 0,
  },
  productImages: [],
};

const uploadNewProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_NEW_PRODUCT:
      return {
        ...state,
        productData: action.payload,
      };
    case UPLOAD_PRODUCT_IMAGES:
      return {
        ...state,
        productImages: [...state.productImages, ...action.payload],
      };
    case RESET_UPLOADED_PRODUCT_IMAGES:
        // reset uploaded images state
        return {
          ...state,
          productImages: [],
        };
    default:
      return state;
  }
};

export default uploadNewProductReducer;