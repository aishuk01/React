import React, { useState } from 'react'

function USeStateHook() {
const [aish,setAish]=useState("Aish");

  return (
    <>
    <h1>Hello {aish}</h1>
    <button onDoubleClick={()=>{setAish("Gaurav")}} >click</button>
    </>
 
  )
}

export default USeStateHook