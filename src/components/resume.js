import React, { Component } from 'react'

// const headerStyle = {
//     // color: '#F38888',
//     // fontSize: 50,
//     right: 50,
//     top: 0,
//     // flex: 1,
//     // float: 'right',
//     // flexDirection: 'row',
//     position: 'absolute',
//     // alignItems: 'center'
//     // flexWrap: 'wrap'
//     // backgroundColor: 'yellow'
// }

// const name = {
//     color: '#F38888',
//     fontSize: 50,
// }

// const code = {
//     // color: '#F38888',
//     fontSize: 20,
// }

export default class Resume extends Component {
    render() {
        const headerStyle = {
            // color: '#F38888',
            // fontSize: 50,
            right: 50,
            top: 0,
            // flex: 1,
            // float: 'right',
            // flexDirection: 'row',
            position: 'absolute',
            // alignItems: 'center'
            // flexWrap: 'wrap'
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
        return (
        <div style={headerStyle}>
            <div style={code}>resume</div>
            <div style={code}>resume</div>
            <div style={code}>resume</div>
        </div>
        
        )
        
    }
}