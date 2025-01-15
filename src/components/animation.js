import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Sketch from 'react-p5';
import "../App.css"
// import './styles.css';

export default class Animation extends Component {

    setup = (p5, parentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(parentRef);
        // canvas.style('z-index', '-3');
        let x = 0;
        let y = 0;
    };

    draw = (p5) => {
        // p5.background(0);
        // p5.fill(255, this.y * 1.3, 0);
        // p5.ellipse(p5.width / 2, this.y, 50);
        // if (this.y > p5.height) this.direction = '';
        // if (this.y < 0) {
        // 	this.direction = '^';
        // }
        // if (this.direction === '^') this.y += 8;
        // else this.y -= 4;
        let t = p5.millis() * .01

        // for loop from professor compton!

        for (var i = 0; i < 200; i++) {
            let x = (t * 60 + i * 4)
            let y = (t * 100 + i * 10)

            //more random colors per square
            let hue = 'red'

            x %= p5.width
            y %= p5.height

            p5.fill(hue, 100, 50, .1);
            p5.square(x, y, 20);


            p5.textSize(20);



        }
    }

    render() {
        if (this.props.chaos) {
            return (
                <Sketch className="sketch-container" setup={this.setup} draw={this.draw} />

            )
        }
        else {
            return null
        }

    }
}


// import { useRef, useState, useLayoutEffect, Component } from 'react';


// const Animation = props => {
//     const containerRef = useRef();

//     const Sketch = (p) => {
//         p.setup = () => {
//             p.createCanvas(p.windowWidth, p.windowHeight);
//         }

//         p.draw = () => {
//             let t = p.millis() * .01

//             // 		// for loop from professor compton!

//             for (var i = 0; i < 200; i++) {
//                 let x = (t * 60 + i * 4)
//                 let y = (t * 100 + i * 10)

//                 //more random colors per square
//                 let hue = 'red'

//                 x %= p.width
//                 y %= p.height

//                 p.fill(hue, 100, 50, .1);
//                 p.square(x, y, 20);


//                 p.textSize(20);

//                 p.text('crayola conveyor belt', 50, 40)


//             }
//         }

//         p.windowResized = function() {
//             p.resizeCanvas(p.windowWidth, p.windowHeight);
//           }

//     }

//     // useLayoutEffect(
//     //     () => {
//     //       // Make sure the p5.js canvas is a child of the component in the DOM
//     //       let s = new p5(Sketch, containerRef.current);

//     //       // Remove the sketch when the component is removed/replaced
//     //       return () => s.remove();
//     //     },
//     //     // This empty list tells React that this effect never needs to get re-rendered
//     //     []
//     //   );

//       return (
//         <div className="sketch-container" ref={containerRef}></div>
//       );
//     }

//     export default Animation;