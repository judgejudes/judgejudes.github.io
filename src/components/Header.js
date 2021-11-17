import React, { Component } from 'react'

const headerStyle = {
    // color: '#F38888',
    // fontSize: 50,
    left: 0
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

export default class Header extends Component {
    render() {
        return (
        <div style={headerStyle} className="header">
        <div style={name}>judy suhjung lee</div>
            
            <div style={code}>code XX culture (and finding order in <span style={{color: this.props.chaosColor}} onMouseOver={this.props.hoverFunc}>chaos</span>)</div>
        </div>
        
        )
        
    }
}