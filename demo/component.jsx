import React, { Component } from 'react'
import calculate from '../logic/calculate'

import ButtonPanel from './ButtonPanel'
import Display from './Display'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0
      data: [],
      next: null,
    }
  }

  handleClick = (buttonName = '') => {
    this.setState(calculate(this.state, buttonName))
  }

  render() {
    return (
      <div className="component-app">
        Tacos
        <Display value={this.state.next || this.state.total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}
export default App
