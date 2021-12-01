// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './components/Header'
import Bio from './components/bio'
import Resume from './components/resume'
import Projects from './components/projects'
import Animation from './components/animation'

import ReactDOM from 'react-dom';

import data from './data/projectlist.json'

import SimpleReactLightbox from 'simple-react-lightbox'

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
      chaosMode: false,
      bioSize: '20',
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

  bioSizeFunc = () => {
    console.log('bio size changing', this.props.bioSize)
    // let newColor = colors[Math.floor(Math.random() * colors.length)];
    // while (newColor === this.state.chaosColor)
    // newColor = colors[Math.floor(Math.random() * colors.length)];
    let newSize = Math.floor(Math.random() * 80)
    // console.log('new colo is ', newColor)
    console.log('bio size here', newSize)
    this.setState({
      // chaosColor: newColor,
      bioSize: newSize,
    })
    console.log('bio size changing', this.props.bioSize)
  }

  chaosModeOff = () => {
    let newChaos
    newChaos = false
    this.setState({
      chaosMode: newChaos
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
      <SimpleReactLightbox>

        <div className="App">

          <Animation chaos={this.state.chaosMode}/>
          <Header hoverFunc={this.hoverFunc}
            chaosModeOff={this.chaosModeOff}
            chaosModeOn={this.chaosModeOn}
            chaosColor={this.state.chaosColor}
            chaosSize={this.state.chaosSize} />
          <div className="wrapper">
            <Bio chaos={this.state.chaosMode}
              chaosSize={this.state.bioSize}
              changeBioSize={this.bioSizeFunc} />
            {/* <Resume/> */}
            <Projects items={data} />
          </div>
          {/* </Animation> */}


        </div>
      </SimpleReactLightbox>

    );
  }
}

export default App;
