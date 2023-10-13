import React, {useState} from "react";

export const One = () =>
{
    const InitialCount =0;
   
    const [count,setCount] = useState(0)

    const IncrementCount = () => {
        setCount(count + 1); 
    }
    const DecrementCount =() => {
        setCount(count - 1);
    }
    return   (
        <>
        
        <h1>{count}</h1>
        
        <button onclick = {IncrementCount}>Increment</button>  
        <button onclick = {DecrementCount}>Decrement</button>
        <button onclick = {() => setCount(initialCount)}>Reset</button>
         </>      
    );
};
