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
            status: 'Panding'
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
            state.orders = state.orders.filter(order => order.Status === 'Pending' || order.Status === 'Shipped' || order.Status === 'Delivered' || order.Status === 'Errors');
            return state;
        
        },
        pendingOrder: (state, action)=>{
            state.orders = state.orders.filter(order => order.Status === 'Pending');
            return state;

        },
        shippedOrder: (state, action)=>{
            state.orders = state.orders.filter(order => order.Status === 'Shipped');
            return state;

        },
        deliveredOrder: (state, action)=>{
            state.orders = state.orders.filter(order => order.Status === 'Delivered');
            return state;

        },
        errorOrder: (state, action)=>{
            state.orders = state.orders.filter(order => order.Status === 'Errors');
            return state;

        }      

    }
})

export const { pendingOrder, shippedOrder, deliveredOrder, errorOrder, allOrder } = orderSlice.actions;
export default orderSlice.reducer;  