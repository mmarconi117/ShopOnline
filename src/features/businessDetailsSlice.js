import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    businessDetails: [],
    isVerified: false,
}

export const businessDetailsSlice = createSlice({
    name: 'businessDetail',
    initialState,
    reducers: {
        businessDetail: (state, action)=>{
            state.isVerified = true;
            state.businessDetails = action.payload;        
        }  

    }
})

export const { businessDetail } = businessDetailsSlice.actions;
export default businessDetailsSlice.reducer; 

