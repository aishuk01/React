import React from 'react';
import { useState,useEffect } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      },[5]);
  return (
    <div>
        hi Aishwarya {count}
    </div>
  )
}

export default UseEffect