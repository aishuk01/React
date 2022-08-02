// import React, { Component } from 'react'
// import Header from './Component/Header'
// import TodoItem from './Component/TodoItem'
// import Todos from './Component/Todos'
// import UseState from './Component/UseState'
// import ReactDOM from "react-dom";
// import UseEffect from './Component/UseEffect'
// import './style.scss'
// import Display from './Component/Display'
// import HOC from './Component/HOC'
// import EnhancedComponent from './Component/HOC'
// import DisplayChild from './Component/DisplayChild'
// import axios from 'axios'

// export const NumberContext = React.createContext();
// class App extends Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //     items: [],
//     //     DataisLoaded: false
//     // };
//     this.state = {
//       persons: []
//     }
// }

// // componentDidMount() {
// //   fetch(
// // "https://jsonplaceholder.typicode.com/users")
// //       .then((res) => res.json())
// //       .then((json) => {
// //           this.setState({
// //               items: json,
// //               DataisLoaded: true
// //           });
// //       })
// // }

// componentDidMount() {
//   axios.get(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => {
//       const persons = res.data;
//       this.setState({ persons });
//     })
// }
//   render() {
//     // return (
//     //   //  <>
//     //   //     <h1>{this.props.name}</h1> 
//     //   //  {/* <Header />
//     //   //  <Todos /> 
//     //   //  <UseState />
//     //   //  <UseEffect /> */}
//     //   //  </>
      
//     //   <NumberContext.Provider value={42}>
//     //   <div>
//     //     <Display />
//     //   </div>
//     // </NumberContext.Provider>
//     // )


//     // const { DataisLoaded, items } = this.state;
//     // if (!DataisLoaded) return <div>
//     //     <h1> Pleses wait some time.... </h1> </div> ;

//     return (
//     // <div className = "App">
//     //     <h1> Fetch data from an api in react </h1>  {
//     //         items.map((item) => ( 
//     //         <ol key = { item.id } >
//     //             User_Name: { item.username }, 
//     //             Full_Name: { item.name }, 
//     //             User_Email: { item.email } 
//     //             </ol>
//     //         ))
//     //     }
//     // </div>
//     <ul>
//     {
//       this.state.persons
//         .map(person =>
//           <li key={person.id}>{person.name}</li>
//         )
//     }
//   </ul>
// );
//   }
// }

//  export default App
// //export default HOC(App);

import React, { Component } from 'react';
import { useReducer } from 'react';
import Header from './Component/Header';
import Display from './Component/Display';
import DisplayChild from './Component/DisplayChild';
import WithoutMemo from './Component/WithoutMemo';
import WithUseMemo from './WithUseMemo';
import WithoutCallback from './Component/WithoutCallback';
import WithCallback from './Component/WithCallback';
// import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';

import USeStateHook from './Component/USeStateHook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const NumberContext = React.createContext();



function reducer(state, action) {
  switch (action.type) {
    case 'ADD': return { count: state.count + 1 };
    case 'SUB': return { count: state.count - 1 };
    default: return state;
  }
}
function App() {
  
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'ADD'})}>Add</button>
      <button onClick={() => dispatch({type: 'SUB'})}>Substract</button>

      <WithoutMemo />
      <WithUseMemo />
      <USeStateHook/>
      {/* <WithoutCallback/> */}

     {/* <WithCallback /> */}
     <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
     </Router>
    </>
  );
  
}

export default App

