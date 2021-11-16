import Project from './project'
import '../App.css';

import React, { Component } from 'react'

const headerStyle = {
    // color: '#F38888',
    // fontSize: 50,
    left: 800
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

export default class Projects extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        const dataList = this.props.items.projects.map((project) => (
			<div><Project key={project.id} 
							projectTitle={project.title}
							projectInfo={project.info} 
							projectLink={project.url}
							projectImg={project.image}
							projectWriteup={project.writeup}
							></Project></div>
            // <div>{project.info}</div>
			)
		);
        console.log('hello', dataList)
        return (
            // <div style={{}}></div>
            // console.log(dataList)
            
            dataList
            // null
            // <div>hey there {this.props.data.projects[0].title}</div>
            // console.log(this.props.data)
            // null
            // <Project></Project>
            // <Project></Project>

        )

    }
}