import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {increment,decrement,incrementByValue,decrementByValue} from './createSlice';

const App = () => {

const data= useSelector((state)=> state.count.value);
const dispatch = useDispatch()

  return (
    <div>
      
      <h1>Count :{data} </h1>

      <button onClick={() => dispatch(increment())} >increment</button>
      <button onClick = {() => dispatch(decrement())} >Decrement</button>
      <button onClick = {() => dispatch(incrementByValue(parseInt(prompt(''))))} >IncrementByValue</button>
      <button onClick = {() => dispatch(decrementByValue(5))} >DecrementByValue</button>




    </div>
  );
};

export default App;