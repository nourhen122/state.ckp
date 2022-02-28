import React, { Component } from 'react'


export default class App extends Component {
  state  =
  {
    fullName : 'Nourhén Abdelhak',
    bio : 'hjdghdih',
    imgScr : 'logo192.png',
    profession : 'gdgezydgkehk',
    showState : true ,
    counter : 0,
    tasks : [
      {id:Math.random() , action : 'wake up' ,isDone:true}
    ]
  }
  condition = () => {
    this.setState ( {showState: !this.state.showState } )
  }
  increment = () => {
    this.setState({counter:this.state.counter +1})
  }
 autoCount = () =>{
   setInterval(() => {
     this.increment()
   }, 1000);
 }
 componentDidMount( ){
   this.autoCount()
 }

  render() {
    return (
      <div>
        <h2>counter :{   this.state.counter      } </h2>
         <button onClick={()=>this.condition()} > show person's profil  </button>
        {
          this.state.showState && 
        
        <div >
          <h1> {this.state.fullName}  </h1>
          <h2> {this.state.bio}  </h2>
          <h2> {this.state.imgScr}  </h2>
          <h2>  {this.state.profession} </h2>
          
        </div>
            }
      </div>
    )
  }
}

