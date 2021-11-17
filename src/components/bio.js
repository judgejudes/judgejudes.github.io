import React, { Component } from 'react'
import "../App.css"
import propic from '../img/propic.png'
import winterJudy from '../img/winter-judy.png'
import { SocialIcon } from 'react-social-icons'


const headerStyle = {
    // color: '#F38888',
    // fontSize: 50,
    left: 0,
    width: 400,
    overflowY: 'scroll',
    height: 550,
    marginTop: 10,
    // fontFamily: 'Lucida Console', monaco, monospace
    // flexGrow: .1,
    // flex: 1,
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
        // if (this.props.chaosMode == false) {
        //     console.log('chaos mode for bio')
        // }
        console.log('hi', this.props.chaos)
        const chaos = this.props.chaos

        return (
            <div style={headerStyle} className="bio">
                <div className="bio-flex">
                    <img style={propics} src={chaos ? winterJudy : propic} alt="judy when she just got her hair done" />
                    <div>
                        <p style={code}>I’m (she/her) an aspiring designer, programmer, and writer based in New York. </p>
                        <p style={code}>Currently, I’m a senior studying {chaos ? '🤖 beep bop 🤖' : 'computer science'} and design at Northwestern University. </p>
                    </div>
                </div>
                <p style={code}>I admire and make little bits of technology that help us understand our creative potential and each other.
                </p>
                <p style={code}>I like making and discovering--and having fun along the way. Play and joy are so important to me. <span style={{fontSize:17}}>(scroll down for fun things!)</span>
                </p>

                <h3 style={{textAlign: 'center', color: 'red'}}><a href="https://www.w3schools.com" target="_blank">resume</a></h3>
                {/* <p style={code}>(scroll for the fun things below!) */}
                {/* </p> */}
                {/* have to add 'scroll for fun things below' */}

                {/* <h2>Contact</h2> */}
                {/* <h3></h3> */}
                {/* <h3><a href="https://www.w3schools.com">are.na</a></h3> */}
                {/* <h3><a href="https://www.w3schools.com">twitter</a></h3> */}
                <div className="links-flex">
                <SocialIcon url="judysuhjunglee@gmail.com" network="gmail"/>
                <SocialIcon url="https://www.are.na/judy-lee" />
                <SocialIcon url="https://github.com/judgejudes" />
                <SocialIcon network="twitter" url="https://twitter.com/judge_judes" bgColor="#ff5a01" />
                <SocialIcon url="https://www.linkedin.com/in/judy-lee-3a91b3199/" />
                </div>
                {/* <h3><a href="https://www.w3schools.com">linkedin</a></h3> */}

                <p style={{textAlign: 'center', fontSize: '10', fontStyle: 'italic'}}>judysuhjunglee [at] gmail [dot] com</p>
                <p className='fun-stuff'>here are some other fun things:</p>

                {/* https://judyontheinter.com/art */}
                {/* https://www.youtube.com/playlist?list=PL6EvsThciFxPyHfby4hFPCSXOoyUBu2MC */}
                {/* https://editor.p5js.org/judgejudes/sketches */}
                <p className='fun-stuff'><a href="https://judyontheinter.com/art">drawings</a></p>
                <p className='fun-stuff'><a href="https://www.youtube.com/playlist?list=PL6EvsThciFxPyHfby4hFPCSXOoyUBu2MC">videos i love</a></p>
                <p className='fun-stuff'><a href="https://editor.p5js.org/judgejudes/sketches">p5.js sketches</a></p>
                <p className='fun-stuff'><a href="https://editor.p5js.org/judgejudes/sketches">a Picbreeder explainer zine</a></p>


            </div>

        )

    }
}