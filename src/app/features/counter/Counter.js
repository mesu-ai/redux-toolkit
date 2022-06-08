import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from './counterSlice';

const Counter = () => {
    const {count}= useSelector(state=>state.counter);

    const dispatch= useDispatch();
    return (
        <div>
            <p>counter app</p>
            <p>{count}</p>
            <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>

            </div>
            
            
        </div>
    );
};

export default Counter;