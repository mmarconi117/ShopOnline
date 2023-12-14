import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProductData = createAsyncThunk("fetchProductData", async(args, {rejectWithValue})=>{
    
    try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const result = await response.json();
        return result;

    } catch (error) {
        // return rejectWithValue(error);
        console.log(`error of API data ${error}`);
    }
});




// export const initialState = {
    
// }

export const productDataSlice = createSlice({
    name: 'productData',
    initialState: {
        productData: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchProductData.fulfilled, (state, action) =>{
            state.loading = false;
            state.productData = action.payload;
        })
    }
});



export default productDataSlice.reducer;