import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [initialValue, setInitialValue] = useState("initialValue")

    // const getChildData = (value)=>{
    //     setInitialValue(value)
    // }
        
  return (
    <div>
        <p>{initialValue}</p>
       <Child message="hello i'm parent" setInitialValue={setInitialValue} />
    </div>
  )
}
