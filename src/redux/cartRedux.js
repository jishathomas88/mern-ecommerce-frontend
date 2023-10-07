import {createSlice} from '@reduxjs/toolkit'
const cartSlice=createSlice({
    name : "cart",
    initialState : {
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
    addProduct:(state,action)=>{
     state.products.push(action.payload);
     state.quantity+=action.payload.quantity;
     state.total+=action.payload.price * action.payload.quantity;
    },
    incrementProduct:(state,action)=>{
      state.products[state.products.findIndex((item)=>item._id===action.payload.id)].quantity+=action.payload.quantity  
      state.quantity+=action.payload.quantity;
     state.total+=action.payload.price * action.payload.quantity;
    },
    decrementProduct:(state,action)=>{
        state.products[state.products.findIndex((item)=>item._id===action.payload.id)].quantity=(action.payload.quantity-1)
        state.quantity-=1
        state.total-=(action.payload.price * 1)
    },
    removeProduct:(state,action)=>{
     state.products.splice(state.products.findIndex((item)=>item._id===action.payload.id),1)
     state.quantity=state.quantity-1
     state.total=state.total-action.payload.price
    }
   }
});

export const {addProduct,incrementProduct,decrementProduct,removeProduct}=cartSlice.actions
export default cartSlice.reducer