import React, { Component } from 'react'

const headerStyle = {
    // color: '#F38888',
    // fontSize: 50,
    left: 0
    // backgroundColor: 'yellow'
}

const name = {
    color: '#F38888',
    fontSize: 70,
    margin: 10
}

const code = {
    // color: '#F38888',
    margin: 10,
    fontSize: 20,
}

export default class Header extends Component {
    render() {
        return (
            <div style={headerStyle} className="header">
                <a href="#" style={{ textDecoration: 'none' }}>
                    <div style={name}
                        onClick={this.props.chaosModeOff}>judy suhjung lee</div>
                </a>

                <div style={code}>code ∩ culture (and finding
                    <span className="order"> order </span>
                    in
                    <a href="#" style={{ textDecoration: 'none' }}>
                        <span style={{ color: this.props.chaosColor, fontSize: this.props.chaosSize }}
                            onMouseOver={this.props.hoverFunc}
                            onClick={this.props.chaosModeOn}> chaos</span>)</a></div>
            </div>

        )

    }
}