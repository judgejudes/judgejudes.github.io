import React, { Component } from 'react'
import '../App.css';
// import '../img/bu'

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

    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     console.log({this.props})
    // }

    render() {

        // console.log('what', this.props.projectTitle)
        return (
            <div className="project">
                <h3 className='proj-title'>{this.props.projectTitle}</h3>
                <span>{this.props.projectInfo}</span>
                <div className="project-flex">
                    <p>{this.props.projectWriteup}</p>
                    <img src={require(`../data/${this.props.projectImg}`).default}
                        alt={this.props.projectTitle}
                        className="projectImg"
                    />
                </div>

            </div>
            // null

        )

    }
}