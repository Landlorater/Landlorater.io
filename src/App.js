import React, {Component} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{'review':'no data fetched'}]
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3100/api/reviews`).then(res => {
      const reviews = res.data;
      console.log("res data", res.data)
      this.setState({data: reviews});
      console.log("res data2", this.state.data)
    })
    console.log("res data3", this.state.data)
    // return <div>{this.state.reviews}</div>
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      {
        this.state.data.map(function(d, idx) {
          return (<li key={idx}>{d.review}</li>)
        })
      }
    </div>);
  }
}

export default App;
