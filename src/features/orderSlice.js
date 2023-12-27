import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [
        {
            id: 1,            
            orderNumber: 34567899080,
            shop : 'OAK Sh...',
            orderDate: '7 Jul 23 | 14:00',
            updatedDate: '7 Jul 23 | 14:00',
            paymentMethod: 'Prepaid',
            price: 150,
            deliveryMethod: 'NY Delivery Service',
            status: 'Shipped'
        },
        {
            id: 2,            
            orderNumber: 34567899080,
            shop : 'OAK Sh...',
            orderDate: '7 Jul 23 | 14:00',
            updatedDate: '7 Jul 23 | 14:00',
            paymentMethod: 'Prepaid',
            price: 150,
            deliveryMethod: 'NY Delivery Service',
            status: 'Pending'
        },
        {
            id: 3,            
            orderNumber: 34567899080,
            shop : 'OAK Sh...',
            orderDate: '7 Jul 23 | 14:00',
            updatedDate: '7 Jul 23 | 14:00',
            paymentMethod: 'Prepaid',
            price: 150,
            deliveryMethod: 'NY Delivery Service',
            status: 'Delivered'
        },
        {
            id: 4,            
            orderNumber: 34567899080,
            shop : 'OAK Sh...',
            orderDate: '7 Jul 23 | 14:00',
            updatedDate: '7 Jul 23 | 14:00',
            paymentMethod: 'Prepaid',
            price: 150,
            deliveryMethod: 'NY Delivery Service',
            status: 'Errors'
        },
        
    ]
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        allOrder: (state, action)=>{
            state.orders = state.orders.filter(order => order.status === 'Pending' || order.status === 'Shipped' || order.status === 'Delivered' || order.status === 'Errors');
            return state;
        
        },
        pendingOrder: (state, action)=>{
            state.orders = state.orders.filter(order => order.status === 'Pending');
            return state;

        },
        shippedOrder: (state, action)=>{
            state.orders = state.orders.filter(order => order.status === 'Shipped');
            return state;

        },
        deliveredOrder: (state, action)=>{
            state.orders = state.orders.filter(order => order.status === 'Delivered');
            return state;

        },
        errorOrder: (state, action)=>{
            state.orders = state.orders.filter(order => order.status === 'Errors');
            return state;

        }      

    }
});

export const { pendingOrder, shippedOrder, deliveredOrder, errorOrder, allOrder } = orderSlice.actions;
export default orderSlice.reducer;  