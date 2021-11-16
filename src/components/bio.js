import React, { Component } from 'react'
import propic from '../img/propic.png'


const headerStyle = {
    // color: '#F38888',
    // fontSize: 50,
    left: 0,
    width: 400,
    flex: 1,
    // float: 'left'
    // flexDirection: row

    // backgroundColor: 'yellow'
}

const code = {
    // color: '#F38888',
    fontSize: 20,
}

const propics = {
    width: 150
}

export default class Bio extends Component {
    render() {
        return (
        <div style={headerStyle}>
            <img style={propics} src={propic} alt="judy when she just got her hair done"/>
            <p style={code}>I’m (she/her) an aspiring designer, programmer, and writer based in New York. </p>
            <p style={code}>Currently, I’m a senior studying computer science and design at Northwestern University. </p>
            <p style={code}>I admire and make little bits of technology that help us understand our creative potential and each other.
</p>
<p style={code}>I like making and discovering--and having fun along the way. Play and joy are so important to me.
</p>
        </div>
        
        )
        
    }
}