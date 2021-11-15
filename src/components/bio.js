import React, { Component } from 'react'

const headerStyle = {
    // color: '#F38888',
    // fontSize: 50,
    left: 0,
    width: 500
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

export default class Bio extends Component {
    render() {
        return (
        <div style={headerStyle}>
            
            <p style={code}>I’m (she/her) an aspiring designer, programmer, and writer based in New York. </p>
        </div>
        
        )
        
    }
}