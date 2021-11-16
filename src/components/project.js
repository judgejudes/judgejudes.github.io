import React, { Component } from 'react'
import '../App.css';

const headerStyle = {
    // color: '#F38888',
    // fontSize: 50,
    // marginLeft: 800,
    // top: 0,
    // position: 'absolute'
    // backgroundColor: 'yellow'
}

const name = {
    color: '#F38888',
    fontSize: 50,
}

const code = {
    // color: '#F38888',
    fontSize: 20,
}

export default class Project extends Component {

    constructor(props){
        super(props);
    }
    // componentDidMount() {
    //     console.log({this.props})
    // }

    render() 
    {

        // console.log('what', this.props.projectTitle)
        return (
        <div style={headerStyle}>
        <p>{this.props.projectTitle}</p>
      
        </div>
        // null
        
        )
        
    }
}