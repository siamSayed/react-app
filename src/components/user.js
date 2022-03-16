import React from 'react'
import { Component } from 'react'

// function User(props, state) {
//   state = {
//     persons: [
//       {
//         name: "nartuo",
//         surname: "uzumaki"
//       }, {
//         name: "luffy",
//         surname: "d. monkey"
//       }, {
//         name: "gara",
//         surname: "kazekage"
//       }
//     ]
//   }


  
//   }
//   return (
//     <div className="card">
//       <div className="name">{state.persons[0].name}</div>
//       <button className="btn" onClick={this.func}>click me</button>


//     </div>
//   )

// }



class User extends Component{
  state={
    name:[
      {
        nam:"siam"
      },{
        nam:"naruto"
      }
        
    ]
  }
  func=()=>{
   this.setState({
    name:[
      {
        nam:"asta"
      },{
        nam:"luffy"
      }
        
    ]
  })
  }

  render(){
    return(
      <div className="main">
        <div className="name">{this.state.name[0].nam}</div>

        <div className="name">{this.state.name[1].nam}</div>
        <button className="btn"onClick={this.func}>Click me</button>
      </div>
      
    )
  }
}


export default User