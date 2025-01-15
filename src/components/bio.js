import React, { Component } from 'react'
import "../App.css"
import propic from '../img/propic.png'
import winterJudy from '../img/winter-judy.png'
import { SocialIcon } from 'react-social-icons'

import ImageGallery from 'react-image-gallery';
import { SRLWrapper } from "simple-react-lightbox";


const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        //   thumbnail: 'https://picsum.photos/id/1018/250/150/',
        originalHeight: 80,
        originalWidth: 80
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
        originalHeight: 100,
        originalWidth: 80
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
        originalHeight: 100,
        originalWidth: 80
    },
];


const headerStyle = {
    left: 0,
    width: 400,
    overflowY: 'scroll',
    height: 600,
    marginTop: 10,
}

const code = {
    // color: '#F38888',
    fontSize: 20,
}

const testChaosSize = {
    // color: '#F38888',
    fontSize: Math.floor(Math.random() * 80),
}

let hoverFunc = () => {
    // color: '#F38888',
    let newSize = Math.floor(Math.random() * 200)
    // TODO: want this number to keep changing every 4 seconds, or maybe even less?
    this.setState({
        chaosSize: newSize,
    })
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
                        <p style={{ fontSize: chaos ? this.props.chaosSize : 20 }} onMouseOver={this.props.changeBioSize}>I’m (she/her) an aspiring designer, software engineer, and writer based in New York. </p>
                        <p style={{ fontSize: chaos ? this.props.chaosSize : 20 }}>I studied {chaos ? '🤖 beep bop 🤖' : 'computer science'} and design at <a href="https://www.northwestern.edu/" className="a-tag"> Northwestern University</a>. </p>
                    </div>
                </div>
                <p style={{ fontSize: chaos ? this.props.chaosSize : 20 }} onMouseOver={this.props.changeBioSize}>I admire and make little bits of technology or systems (both new and old) that help us understand our  💖creative potential💖 and each other.
                </p>
                <p style={{ fontSize: chaos ? this.props.chaosSize : 20 }}>I like making and discovering--and having fun along the way. Play and joy are so important to me. 
                {/* <span style={{ fontSize: 17 }}>(scroll down for fun things!)</span> */}
                </p>

                <h3 style={{ textAlign: 'center', color: 'red' }}><a href="https://drive.google.com/file/d/1yjs7AVnkuofjlx9elvaurLLateSjUWbI/view" style={{ textDecoration: 'underline wavy red', color: 'red' }}>resume</a></h3>
                <p className='fun-stuff'>here are some other fun things:</p>

                <p className='fun-stuff'><a className="fun-links" href="https://judyontheinter.com/art">drawings</a></p>
                <SRLWrapper style={{height: 40, width: 20}}>
                    <a className="a-img">
                        <img className="art-img" src={require('../img/squint.jpg')} alt="sketches!" />
                    </a>
                    <a className="a-img">
                        <img className="art-img" src={require('../img/tree.jpg')} alt="spooky tree" />
                    </a>
                    <a className="a-img">
                        <img className="art-img" src={require('../img/sketch2.JPG')} alt="a doodle from design class" />
                    </a>
                    <a className="a-img">
                        <img className="art-img" src={require('../img/frog.png')} alt="a frog that looks like a beignet" />
                    </a>
                    {/* <a className="a-img">
                        <img className="art-img" src={require('../img/roo.png')} alt="rooster" />
                    </a> */}
                
                    {/* <a className="a-img">
                        <img className="art-img" src={require('../img/rooster.png').default} alt="Umbrella" />
                    </a> */}
                </SRLWrapper>


                {/* <ImageGallery style={{ width: 20 }} items={images} /> */}

                {/* <p className='fun-stuff'><a className="fun-links" href="https://www.youtube.com/playlist?list=PL6EvsThciFxPyHfby4hFPCSXOoyUBu2MC">videos i love</a></p> */}
                {/* <p className='fun-stuff'><a className="fun-links" href="https://editor.p5js.org/judgejudes/sketches">p5.js sketches</a></p> */}
                {/* <p className='fun-stuff'><a className="fun-links" href="https://drive.google.com/file/d/1RX-L2koUsapYN7TsMlJZkQa6SotQbRTv/view?usp=sharing">a Picbreeder explainer zine</a></p> */}

                <div className="links-flex">
                    <SocialIcon url="judysuhjunglee@gmail.com" network="gmail" />
                    <SocialIcon url="https://www.are.na/judy-lee" />
                    <SocialIcon url="https://github.com/judgejudes" />
                    {/* <SocialIcon network="twitter" url="https://twitter.com/judge_judes" bgColor="#ff5a01" /> */}
                    <SocialIcon url="https://www.linkedin.com/in/judy-lee-3a91b3199/" />
                </div>
                {/* <h3><a href="https://www.w3schools.com">linkedin</a></h3> */}
<div>
                <p style={{ textAlign: 'center', fontSize: '10', fontStyle: 'italic' }}>judysuhjunglee [at] gmail [dot] com</p>
                </div>


            </div>

        )

    }
}