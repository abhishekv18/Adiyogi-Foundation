import { createSlice } from "@reduxjs/toolkit";







const blogSlice= createSlice({
    name:"blog",
    initialState:{
        loadin:false,
       
    
         allBlogs:[],
         blog:[]
        
       
},

reducers:{
    // actions
    setLoadin:(state, action) => {
        state.loadin = action.payload;
    },
  
    setAllBlogs:(state, action) => {
        state.allBlogs = action.payload;
    },
    setBlog:(state, action) => {
        state.blog = action.payload;
    },
},

}
);


export const {setLoadin,setAllBlogs,setBlog} = blogSlice.actions;
export default blogSlice.reducer;