// import { createSlice } from "@reduxjs/toolkit";

// const orderSlice = createSlice({
//     name: "orders",
//     initialState: {
//         orders: [],
//         loadin: false,
//         order: null,
//     },
//     reducers: {
//         // actions
//         setOrders: (state, action) => {
//             state.orders= action.payload;
//         },
//         setLoadin: (state, action) => {
//             state.loadin = action.payload;
//         },
//         setOrder: (state, action) => {
//             state.order = action.payload;
//         }
//     }
// });

// export const { setOrders, setLoadin,setOrder } = orderSlice.actions;
// export default orderSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const orderSlice = createSlice({
//     name: "orders",
//     initialState: {
//         orders: [],
//         order: null, // Single order for details view
//         loading: false,
//         error: null,
//         updatingStatus: false
//     },
//     reducers: {
//         // actions
//         setOrders: (state, action) => {
//             state.orders = action.payload;
//         },
//         setOrder: (state, action) => {
//             state.order = action.payload;
//         },
//         setLoading: (state, action) => {
//             state.loading = action.payload;
//         },
//         setUpdatingStatus: (state, action) => {
//             state.updatingStatus = action.payload;
//         },
//         setError: (state, action) => {
//             state.error = action.payload;
//         },
//         updateOrderStatus: (state, action) => {
//             const { orderId, newStatus } = action.payload;
//             const orderIndex = state.orders.findIndex(order => order._id === orderId);
            
//             if (orderIndex !== -1) {
//                 state.orders[orderIndex].orderStatus = newStatus;
                
//                 // Also update the single order if it's the one being viewed
//                 if (state.order && state.order._id === orderId) {
//                     state.order.orderStatus = newStatus;
//                 }
//             }
//         },
//         clearOrder: (state) => {
//             state.order = null;
//         }
//     }
// });

// export const { 
//     setOrders, 
//     setOrder, 
//     setLoading, 
//     setUpdatingStatus, 
//     setError, 
//     updateOrderStatus, 
//     clearOrder 
// } = orderSlice.actions;
// export default orderSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        order: null,
        loading: false,
        error: null,
        updatingStatus: false
    },
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUpdatingStatus: (state, action) => {
            state.updatingStatus = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        updateOrderStatus: (state, action) => {
            const { orderId, newStatus } = action.payload;
            const orderIndex = state.orders.findIndex(order => order._id === orderId);
            
            if (orderIndex !== -1) {
                state.orders[orderIndex].orderStatus = newStatus;
                
                if (state.order && state.order._id === orderId) {
                    state.order.orderStatus = newStatus;
                }
            }
        },
        clearOrder: (state) => {
            state.order = null;
        }
    }
});

export const { 
    setOrders, 
    setOrder, 
    setLoading, 
    setUpdatingStatus, 
    setError, 
    updateOrderStatus, 
    clearOrder 
} = orderSlice.actions;
export default orderSlice.reducer;