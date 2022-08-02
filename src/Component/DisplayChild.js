import React from 'react';
import {NumberContext} from '../App'

function DisplayChild() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer is {value}.</div>}
    </NumberContext.Consumer>
  )
}

export default DisplayChild