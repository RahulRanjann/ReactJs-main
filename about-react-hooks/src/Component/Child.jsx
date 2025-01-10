import React from 'react'

export default function Child({message, setInitialValue}) {
    const setParentData = () =>{
        setInitialValue (" Hello, i'm child")
    }
  return (
    <div>
     <p>{message}</p>
    <button onClick={setParentData}>send to parent</button>
    </div>
  )
}
