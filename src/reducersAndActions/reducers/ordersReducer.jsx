import * as actionTypes from '../actions';

const initialState = {
  orders: [
    {
      id: 1, 
      orderNumber: 34567899080,
      shop: "OAK Sh...",
      orderDate: "7 Jul 23 | 14:00",
      updateDate: "7 Jul 23 | 14:00",
      paymentMethod:"Prepaid",
      price: 150,
      deliveryMethod: "NY Delivery Service",
      status: 'Shipped'
    },
    {
      id: 2, 
      orderNumber: 34567899080,
      shop: "OAK Sh...",
      orderDate: "7 Jul 23 | 14:00",
      updateDate: "7 Jul 23 | 14:00",
      paymentMethod:"Prepaid",
      price: 150,
      deliveryMethod: "NY Delivery Service",
      status: 'Pending'
    },
    {
      id: 3, 
      orderNumber: 34567899080,
      shop: "OAK Sh...",
      orderDate: "7 Jul 23 | 14:00",
      updateDate: "7 Jul 23 | 14:00",
      paymentMethod:"Prepaid",
      price: 150,
      deliveryMethod: "NY Delivery Service",
      status: 'Errors'
    },
    {
      id: 4, 
      orderNumber: 34567899080,
      shop: "OAK Sh...",
      orderDate: "7 Jul 23 | 14:00",
      updateDate: "7 Jul 23 | 14:00",
      paymentMethod:"Prepaid",
      price: 150,
      deliveryMethod: "NY Delivery Service",
      status: 'Delivered'
    },
  ],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_ORDER:
      return {
        ...state,
        orders: state.orders.filter(
          (order) =>
            order.status === 'Pending' ||
            order.status === 'Shipped' ||
            order.status === 'Delivered' ||
            order.status === 'Errors'
        ),
      };

    case actionTypes.PENDING_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.status === 'Pending'),
      };

    case actionTypes.SHIPPED_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.status === 'Shipped'),
      };

    case actionTypes.DELIVERED_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.status === 'Delivered'),
      };

    case actionTypes.ERROR_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.status === 'Errors'),
      };

    default:
      return state;
  }
};

export default ordersReducer;
