import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { submit } from './features/formSlice';


export default function Form() {
   const[name,setName]=useState("");
   const[age,setAge]=useState(0);

   const dispatch = useDispatch()

   const handleSubmit=()=>{
    dispatch(submit({name,age}));
   }

  return (
    <div>
        <input type='text' placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' placeholder='enter your age' value={age} onChange={(e)=>setAge(Number(e.target.value))}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

