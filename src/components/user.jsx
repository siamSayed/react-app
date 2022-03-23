import React from 'react'
import {Component} from 'react'




class User extends Component{



render(){
  return(
    <div className="main">
      
      <div className="card">
        <input type="text"placeholder='Change this name' className="changeByInput"onChange={this.props.inputChange}/>
        <div className="name">{this.props.name}</div>
        
        <button className="btn" onClick={this.props.delete}>Delete me</button>
      </div>
    </div>
  )
}



}


export default User