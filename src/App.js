import {Route, BrowserRouter} from 'react-router-dom'
import Error from './Error'
import './App.css';

import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      path: this.props.view, args: this.props.props
    }
  }

  render() {
    return (
      <BrowserRouter>
      <Route path={this.state.path} render={() => {
        let Story = null
        try{
          Story = require(
            "./organs" + this.state.path + "/index"
          ).default
        }catch(e){ Story = Error }
        return <Story props={this.props.args}/>
      }}/>
      </BrowserRouter>
    )
  }
}

export default App;