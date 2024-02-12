// import { SET_CARTS, REMOVE_ITEM_FROM_CART, ADD_TO_CART, UPDATE_CART_QUANTITY } from "../actions";

// const initialState = {
//     cart: {
//       quantity: 1 // Set your initial quantity value here
//     }
// };

// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_CARTS:
//             return {
//                 ...state,
//                 carts: action.payload,
//             };
//         case ADD_TO_CART:
//             const existingItemIndex = state.cart.findIndex(item => item.product.id === action.payload.product.id);

//             if (existingItemIndex !== -1) {
//                 // Item already exists in cart, update its quantity
//                 const updatedCarts = [...state.carts];
//                 updatedCarts[existingItemIndex].number_of_product += action.payload.quantity;
//                 return {
//                     ...state,
//                     carts: updatedCarts,
//                 };
//             } else {
//                 // Item doesn't exist in cart, add it
//                 return {
//                     ...state,
//                     carts: [...state.carts, action.payload],
//                 };
//             }


//         case REMOVE_ITEM_FROM_CART:
//             return {
//                 ...state,
//                 carts: state.carts.filter((item, index) => index !== action.payload),
//             };
//         case UPDATE_CART_QUANTITY:
//             return {
//                 ...state,
//                 carts: state.carts.map((item) => {
//                     if (item.product.id === action.payload.id) { // <-- Corrected this line
//                         return {
//                             ...item,
//                             number_of_product: action.payload.quantity,
//                         };
//                     }
//                     return item;
//                 }),
//             };
//         default:
//             return state;
//     }
// };


// export default cartReducer;
