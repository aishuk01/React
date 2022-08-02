import React from 'react'

function HOC(OriginalComponent) {
    // class NewComponent extends React.Component {
    //     render(){
    //         return <OriginalComponent name="GeeksforGeeks"  /> 
    // } 
    function NewComponent() {
        //return (
          
            return ( <OriginalComponent name="GeeksforGeeks"  /> )
          
        //)
      //}
      
    }
    return NewComponent

}

export default HOC