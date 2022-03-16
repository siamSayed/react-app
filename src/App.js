
import React from 'react';
import './App.css';
import User from './components/user';
import { Component } from 'react';



// function App() {
//   return (
//     <div className="App">
//       <div className="users">
//         user names
//       </div>
//       <User/>

//     </div>
//   )
// }

class App extends Component {
  
  render() {

    return (
      <div className="div">
        <User/>
      
      </div>
    )
  }

}
export default App;
