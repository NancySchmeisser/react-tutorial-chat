import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AppState {
  history: string [],
  currentText: string,
}


class App extends Component <{}, AppState>{
  constructor (props:{}){
    super (props)

    this.state={
      history: [],
      currentText: "",
    }
  }
  handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({currentText: event.target.value})
  }

  handleOnClick = (event:React.MouseEvent) => {
    this.setState({
      currentText:"",
      history: this.state.history .concat(this.state.currentText)
    })
  }

  render() {
    return (
      <div className="App">
 
        <div className="row">
          <div className="col-10">
            <input className="form-control" value={this.state.currentText} onChange= {this.handleOnChange} />
          </div>
          <div className="col">
          <button className="form-control" onClick= {this.handleOnClick}>Send</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="form-control">
            {this.state.history.map(value=><li>{value}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
