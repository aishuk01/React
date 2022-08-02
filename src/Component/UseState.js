import React from 'react'
import { useState } from "react";

function UseState() {
    const [color, setColor] = useState("");
  return (
    <div>{color}</div>
  )
}

export default UseState