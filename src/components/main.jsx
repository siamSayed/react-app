import React from "react";
import { Component } from "react";
import User from "./user"
import name from "../assets/data"

class Main extends Component{
    state = {

        name:name,
        display: true
    
      }
      inputChange=(e,i)=>{
        let name=this.state.name[i];
        name.name=e.target.value;
        let names=this.state.name
        names[i]=name
        this.setState({name:names})
      }
      delete=(i)=>{
        let name=this.state.name
        name.splice(i,1)
        this.setState({name:name})
      }
      toggleIt=()=>{
        
        this.setState({display:!this.state.display})
      }
      render(){
        
          let map=this.state.name.map((a,i)=>{
            return (<User
            inputChange={(e)=>this.inputChange(e,i)}
            name={a.name}
            delete={()=>this.delete(i)}
            key={a.id}
            
            
      
            />)
          })
        
        
        
        return(
        <div className="App">
          <div className="div">
            <button className="toggle btn" onClick={this.toggleIt}>{this.state.display ? "delete all":"retrive data"}</button>
            <div className="map">
            {this.state.display ? map : !this.state.display}
            </div>
          </div>
    
          </div>
        )
      }
}


export default Main