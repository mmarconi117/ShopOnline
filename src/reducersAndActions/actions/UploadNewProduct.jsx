import { UPLOAD_NEW_PRODUCT, UPLOAD_PRODUCT_IMAGES, RESET_UPLOADED_PRODUCT_IMAGES } from '.';


export const uploadNewProduct = (productData) => ({
  type: UPLOAD_NEW_PRODUCT,
  payload: productData,
});
export const uploadProductImages = (productImages) => ({
  type: UPLOAD_PRODUCT_IMAGES,
  payload: productImages,
});
export const resetUploadedProductImages = () => ({
  type: RESET_UPLOADED_PRODUCT_IMAGES,
});