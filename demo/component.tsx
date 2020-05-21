import React, { useState } from 'react'
import './App.css'
import ButtonPanel from './ButtonPanel'
import Display from './Display'

class App extends React.Component {
  componentDidMount() {
    // Do something fancy
  }

  render() {
    const [total, setTotal] = useState(0)

    return (
      <div className="component-app">
        Tacos
        <Display value={total} />
        <ButtonPanel clickHandler={setTotal} />
      </div>
    )
  }
}
export default App
