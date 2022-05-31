import React, { Component } from 'react'
import Lifecycle from './Lifecycle'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      FullName:"Baccouche Marwa",
      Bio : "no thing "    ,
      Profession: " etudiente dans GOMYCODE",
      imgSrc:'https://th.bing.com/th/id/R.5cf85e716b2c9003af8665621850ff91?rik=8x0g4NMi8EXbQw&pid=ImgRaw&r=0',
      show :false 

    }
  }
  show=()=>{
    this.setState({ show:!this.state.show })
  }
  render() {
    return (
      <div>
      {this.state.show ? <h1>   hello my name is {this.state.FullName} and i am {this.state.Profession} ,Bio {this.state.Bio} < img src={this.state.imgSrc} alt=" " /></h1>   :null} 
    <button onClick={this.show}>click me</button>
    <Lifecycle/>
      </div>
    )
  }
}
