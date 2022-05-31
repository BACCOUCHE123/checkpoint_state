import React, { Component } from 'react'

class Lifecycle extends Component {
constructor(props) {
  super(props)

  this.state = {
     name:'marwa'
  }
  console.log('Lifecycle constructeur')
}
static getDrivedStateFromProps(props,state){
console.log('Lifecycle getDrivedStateFromProps')
return null
}
componentDidMount(){
    console.log('Lifecycle componentDidMount')
}

render() {
    console.log('Lifecycle render')
    return (
    <div>
        Lifecycle
    </div>
    )
}
}

export default Lifecycle
