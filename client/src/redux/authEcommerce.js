import { createSlice } from "@reduxjs/toolkit";






const authEcommerce= createSlice({
    name:"ecommerce",
    initialState:{
        l:false,
        product:null,
        products:[]
        
       
},

reducers:{
    // actions
    setL:(state, action) => {
        state.l = action.payload;
    },
    setProduct:(state, action) => {
        state.product = action.payload;
    },
    setProducts:(state, action) => {
        state.products = action.payload;
    },
   
},

}
);


export const {setL, setProduct,setProducts} = authEcommerce.actions;
export default authEcommerce.reducer;