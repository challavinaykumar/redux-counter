// import { createSlice } from "@reduxjs/toolkit";

// const intial = {
   
//         value:0
    
// }

// const counterSlice = createSlice({
//     name:'count',
//     initialState: intial,
//     reducer:{
//         increment:(state) => {
//             state.value  +=1;
//         },
//         decrement: (state) => {
//             state.value  -=1;
//         },
//         incrementByValue : (state,action) => {
//             state.value  += action.payload;
//         },
//         decrementByValue : (state,action) => {
//             state.value  -= action.payload;
//         }
//     }
// })


// export const {increment,decrement,incrementByValue,decrementByValue} = counterSlice.actions;

// export default counterSlice.reducer




import { createSlice } from "@reduxjs/toolkit";



// const initialStateValues = {
//     value: 0,
//   }
  

export const counterSlice = createSlice({
    name:'count',
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state) => {
            state.value +=1
        },
        decrement:(state) => {
            state.value -=1
        },
        incrementByValue: (state,action) => {
            state.value +=action.payload
        },
       decrementByValue: (state,action) => {
            state.value -= action.payload
        }
    }
})
export const { increment, decrement, incrementByValue, decrementByValue } = counterSlice.actions

export default counterSlice.reducer
