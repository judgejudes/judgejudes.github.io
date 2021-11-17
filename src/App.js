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
      chaosColor: 'blue',
      chaosSize: '20',
      chaosMode: false
    }
  }

  hoverFunc = () => {
    console.log('hovering is working')
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === this.state.chaosColor)
      newColor = colors[Math.floor(Math.random() * colors.length)];
    let newSize = Math.floor(Math.random() * 200)
    if (newSize < 5) {
      newSize = 6
    }
    // console.log('new colo is ', newColor)

    this.setState({
      chaosColor: newColor,
      chaosSize: newSize,
    })
  }

  chaosModeOn = () => {
    // console.log('hey')

    let newChaos
    if (this.state.chaosMode == false) {
      newChaos = true
    }
    else { newChaos = false }
    console.log('new chaos', newChaos)


    this.setState({
      chaosMode: newChaos
    })

  }
  render() {
    return (
      <div className="App">

        <Header hoverFunc={this.hoverFunc}
          chaosModeOn={this.chaosModeOn}
          chaosColor={this.state.chaosColor}
          chaosSize={this.state.chaosSize} />
        <div className="wrapper">
          <Bio chaos={this.state.chaosMode} />
          {/* <Resume/> */}
          <Projects items={data} />
        </div>


      </div>
    );
  }
}

export default App;
