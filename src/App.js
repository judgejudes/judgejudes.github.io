// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './components/Header'
import Bio from './components/bio'
import Resume from './components/resume'
import Projects from './components/projects'
import data from './data/projectlist.json'

// var dataStr = JSON.stringify(data);
// var myProjects = JSON.parse(dataStr);

let colors = [
  'red',
  'yellow',
  'blue',
  'green',
  'purple',
  'orange',
  'pink',
]


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chaosColor: 'blue'
    }
  }

  hoverFunc = () => {
    console.log('hovering is working')
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === this.state.chaosColor)
      newColor = colors[Math.floor(Math.random() * colors.length)];
    console.log('new colo is ', newColor)
    this.setState({
      chaosColor: newColor,
    })
  }
  render() {
    return (
      <div className="App">

        <Header hoverFunc={this.hoverFunc} chaosColor={this.state.chaosColor}/>
        <div className="wrapper">
          <Bio />
          {/* <Resume/> */}
          <Projects items={data} />
        </div>


      </div>
    );
  }
}

export default App;
